#!/usr/bin/env python3
# curriculum.js를 읽어, ready:true 인 날의 개념 설명 + 각 문장(한/영)을 OpenAI TTS(onyx)로 굽는다.
#   개념:  audio/d<day>_intro.mp3   (한국어)
#   문장:  audio/<id>_ko.mp3, <id>_en.mp3
# 이미 있으면 건너뜀(재실행 저렴). 동사 추가 → 이 스크립트만 다시 돌리면 새 것만 생성.
import json, os, sys, time, urllib.request, urllib.error

BASE = os.path.dirname(os.path.abspath(__file__))
KEY = open(os.path.join(BASE, "tts_api.txt"), encoding="utf-8").read().strip()

# curriculum.js 안의 객체 리터럴만 추출해 파싱(엄격 JSON)
txt = open(os.path.join(BASE, "curriculum.js"), encoding="utf-8").read()
C = json.loads(txt[txt.index("{"): txt.rindex("}") + 1])

AUDIO = os.path.join(BASE, "audio")
os.makedirs(AUDIO, exist_ok=True)

VOICE = "onyx"
MODEL = "gpt-4o-mini-tts"
INSTR = {
    "en": "Speak clearly and warmly at a slightly slow, easy pace, like a friendly tutor for a beginner.",
    "ko": "또렷하고 자연스럽게, 친절한 선생님처럼 말해줘.",
    "ko_q": "이 문장은 질문이야. 문장 끝의 억양을 분명하게 올려서, 누가 들어도 물어보는 의문문이라는 게 느껴지게 또렷이 읽어줘.",
}

def instr_for(text, lang):
    if lang == "ko" and text.strip().endswith("?"):
        return INSTR["ko_q"]
    return INSTR[lang]

def synth(text, lang, out, tries=4):
    body = json.dumps({
        "model": MODEL, "voice": VOICE, "input": text,
        "response_format": "mp3", "instructions": instr_for(text, lang),
    }).encode("utf-8")
    for attempt in range(tries):
        try:
            req = urllib.request.Request(
                "https://api.openai.com/v1/audio/speech", data=body,
                headers={"Authorization": "Bearer " + KEY, "Content-Type": "application/json"},
            )
            with urllib.request.urlopen(req, timeout=60) as r:
                d = r.read()
            with open(out, "wb") as f:
                f.write(d)
            return len(d)
        except (urllib.error.HTTPError, urllib.error.URLError, TimeoutError) as e:
            code = getattr(e, "code", None)
            if attempt == tries - 1:
                raise
            time.sleep(2 * (attempt + 1))  # 2s, 4s, 6s 백오프
    return 0

def need(out):
    return not (os.path.exists(out) and os.path.getsize(out) > 1000)

ok = skip = fail = 0
jobs = []
for d in C["days"]:
    if not d.get("ready"):
        continue
    if d.get("concept"):
        jobs.append((f"d{d['day']}_intro", d["concept"], "ko", os.path.join(AUDIO, f"d{d['day']}_intro.mp3")))
    for it in d.get("items", []):
        for lang in ("ko", "en"):
            jobs.append((it["id"]+"_"+lang, it[lang], lang, os.path.join(AUDIO, f"{it['id']}_{lang}.mp3")))

total = len(jobs)
for i, (name, text, lang, out) in enumerate(jobs, 1):
    if not need(out):
        skip += 1; continue
    try:
        synth(text, lang, out); ok += 1
        print(f"[{i}/{total}] {name} OK")
    except Exception as e:
        fail += 1
        print(f"[{i}/{total}] {name} FAIL {getattr(e,'code','')} {str(e)[:120]}")

print(f"DONE  생성:{ok}  건너뜀:{skip}  실패:{fail}  (총 {total})")
