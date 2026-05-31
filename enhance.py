#!/usr/bin/env python3
# curriculum.js에 (1) 자연스러운 말투의 개념 설명, (2) 왕초보 혼란 포인트 노트를 주입한다.
import json, os

BASE = os.path.dirname(os.path.abspath(__file__))
txt = open(os.path.join(BASE, "curriculum.js"), encoding="utf-8").read()
C = json.loads(txt[txt.index("{"): txt.rindex("}") + 1])

# 1) 개념 — 음성으로 들어도 자연스러운 말투(차 안에서 선생님이 말해주듯)
CONCEPTS = {
1: "자, 오늘은 딱 한 단어예요. be. 우리말로 나 배고파, 나 괜찮아 할 때 그 ~야를 영어는 이 be 하나로 다 해요. I'm, 나는. 뒤에 단어 하나만 붙이면 끝이에요. I'm okay. I'm hungry. 그런데 우리말엔 이 be가 없어서 자꾸 빼먹어요. I hungry가 아니라 꼭 I'm hungry. 중간에 be가 들어간다, 이거 하나만 기억해요. 오늘은 이걸로 기분이랑 상태를 다 말해볼게요.",
2: "오늘도 be예요. 이번엔 어디 있는지랑, 아니야를 말해봐요. I'm at home, 나 집에 있어. 아니라고 할 땐 be 뒤에 not만 붙여요. I'm not late, 나 안 늦었어. 물어볼 땐 순서가 살짝 바뀌어요. You are가 Are you로. Are you there? 이게 다예요. 쉽죠.",
3: "오늘은 have. 있다, 가지고 있다는 뜻이에요. I have a car, 나 차 있어. 여기서 하나 짚을게요. 영어는 하나를 셀 때 앞에 a를 붙여요. a car, a question. 우리말엔 없어서 자꾸 빼먹는데, 영어는 이 a가 자연스러워요. 그리고 그 사람 얘기할 땐 have가 has로 바뀌어요. He has a car. 3인칭은 모양이 변한다, 기억해 둬요.",
4: "have의 다른 얼굴이에요. 놀랍게도 have가 먹다도 돼요. I have lunch, 점심 먹어. 또 have to를 붙이면 해야 한다가 돼요. I have to go, 나 가야 해. 똑같은 have인데 to 하나 붙었다고 뜻이 확 바뀌죠. 그리고 어제 먹은 건 had예요. haved가 아니에요. 자주 쓰는 단어는 이렇게 모양이 막 변해요.",
5: "오늘은 do예요. 이게 좀 신기한데, 뜻 없이 일만 해요. 부정할 때랑 물어볼 때 도와주는 단어예요. 몰라는 I don't know. don't를 동사 앞에 딱. 물어볼 땐 문장 맨 앞에 Do. Do you know? 우리말엔 이런 게 없어서 어색한데, 영어는 부정이랑 질문에 이 do가 꼭 나와요. 오늘 이거 하나 익혀두면 뭐든 묻고 부정할 수 있어요.",
6: "오늘은 좀 쉬어가요. 지금까지 배운 be, have, do 세 개를 섞어볼 거예요. 짧은 문장 두 개를 그냥 이어 붙이면 그게 대화예요. 배고파, 그래서 먹어야 해. I'm hungry, so I have to eat. 어려운 거 없어요. and, so, but, because. 이 네 개로 문장을 이으면 돼요.",
7: "오늘은 go, 가다예요. 그런데 지금 가는 중이라고 할 땐 be랑 같이 써요. I am going. 줄여서 I'm going home, 나 집에 가. 지금 하고 있는 일은 다 이렇게 be 더하기 ing예요. 어디 가냐고 물을 땐 Where are you going? 오늘은 이걸로 어디 가는지 말해봐요.",
8: "오늘은 미래예요. 앞으로 할 일을 말할 때, 영어는 어려운 거 안 써요. 그냥 going to만 붙여요. I'm going to eat, 나 먹을 거야. I'm going to sleep, 잘 거야. 봐요, going to가 ~할 거야예요. 미래 시제 문법 같은 거 외울 필요 없어요. 이거 하나면 돼요.",
9: "오늘은 go에 방향을 붙여볼 거예요. 이게 진짜 영어의 힘이에요. go 뒤에 위, 아래, 안, 밖만 붙이면 돼요. Go up 올라가, go down 내려가, go out 나가, go back 돌아가. 같이 가자고 할 땐 Let's go. 이 말들, 칸쿤 물속에서 그대로 써요. 단어 몇 개로 다 통해요.",
10: "오늘부터 get이에요. 영어에서 제일 많이 쓰는 단어, 왕이에요. 먼저 얻다, 받다, 사다. I got it, 알았어 또는 받았어. 가게에서 Can I get a coffee? 하면 커피 하나 주세요가 돼요. 그리고 get의 과거는 getted가 아니라 got이에요. 이거 하나 기억해요.",
11: "오늘도 get인데, 이번엔 ~되다랑 도착하다예요. 같은 get이 이렇게 변신해요. It's getting cold, 추워지고 있어. I got home, 집에 도착했어. 점점 어떻게 되어간다 할 때 getting을 써요. 한 단어가 이렇게 여러 일을 하는 게 영어예요.",
12: "get의 마지막 얼굴이에요. 놀랍게도 이해하다도 get이에요. I get it, 이해했어. 그리고 방향을 붙이면 또 달라져요. Get up 일어나, get in 타, get out 나와. 우리말 먹다가 밥도 먹고 마음도 먹고 나이도 먹잖아요. 영어 get이 딱 그래요. 하나로 여러 개.",
13: "오늘은 go랑 get을 섞어요. 이 두 단어만 자유롭게 써도 이동하고, 사고, 도착하고, 이해하는 게 다 돼요. 천천히 가, 차에 타, 거기 어떻게 가. 두 단어로 이만큼 말할 수 있다는 걸 오늘 느껴봐요.",
14: "오늘은 want, 원하다예요. 뒤에 물건이 오면 그걸 원하는 거예요. I want water, 물 줘. 뒤에 동사를 넣고 싶으면 사이에 to를 껴요. I want to go, 가고 싶어. want to, 하고 싶어. 이 to 빼먹기 쉬운데 꼭 넣어요.",
15: "오늘은 can, 할 수 있다예요. I can do it, 나 할 수 있어. 부탁할 때도 써요. Can you help me? 도와줄래? 하나 중요한 거, can 뒤엔 동사 원형이 그냥 와요. He can do, He cans 이런 거 없어요. 그리고 물속에서 꼭 쓸 말, I can't breathe, 숨 못 쉬겠어. 오늘 같이 익혀요.",
16: "오늘은 need, 필요하다예요. I need water, 물 필요해. 뭘 해야 한다고 할 땐 need to. I need to rest, 나 쉬어야 해. want랑 비슷한데, want는 하고 싶다, need는 꼭 필요하다예요. 다이빙에서 제일 중요한 말, I need air, 공기 필요해. 이거 오늘 확실히 해둬요.",
17: "오늘은 let이에요. 부드럽게 말하는 마법의 단어예요. Let me는 내가 할게, 또는 하게 해줘. Let me see, 어디 보자. Let's는 같이 하자. Let's go, 가자. 명령처럼 딱딱하게 안 하고, 이 let을 쓰면 훨씬 자연스러워요. 오늘 이 느낌만 익혀요.",
18: "오늘은 want, can, need, let 네 개를 섞어요. 원하고, 할 수 있고, 필요하고, 같이 하자고. 이 네 개면 내 마음이랑 부탁을 거의 다 말해요. 물속 상황도 미리 한번 연습해 볼게요.",
19: "오늘은 take예요. 가져가다인데 그것보다 훨씬 많이 써요. take a look 한번 봐, take the bus 버스 타, take a photo 사진 찍어, take your time 천천히 해. 그리고 숨 깊게 쉬어, take a deep breath. 다이빙 전에 꼭 듣는 말이죠. 한 단어가 또 여러 일을 해요.",
20: "오늘은 make, 만들다예요. 그런데 ~되게 하다로도 써요. I made it, 해냈어. make sure, 확실히 해. That makes sense, 그거 말 되네. 그리고 만든 건 maked가 아니라 made예요. 자주 쓰는 동사는 또 불규칙이에요.",
21: "오늘은 질문이에요. 누구, 뭐, 언제, 어디, 왜, 어떻게. who, what, when, where, why, how. 이 여섯 개를 문장 맨 앞에 놓으면 뭐든 물어볼 수 있어요. Where is the bathroom? How much is it? 여행에서 제일 많이 쓸 무기예요. 오늘 이 여섯 개랑 친해져요.",
22: "오늘은 종합이에요. 지금까지 배운 걸 짧은 대화로 엮어볼 거예요. 만나서 인사하고, 묻고, 부탁하고, 헤어지고. 어려운 단어 하나도 안 써요. 다 아는 거예요. 한 흐름으로 가볼게요.",
23: "이제 진짜 칸쿤이에요. 오늘은 공항이랑 입국. 다 아는 단어로 돼요. I'm here for diving, 다이빙하러 왔어요. I have a reservation, 예약했어요. Where is...? 어디예요? 새 단어 거의 없죠. 지금까지 배운 걸로 입국 통과해 봐요.",
24: "오늘은 다이빙샵이에요. 장비 빌리고, 물어보고, 준비하는 말. I need a tank, 공기통 필요해요. Can I get...? 그리고 I'm a certified diver, 저 자격증 있어요. 전부 우리가 배운 동사로 돼요. 현장에서 바로 써먹을 거예요.",
25: "오늘은 다이빙 브리핑이랑 수신호예요. 한 가지 꼭 짚을게요. 물속에선 입에 호흡기를 물고 있어서 말을 못 해요. 진짜 신호는 손으로 줘요. 그래서 오늘 이 표현들은 두 가지로 써요. 하나, 물에 들어가기 전 브리핑이랑 수면에서 짝이랑 주고받을 때. 둘, 강사가 영어로 신호를 설명할 때 그게 무슨 뜻인지 알아듣게. I'm okay, 괜찮아. Go down 내려가, come up 올라가. Slow down 천천히. 짧지만 다 통해요. 손동작이랑 같이 기억해 둬요.",
26: "마지막 날이에요. 식당에서 주문하고 계산하고, 아프면 도움 청하고, 고맙다고 인사하는 말. Can I get the check? 계산서 주세요. I don't feel good, 몸이 안 좋아요. Thank you. 여기까지면 칸쿤에서 충분히 살아요. 잘 했어요.",
}

# 2) 혼란 포인트 노트 — 헷갈리는 문장에만 (id: 짧은 설명)
NOTES = {
"d1_01": "I'm은 I am의 줄임. 우리말 나 ~야의 ~야가 영어선 꼭 들어가요.",
"d1_02": "물어볼 땐 You are를 Are you로 뒤집어요.",
"d1_18": "He's는 He is. 그 사람은 ~야.",
"d2_11": "아니라고 할 땐 be 뒤에 not. I'm not.",
"d3_01": "셀 수 있는 하나엔 앞에 a. 우리말엔 없는 거예요.",
"d3_11": "idea처럼 모음 소리로 시작하면 a 대신 an.",
"d3_17": "I have지만 3인칭(그 사람)은 has로 바뀌어요.",
"d3_19": "둘 이상이면 끝에 s. minute에서 minutes.",
"d4_01": "여기서 have는 먹다. I have lunch는 점심 먹어.",
"d4_02": "have의 과거는 had. haved 아니에요.",
"d4_07": "have는 가지다, have to는 해야 한다. to가 뜻을 바꿔요.",
"d5_01": "부정은 동사 앞에 don't. 안 ~.",
"d5_02": "물어볼 땐 맨 앞에 Do.",
"d5_17": "do의 과거는 did. didn't는 안 했어.",
"d6_16": "3인칭은 don't가 아니라 doesn't.",
"d7_01": "지금 하는 중은 be 더하기 동사ing. I am going.",
"d7_16": "3인칭 질문은 Does, 동사는 원형 go.",
"d8_01": "going to는 ~할 거야. 미래는 이걸로 끝.",
"d10_01": "got은 get의 과거.",
"d10_03": "Can I get...?은 ~ 주세요. 가게에서 쓰는 말.",
"d11_04": "getting은 점점 ~해지다. It's getting cold는 추워지고 있어.",
"d14_04": "하고 싶다는 want 더하기 to 더하기 동사. to 빼먹지 마요.",
"d15_01": "can 뒤엔 동사 원형 그대로. cans 같은 건 없어요.",
"d16_03": "need는 꼭 필요하다. want(하고 싶다)보다 강해요.",
"d19_03": "take a look은 한번 보다. take가 보다로도 쓰여요.",
"d9_20": "go all the way는 중간에 멈추지 말고 끝까지. 일·거리 둘 다 써요.",
"d20_01": "made는 make의 과거.",
"d21_04": "where(어디)를 맨 앞에. 의문사 더하기 is 더하기 주어.",
"d26_05": "정해진 그것엔 the. the check는 그 계산서.",
}

TITLES = { 25: "다이빙 브리핑·수신호" }

# 한국어 큐 교정 — 번역체/모호/영어 오인 유발 (영어는 그대로, 한국어 음성만 재생성)
KO_FIX = {
  "d2_02": "나 회사에 있어.",
  "d2_16": "거기 멀어?",
  "d2_17": "거기 가까워.",
  "d3_18": "와이파이 돼요?",
  "d7_14": "우리 늦었어, 가야 해.",
  "d9_20": "끝까지 해.",
  "d11_13": "나 슬슬 긴장돼.",
  "d11_16": "나 슬슬 졸려.",
  "d11_19": "나 슬슬 짜증나.",
  "d20_13": "빨리 끝내자.",
  "d20_16": "시끄럽게 하지 마.",
  "d23_04": "저 휴가로 왔어요.",
  "d25_05": "속도 줄여.",
  "d25_13": "나 너 보여.",
}

# 장면(scene) — 지시어(이거/그거/거기)·모호한 문장에만. 큐 음성 앞에 짧게 재생 + 화면 표시.
SCENES = {
  "d1_09": "음식을 한 입 먹어보고.",
  "d1_10": "걱정하는 사람을 안심시키며.",
  "d1_14": "해보고 나서.",
  "d1_15": "하다가 막혀서.",
  "d1_20": "상대 말에 맞장구치며.",
  "d2_03": "찾던 걸 발견하고.",
  "d2_04": "멀리 가리키며.",
  "d2_07": "내 물건이라고 짚으며.",
  "d2_08": "물건을 건네주며.",
  "d2_10": "결과를 보고 실망해서.",
  "d2_16": "택시 타기 전에 기사에게.",
  "d2_17": "길 물어본 사람에게.",
  "d2_19": "전화로 상대를 확인하며.",
  "d6_08": "물건이 마음에 안 들 때.",
  "d10_04": "친구가 가진 걸 보고.",
  "d10_15": "문자 보낸 뒤 확인하며.",
  "d10_19": "식당 직원이 손님에게.",
  "d12_18": "설명을 다 듣고 나서.",
  "d14_08": "가게에서 물건을 가리키며.",
  "d14_09": "권하는 걸 사양하며.",
  "d16_16": "쓰던 게 고장 났을 때.",
  "d19_01": "상대에게 물건을 건네며.",
  "d22_10": "뭐 먹을지 물어오면.",
}

# 응용(APPLY) — 슬롯만 바꾸면 폭발적으로 늘어나는 핵심 패턴. 화면 노트로(운전 중엔 음성 흐름 유지).
APPLY_NOTES = {
  "d5_03": "I don't ~ 는 안 ~해. like 자리만 바꿔봐: I don't know, I don't care.",
  "d8_05": "going to 뒤 동사만 바꾸면 다 미래. ask 자리에 eat, call, try.",
  "d11_05": "I'm getting ~ 는 슬슬/점점 ~. hungry 자리에 tired, cold, better.",
  "d12_08": "get + 방향. in 자리에 out(내려), on/off(타다/내리다).",
  "d14_08": "want + 물건. this 자리에 that, more, one.",
  "d15_05": "Can you ~? 는 ~해줄래? help 자리에 see, fix, wait.",
  "d15_08": "Can I ~? 는 ~해도 돼요/주세요. have 자리에 use, get.",
  "d16_05": "I need to ~ 는 ~해야 해. rest 자리에 go, eat, stop.",
  "d17_03": "Let me ~ 는 내가 ~할게. help 자리에 see, check, ask.",
  "d17_04": "Let's ~ 는 같이 ~하자. go 자리에 eat, start, wait.",
  "d19_16": "Take your ~. time이면 천천히 해, seat이면 앉아.",
  "d20_04": "Make sure ~ 는 ~인지 꼭 확인해. 뒤에 문장을 붙여봐.",
  "d21_06": "How do you ~? 는 어떻게 ~해요? do this 자리에 say it, use it.",
  "d23_09": "Where can I get ~? 는 ~ 어디서 구해요/타요? taxi 자리에 cash, water.",
  "d26_05": "Can I get the ~? 식당에서. check면 계산서, bill도 같은 뜻.",
}

# d14_03: want+명사 예시로 정리(to 규칙과 분리)
D14_03 = {"ko": "나 커피 줘.", "en": "I want a coffee.", "note": "want 뒤에 물건이면 to 없이. 동사일 때만 want to."}

# 복습일 분량 경량화(성공 체험): 20 → 14
TRIM_REVIEW = {6: 14, 13: 14, 18: 14}

# 숫자·시간·가격 '답하기' 보강(동사 안 늘리고 숫자만). 멱등(id 중복 방지)
ADD_ITEMS = {
 21: [
   {"id": "d21_21", "tag": "wh", "ko": "두 명이요.", "en": "Two people."},
   {"id": "d21_22", "tag": "wh", "ko": "저 혼자예요.", "en": "Just me."},
   {"id": "d21_23", "tag": "wh", "ko": "7시에요.", "en": "At seven.", "note": "시간 대답은 at. at seven, at eight."},
   {"id": "d21_24", "tag": "wh", "ko": "3시 30분이요.", "en": "It's three thirty."},
 ],
 24: [
   {"id": "d24_21", "tag": "trip", "ko": "한 시간 걸려요.", "en": "It takes about an hour."},
   {"id": "d24_22", "tag": "trip", "ko": "공기통 두 개요.", "en": "Two tanks, please."},
   {"id": "d24_23", "tag": "trip", "ko": "8시쯤에요.", "en": "Around eight."},
 ],
 26: [
   {"id": "d26_21", "tag": "trip", "ko": "두 개 살게요.", "en": "I'll take two.", "note": "개수는 동사 뒤에. take two, take one."},
   {"id": "d26_22", "tag": "trip", "ko": "맥주 두 잔 주세요.", "en": "Two beers, please."},
   {"id": "d26_23", "tag": "trip", "ko": "하나면 돼요.", "en": "Just one."},
 ],
}

n_concept = n_note = n_scene = 0
for d in C["days"]:
    if d["day"] in TITLES:
        d["title"] = TITLES[d["day"]]
    if d["day"] in CONCEPTS:
        d["concept"] = CONCEPTS[d["day"]]; n_concept += 1
    if d["day"] in TRIM_REVIEW:
        d["items"] = d["items"][:TRIM_REVIEW[d["day"]]]
    if d["day"] in ADD_ITEMS:
        have = {it["id"] for it in d["items"]}
        for it in ADD_ITEMS[d["day"]]:
            if it["id"] not in have:
                d["items"].append(it)
    for it in d["items"]:
        if it["id"] == "d14_03":
            it["ko"] = D14_03["ko"]; it["en"] = D14_03["en"]; it["note"] = D14_03["note"]
        if it["id"] in KO_FIX:
            it["ko"] = KO_FIX[it["id"]]
        if it["id"] in SCENES:
            it["scene"] = SCENES[it["id"]]; n_scene += 1
        if it["id"] in NOTES:
            it["note"] = NOTES[it["id"]]; n_note += 1
        elif it["id"] in APPLY_NOTES:
            it["note"] = APPLY_NOTES[it["id"]]; n_note += 1

header = ("// 영어 엔진 커리큘럼 — 단일 소스(자동 생성됨). 앱과 generate_audio.py가 함께 읽는다.\n"
          "// 수정은 enhance.py 또는 직접. items[].id = 음성파일, items[].note = 혼란 포인트 설명.\n")
out = header + "window.CURRICULUM = " + json.dumps(C, ensure_ascii=False, indent=2) + ";\n"
open(os.path.join(BASE, "curriculum.js"), "w", encoding="utf-8").write(out)
print(f"개념 갱신: {n_concept}일 / 노트: {n_note}개 / 장면: {n_scene}개")
