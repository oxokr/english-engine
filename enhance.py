#!/usr/bin/env python3
# curriculum.js에 (1) 자연스러운 말투의 개념 설명, (2) 왕초보 혼란 포인트 노트,
# (3) 전 문장 시제 자동분류(평소/과거/미래/지금) 주입.
import json, os, re

# ===== 시제 자동분류 — 명확한 4시제만. 상태·명령·요청·소유·욕구는 None. =====
# 원어민 감수 에이전트 전수 검수로 잡은 오분류(명령문·소유질문·욕구/필요·상태) → 강제 None.
TENSE_NONE = {
  "d3_03","d3_04","d3_06","d3_07","d3_12","d3_15","d3_16","d3_18","d3_20",
  "d4_09","d4_12","d5_19","d5_20","d6_02","d6_05","d6_08","d6_13","d6_14",
  "d9_14","d14_02","d14_06","d14_09","d14_11","d14_15","d14_17","d14_19",
  "d16_04","d16_09","d16_12","d16_19","d18_05","d20_16","d21_18","d22_05",
  "d22_07","d22_09","d22_10","d23_03","d23_12","d24_11","d26_08",
}
_PLACE = {"home","work","school","downtown","there","bed","the","a","an","to"}
def classify_tense(en, cid=None):
    if cid in TENSE_NONE: return None
    s = en.strip().lower()
    # 명령문(don't로 시작) → 시제 없음
    if s.startswith("don't") or s.startswith("do not"): return None
    # 미래: will / 'll / won't / going to + 동사
    if re.search(r"\bwon't\b", s): return "미래"
    if re.search(r"\b\w+'ll\b", s) or re.search(r"\bwill\b", s): return "미래"
    m = re.search(r"\bgoing to\s+(\w+)", s)
    if m:
        return "지금" if m.group(1) in _PLACE else "미래"   # going to 장소=지금(이동), going to 동사=미래
    # 지금(진행중): be + ~ing
    if (re.search(r"\b(am|is|are)\b", s) or re.search(r"('m|'re|'s)\b", s)) and re.search(r"\b\w+ing\b", s):
        return "지금"
    # 과거: 명확한 과거형만
    if re.search(r"\b(was|were|had|did|didn't|got|made|ate|went|drank|came|took|worked)\b", s):
        return "과거"
    # 평소(단순현재): every day / don't / do you / does
    if re.search(r"every day", s) or re.search(r"\bdon't\b", s) or re.search(r"\bdo you\b", s) or re.search(r"\bdoes\b", s):
        return "평소"
    return None  # 상태(I'm okay)·명령(Go up)·요청(Can you)·욕구(I want) → 시제 태그 없음

import json, os

BASE = os.path.dirname(os.path.abspath(__file__))
txt = open(os.path.join(BASE, "curriculum.js"), encoding="utf-8").read()
C = json.loads(txt[txt.index("{"): txt.rindex("}") + 1])

# 1) 개념 — 음성으로 들어도 자연스러운 말투(차 안에서 선생님이 말해주듯)
CONCEPTS = {
1: "자, 오늘은 딱 한 단어예요. be. 우리말로 나 배고파, 나 괜찮아 할 때 그 ~야를 영어는 이 be 하나로 다 해요. I'm, 나는. 뒤에 단어 하나만 붙이면 끝이에요. I'm okay. I'm hungry. 그런데 우리말엔 이 be가 없어서 자꾸 빼먹어요. I hungry가 아니라 꼭 I'm hungry. 중간에 be가 들어간다, 이거 하나만 기억해요. 오늘은 이걸로 기분이랑 상태를 다 말해볼게요.",
2: "오늘도 be예요. 이번엔 어디 있는지랑, 아니야를 말해봐요. I'm at home, 나 집에 있어. 아니라고 할 땐 be 뒤에 not만 붙여요. I'm not late, 나 안 늦었어. 물어볼 땐 순서가 살짝 바뀌어요. You are가 Are you로. Are you there? 이게 다예요. 쉽죠.",
3: "오늘은 have. 있다, 가지고 있다는 뜻이에요. I have a car, 나 차 있어. 여기서 a 하나 짚을게요. 영어는 하나를 셀 때 앞에 a를 붙여요. a car, a question. 처음 말하는, 아무거나 하나는 a예요. 그런데 너도 알고 나도 아는 바로 그거를 말할 땐 a 대신 the를 써요. a taxi는 아무 택시나, the taxi는 아까 그 택시. 화장실처럼 거기 하나뿐인 것도 the, the bathroom. 쉽게, a는 아무거나 하나, the는 바로 그거. 그리고 그 사람 얘기할 땐 have가 has로 바뀌어요. He has a car. 3인칭은 모양이 변해요.",
4: "have의 다른 얼굴이에요. 놀랍게도 have가 먹다도 돼요. I have lunch, 점심 먹어. 또 have to를 붙이면 해야 한다가 돼요. I have to go, 나 가야 해. 똑같은 have인데 to 하나 붙었다고 뜻이 확 바뀌죠. 그리고 어제 먹은 건 had예요. haved가 아니에요. 자주 쓰는 단어는 이렇게 모양이 막 변해요.",
5: "오늘은 do예요. 뜻 없이 일만 하는 단어인데, 부정할 때랑 물어볼 때 도와줘요. 몰라는 I don't know. don't를 동사 앞에 딱. 물어볼 땐 맨 앞에 Do. Do you know? 자, 여기서 제일 헷갈리는 거 하나 정리할게요. Do you랑 Are you. 가다, 알다, 좋아하다 같은 동작을 물으면 Do you. Do you know? Do you go? 반대로 괜찮다, 준비됐다 같은 상태를 물으면 Are you. Are you okay? Are you ready? 쉽게, 상태면 Are, 동작이면 Do. 이 하나만 잡으면 안 헷갈려요.",
6: "오늘은 좀 쉬어가요. 지금까지 배운 be, have, do 세 개를 섞어볼 거예요. 짧은 문장 두 개를 그냥 이어 붙이면 그게 대화예요. 배고파, 그래서 먹어야 해. I'm hungry, so I have to eat. 어려운 거 없어요. and, so, but, because. 이 네 개로 문장을 이으면 돼요.",
7: "오늘은 go, 가다예요. 지금 가는 중이라고 할 땐 be랑 같이 써요. I'm going home, 나 집에 가. 어디 가냐고 물으면 Where are you going? 그리고 오늘 does가 처음 나와요. 짚고 갈게요. 너나 나한테 물을 땐 Do you go. 그런데 그 사람, 또는 버스나 사물 하나한테 물을 땐 Do가 Does로 바뀌어요. Does this bus go downtown? 이 버스 시내 가요? 중요한 거 하나, does가 변신을 다 맡으니까 뒤에 오는 동사는 그냥 원형이에요. Does it goes 아니고 Does it go. s는 한 번만 붙어요.",
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
"d2_14": "the bathroom — 거기 하나뿐인 곳이라 a 아니고 the.",
"d10_13": "the receipt — 방금 그 영수증이라 the. 처음이면 a.",
"d4_01": "여기서 have는 먹다. I have lunch는 점심 먹어.",
"d4_02": "have의 과거는 had. haved 아니에요.",
"d4_07": "have는 가지다, have to는 해야 한다. to가 뜻을 바꿔요.",
"d5_01": "부정은 동사 앞에 don't. 안 ~.",
"d5_02": "물어볼 땐 맨 앞에 Do.",
"d5_04": "동작(좋아하다)을 물으면 Do you. 상태(괜찮다)면 Are you.",
"d5_17": "do의 과거는 did. didn't는 안 했어.",
"d6_16": "3인칭은 don't가 아니라 doesn't.",
"d7_01": "지금 하는 중은 be 더하기 동사ing. I am going.",
"d7_16": "그 사람·사물 하나엔 Do가 Does. 뒤 동사는 원형 go (goes 아님).",
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

# 같은 뜻인데 다른 동사 — "어? 같은 건가?" 혼란 방지. 조용한 곳용(정렬 모드)에서만 표시.
EQ = {
  "d4_07": "I need to go 랑 같은 뜻. have to = need to, 둘 다 '가야 해'. 바꿔 써도 돼요.",
  "d4_10": "I need to go now 랑 같은 뜻. have to = need to.",
  "d4_19": "I need to sleep 랑 같은 뜻. have to = need to.",
  "d16_06": "I have to go (Day4) 랑 같은 뜻. need to = have to.",
  "d16_07": "I have to sleep 랑 같은 뜻. need to = have to.",
  "d16_20": "I have to go now 랑 같은 뜻. need to = have to.",
  "d10_01": "I got it 은 방금 받았어/알았어 (과거). I get it 은 이해돼 (지금). 비슷하지만 시제가 달라요.",
  "d12_01": "I get it 은 지금 이해돼. I got it 은 알았어 (과거). 살짝 시제 차이.",
  "d15_04": "Let me help you 랑 비슷. I can help you 는 도와줄 수 있어, Let me help you 는 내가 도와줄게.",
  "d17_03": "I can help you 랑 비슷. Let me help you 는 내가 나서서 도와줄게 느낌.",
  # --- 동의어 전수 조사 추가분 ---
  "d3_04": "have time = 시간 여유, have the time = 몇 시야? the 하나로 뜻이 달라요.",
  "d14_01": "I want some water 라고도 해요. some 붙으면 살짝 부드러워요. 같은 뜻.",
  "d14_03": "Can I get a coffee? 랑 같은 뜻. want는 직설적, Can I get은 더 공손.",
  "d14_08": "Can I have this? 랑 같은 뜻. want는 직설적, Can I have는 공손.",
  "d15_08": "Can I get this? 랑 같은 뜻. 가게·식당에서 바꿔 써도 돼요.",
  "d8_05": "I'll ~ 랑 비슷. going to는 미리 정한 일, I'll은 방금 정한 일.",
  "d8_18": "I'll call you 랑 같은 뜻. 거의 같아서 바꿔 써도 돼요.",
  "d8_04": "We'll be late 랑 같은 뜻. going to be가 더 확실한 예상.",
  "d5_06": "I don't get it 이라고도 해요. get it이 더 편한 말. 같은 뜻.",
  "d5_07": "Do you get it? 이라고도 해요. get it이 더 캐주얼.",
  "d4_05": "Have fun 이랑 같은 뜻. 헤어질 때 바꿔 써도 돼요.",
  "d11_01": "I'm tired는 지금 피곤해, I got tired는 피곤해졌어(변화).",
  "d2_03": "It's here는 그게 여기 있어(물건), I'm here는 나 여기 있어(사람).",
  "d2_12": "We're getting there 는 가는 중(더 멂), almost there는 거의 다 옴.",
  "d15_05": "Can you give me a hand? 라고도 해요. a hand가 더 가벼운 부탁.",
  "d22_14": "Please speak slowly 라고도 해요. 같은 뜻, 바꿔 써도 돼요.",
  "d16_13": "I need to use the bathroom 이라고도 해요. 같은 뜻.",
  "d26_08": "I'm not okay 랑 비슷. feel good은 몸, not okay는 더 넓은 상황.",
  "d22_20": "Take care 라고도 해요. See you는 또 봐, Take care는 잘 지내.",
  "d19_20": "I want this 랑 같은 뜻. take가 더 자연스러운 결정 표현.",
  "d24_01": "I'm here for diving 이라고도 해요. to dive=동사, for diving=명사. 같은 뜻.",
  "d12_02": "I don't understand 랑 같은 뜻. don't get it이 더 편한 말.",
  "d12_03": "Do you understand? 랑 같은 뜻. get it이 더 캐주얼해요.",
}

# 번역체 재점검 — 원어민 감수 에이전트 전수 검수 결과(512개 중 1건만 유효, 나머지는 이미 자연스러움)
KO_FIX_EXTRA = {
  "d3_10": "우리 문제 생겼어.",
}

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

KO_FIX.update(KO_FIX_EXTRA)

# ===== 문장 목적 분류 + 관계쌍 (ultracode 워크플로 산출, 적대검증 통과) =====
import json as _json
_pd = _json.load(open(os.path.join(BASE, "purpose_data.json"), encoding="utf-8"))
PURPOSE = _pd["classification"]      # id -> state/action/have/need/ask/want/tell/none
RELATIONS = _pd["relations"]
# 모든 문장에 종류 라벨. "종류 · 의미 한 줄"로 직관적이게.
PURPOSE_TAGGED = {"need", "ask", "want", "tell", "state", "action", "have"}
PURPOSE_LABEL = {"need":"의무", "ask":"요청", "want":"욕구", "tell":"명령",
                 "state":"상태", "action":"행동", "have":"소유"}
# 종류별 의미 한 줄(라벨에 곁들임).
PURPOSE_MEAN = {
  "의무":"어쩔 수 없이 해야 함", "필요":"꼭 있어야 함", "욕구":"하고 싶음·원함",
  "명령":"상대에게 시킴·하자", "상태":"그냥 그러함·~이다", "행동":"무언가를 함",
  "소유":"가지고 있다·없다", "요청":"부탁",
  "부탁":"네가 해줘", "허락":"내가 해도 돼?", "질문":"궁금해서 물음",
  "능력":"할 수 있다·없다",
}

# 뜻 기반 라벨 보정 — 모양만으론 안 갈리는 것(능력 I can / 사실질문 Can you·wh-) 강제 지정.
# 검수 에이전트 전수 결과(뜻 기반). Day29 전용일·복합문은 적용에서 자동 제외됨.
LABEL_OVERRIDE = {
  "d5_09":"질문","d5_10":"질문","d7_03":"질문","d8_02":"질문","d8_11":"질문","d8_19":"질문",
  "d10_04":"질문","d11_03":"질문","d11_10":"질문","d13_05":"질문","d21_06":"질문","d21_07":"질문",
  "d21_09":"질문","d21_10":"질문","d21_16":"질문","d21_17":"질문","d22_03":"질문","d24_08":"질문",
  "d24_13":"질문","d24_14":"질문","d15_01":"능력","d15_02":"능력","d15_03":"질문","d15_04":"능력",
  "d15_05":"부탁","d15_06":"능력","d15_07":"능력","d15_10":"부탁","d15_11":"능력","d15_12":"능력",
  "d15_13":"질문","d15_14":"능력","d15_15":"부탁","d15_16":"능력","d15_18":"능력","d15_19":"능력",
  "d15_20":"질문","d18_13":"질문","d19_04":"부탁","d20_09":"부탁","d22_14":"부탁","d22_15":"부탁",
  "d22_16":"능력","d22_17":"부탁","d23_08":"능력","d23_14":"부탁","d24_16":"부탁","d25_12":"능력",
  "d25_13":"능력","d25_14":"능력","d1_08":"질문","d2_09":"질문","d2_14":"질문","d2_15":"질문",
  "d2_20":"질문","d10_03":"허락","d10_07":"허락","d10_13":"허락","d10_16":"허락","d10_19":"질문",
  "d14_02":"질문","d14_11":"질문","d14_19":"질문","d15_08":"허락","d15_09":"허락","d15_17":"질문",
  "d16_04":"질문","d18_05":"질문","d19_09":"질문","d20_02":"능력","d20_03":"능력","d21_01":"질문",
  "d21_02":"질문","d21_03":"질문","d21_04":"질문","d21_05":"질문","d21_08":"질문","d21_11":"질문",
  "d21_12":"질문","d21_13":"질문","d21_14":"질문","d21_18":"질문","d21_19":"질문","d21_20":"질문",
  "d22_09":"질문","d22_11":"질문","d22_12":"허락","d22_13":"질문","d23_07":"질문","d23_09":"질문",
  "d23_10":"질문","d23_13":"질문","d23_17":"질문","d23_19":"질문","d24_05":"허락","d24_10":"질문",
  "d24_18":"질문","d26_01":"허락","d26_02":"허락","d26_03":"허락","d26_05":"허락","d26_06":"허락",
  "d26_07":"질문","d26_12":"질문","d26_15":"허락","d26_16":"허락",
}
LABEL_MEAN2 = {"질문":"궁금해서 물음", "능력":"할 수 있다·없다", "부탁":"네가 해줘",
               "허락":"내가 해도 돼?", "행동":"무언가를 함"}

# 'ask'(요청)를 문장 모양으로 더 잘게: Can you=부탁(상대가), Can I=허락(내가). Day29 색과 동일 체계로 통일.
def refine_ask(en):
    e = en.strip()
    el = e.lower()
    if el.startswith("can you") or el.startswith("could you") or el.startswith("will you"):
        return "부탁"
    if el.startswith("can i") or el.startswith("could i") or el.startswith("may i"):
        return "허락"
    return "요청"  # 그 외(I can do it=능력 등)는 요청 그대로
# 관계쌍 → 노트 한 줄(해당 where 문장에). note가 이미 있으면 덮어쓰지 않고 보존 우선.
REL_NOTE = {}
for _p in RELATIONS:
    REL_NOTE.setdefault(_p["where"], "↔ " + _p["beginner_rule"])

# 문장 종류 혼동 안내(왕초보 종류 발굴) — 같은 동사가 의무/욕구/필요/명령 등으로 갈리는 지점.
KIND_NOTE = {
  "d4_07": "↔ '가야 해'(의무)는 have to, '가고 싶어'(욕구)는 want to. 끝소리로 갈려요.",
  "d14_04": "↔ '가고 싶어'(욕구)는 want to, '가야 해'(의무)는 have to.",
  "d4_19": "↔ '자야 해'(의무) have to ↔ '자고 싶어'(욕구) want to.",
  "d14_07": "↔ '자고 싶어'(욕구) want to ↔ '자야 해'(의무) have to.",
  "d16_02": "↔ '필요해'(need)는 없으면 안 돼, '원해/줘'(want)는 그냥 하고 싶어. need가 더 급해요.",
  "d16_05": "↔ '쉬어야 해'(필요) need to ↔ '쉬고 싶어'(욕구) want to.",
  "d25_18": "↔ 'Help me'는 급한 명령, 'Can you help me?'는 부탁. Can you 빠지면 명령처럼 들려요.",
  "d17_04": "↔ '가자'(같이, 제안)는 Let's go, '갈래?'(너 의향)는 Do you want to go?",
  "d14_06": "↔ '갈래?'(의향 질문) Do you want to go? ↔ '가자'(제안) Let's go.",
  "d26_19": "↔ 'I'll ~'은 방금 정한 약속(할게), 'I'm going to ~'는 미리 정한 계획(할 거야).",
  "d11_05": "↔ '배고파'(상태) I'm hungry ↔ '슬슬 배고파져'(변화중) I'm getting hungry.",
}

# ===== 시제 미니 단계 (Day 27~28) — "12시제 → 4칸" 생존 시제 =====
def mk(day, n, tag, ko, en, note=None):
    it = {"id": "d%d_%02d" % (day, n), "tag": tag, "ko": ko, "en": en}
    if note: it["note"] = note
    return it

D27_CONCEPT = ("영어 시제가 열두 개라고 들었죠? 겁먹지 마세요. 생존 영어는 딱 네 칸이면 돼요. "
  "평소, 과거, 미래, 지금. 같은 문장을 네 칸에 넣어볼게요. 평소엔 I eat, 어제는 I ate, "
  "내일은 I'll eat, 지금은 I'm eating. 보세요, 문장은 그대론데 시간만 바뀌죠. "
  "한국어는 시간을 대충 말하지만 영어는 이 네 칸을 꼭 골라요. 그래서 한국어 힌트에 "
  "매일, 어제, 내일, 지금을 넣어뒀어요. 그 단어 보고 네 칸 중 하나를 고르면 돼요. "
  "딱 하나만, 과거는 동사가 변해요. ate, went처럼요. 그건 그냥 외우세요.")

D28_CONCEPT = ("오늘은 아니라고 말하기예요. 여기가 진짜 중요해요. 시간마다 아니라는 말이 달라요. "
  "평소에 안 해는 don't. 어제 안 했어는 didn't. 내일 안 할 거야는 won't. 지금 안 하고 있어는 not. "
  "정리할게요. don't, didn't, won't, 이 셋은 뒤에 동사 원형이 와요. I didn't eat, ate 아니고 eat. "
  "그리고 지금 안 하고 있어만 be 더하기 not 더하기 ing예요. I'm not eating. "
  "딱 이 네 개만 잡으면 부정은 끝이에요.")

D29_CONCEPT = ("오늘은 묻는 말 세 가지를 딱 갈라볼게요. Do you, Can you, Can I. 진짜 자주 헷갈리죠. "
  "첫째 Do you는 사실을 물어요. 너 평소에 그래? 너 커피 마셔? Do you drink coffee? 정보가 궁금한 거예요. "
  "둘째 Can you는 부탁이에요. 그거 해줄래? 도와줄래? Can you help me? 상대가 움직여 주길 바라는 거죠. "
  "셋째 Can I는 허락이에요. 내가 해도 돼? 커피 하나 주세요. Can I get a coffee? 내가 하는 행동을 물어요. "
  "정리할게요. 정보가 궁금하면 Do you, 상대한테 해달라고 하면 Can you, 내가 해도 되냐고 하면 Can I. "
  "쉽게, Do you는 그래? Can you는 해줄래? Can I는 해도 돼? 이 세 마디만 기억해요.")

TENSE_DAYS = [
  {"day":27, "verb":"시제", "phase":"시제 · 4개의 시간", "ready":True,
   "dlabel":"시제 ①", "title":"시제 · 긍정", "concept":D27_CONCEPT, "items":[
    mk(27,1,"평소","나 매일 먹어.","I eat every day.","평소·반복은 동사 원형 그대로. I eat."),
    mk(27,2,"평소","나 매일 거기 가.","I go there every day."),
    mk(27,3,"평소","나 매일 커피 마셔.","I drink coffee every day."),
    mk(27,4,"평소","나 매일 일해.","I work every day."),
    mk(27,5,"평소","나 매일 그거 해.","I do it every day."),
    mk(27,6,"과거","나 어제 먹었어.","I ate yesterday.","eat의 과거는 ate. ed 아니고 통째로 바뀜. 외우기."),
    mk(27,7,"과거","나 어제 거기 갔어.","I went there yesterday.","go의 과거는 went."),
    mk(27,8,"과거","나 어제 커피 마셨어.","I drank coffee yesterday.","drink의 과거는 drank."),
    mk(27,9,"과거","나 어제 일했어.","I worked yesterday.","work는 규칙. 뒤에 ed 붙여 worked."),
    mk(27,10,"과거","나 어제 그거 했어.","I did it yesterday.","do의 과거는 did."),
    mk(27,11,"미래","나 내일 먹을 거야.","I'll eat tomorrow.","미래는 I'll(=I will) + 원형. I'll eat."),
    mk(27,12,"미래","나 내일 거기 갈 거야.","I'll go there tomorrow."),
    mk(27,13,"미래","나 내일 커피 마실 거야.","I'll drink coffee tomorrow."),
    mk(27,14,"미래","나 내일 일할 거야.","I'll work tomorrow."),
    mk(27,15,"미래","나 내일 그거 할 거야.","I'll do it tomorrow."),
    mk(27,16,"지금","나 지금 먹고 있어.","I'm eating now.","지금은 be + 동사ing. I'm eating."),
    mk(27,17,"지금","나 지금 거기 가고 있어.","I'm going there now."),
    mk(27,18,"지금","나 지금 커피 마시고 있어.","I'm drinking coffee now."),
    mk(27,19,"지금","나 지금 일하고 있어.","I'm working now."),
    mk(27,20,"지금","나 지금 그거 하고 있어.","I'm doing it now."),
   ]},
  {"day":28, "verb":"시제", "phase":"시제 · 4개의 시간", "ready":True,
   "dlabel":"시제 ②", "title":"시제 · 부정", "concept":D28_CONCEPT, "items":[
    mk(28,1,"평소","나 평소엔 안 먹어.","I don't eat.","평소 안 해 = don't + 원형. eat 그대로."),
    mk(28,2,"평소","나 평소엔 거기 안 가.","I don't go there."),
    mk(28,3,"평소","나 커피 안 마셔.","I don't drink coffee."),
    mk(28,4,"평소","나 평소엔 일 안 해.","I don't work."),
    mk(28,5,"평소","나 평소엔 그거 안 해.","I don't do it."),
    mk(28,6,"과거","나 어제 안 먹었어.","I didn't eat.","과거 안 했어 = didn't + 원형. ate 아니고 eat!"),
    mk(28,7,"과거","나 어제 거기 안 갔어.","I didn't go there."),
    mk(28,8,"과거","나 어제 커피 안 마셨어.","I didn't drink coffee."),
    mk(28,9,"과거","나 어제 일 안 했어.","I didn't work."),
    mk(28,10,"과거","나 어제 그거 안 했어.","I didn't do it."),
    mk(28,11,"미래","나 안 먹을 거야.","I won't eat.","미래 안 할 거야 = won't(=will not) + 원형."),
    mk(28,12,"미래","나 거기 안 갈 거야.","I won't go there."),
    mk(28,13,"미래","나 커피 안 마실 거야.","I won't drink coffee."),
    mk(28,14,"미래","나 일 안 할 거야.","I won't work."),
    mk(28,15,"미래","나 그거 안 할 거야.","I won't do it."),
    mk(28,16,"지금","나 지금 안 먹고 있어.","I'm not eating.","지금 안 함 = be + not + ing. 여기만 don't/didn't/won't 안 씀."),
    mk(28,17,"지금","나 지금 거기 안 가고 있어.","I'm not going there."),
    mk(28,18,"지금","나 지금 커피 안 마시고 있어.","I'm not drinking coffee."),
    mk(28,19,"지금","나 지금 일 안 하고 있어.","I'm not working."),
    mk(28,20,"지금","나 지금 그거 안 하고 있어.","I'm not doing it."),
   ]},
  {"day":29, "verb":"묻기", "phase":"묻는 말 · 3가지", "ready":True,
   "dlabel":"묻기", "title":"Do you / Can you / Can I", "concept":D29_CONCEPT, "items":[
    mk(29,1,"사실","너 커피 마셔?","Do you drink coffee?","Do you ~? = 평소에 그래? (사실·습관을 물음)"),
    mk(29,2,"사실","너 운전해?","Do you drive?"),
    mk(29,3,"사실","너 영어 해?","Do you speak English?"),
    mk(29,4,"사실","너 그거 알아?","Do you know it?"),
    mk(29,5,"사실","너 시간 있어?","Do you have time?","'있어?'(사실)는 Do you. 부탁이 아니에요."),
    mk(29,6,"부탁","도와줄래?","Can you help me?","Can you ~? = 해줄래? (상대가 해주길 부탁)"),
    mk(29,7,"부탁","천천히 말해 줄래?","Can you speak slowly?"),
    mk(29,8,"부탁","이거 고쳐 줄래?","Can you fix this?"),
    mk(29,9,"부탁","다시 말해 줄래?","Can you say that again?"),
    mk(29,10,"부탁","문 열어 줄래?","Can you open the door?"),
    mk(29,11,"허락","나 들어가도 돼?","Can I come in?","Can I ~? = 내가 해도 돼? (내 행동의 허락·요청)"),
    mk(29,12,"허락","커피 하나 주세요.","Can I get a coffee?","'주세요'도 내가 받는 거라 Can I get."),
    mk(29,13,"허락","화장실 써도 돼?","Can I use the bathroom?"),
    mk(29,14,"허락","이거 봐도 돼?","Can I see this?"),
    mk(29,15,"허락","나 여기 앉아도 돼?","Can I sit here?"),
    mk(29,16,"사실","너 매일 일해?","Do you work every day?","평소를 묻는 사실 질문 = Do you."),
    mk(29,17,"부탁","나 좀 도와줄래?","Can you give me a hand?","give me a hand = 도와주다. 역시 상대가 해줌 = Can you."),
    mk(29,18,"허락","나 네 펜 써도 돼?","Can I use your pen?"),
    mk(29,19,"부탁","사진 찍어 줄래?","Can you take a photo?","사진을 찍는 건 상대 = Can you."),
    mk(29,20,"허락","나 하나 더 먹어도 돼?","Can I have one more?","내가 먹는 거 = Can I."),
   ]},
]

n_concept = n_note = n_scene = n_eq = 0
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
        # 전 문장 시제 자동분류(Day 27·28·29 전용일 제외 — 거긴 tag가 곧 라벨)
        if d["day"] not in (27, 28, 29):
            tv = classify_tense(it["en"], it["id"])
            if tv: it["tense"] = tv
            elif "tense" in it: del it["tense"]
        # 복합문 감지: 문장이 2개 이상 합쳐진 것(., ?, ! 로 끝나는 절이 둘+)
        _parts = [p for p in re.split(r'[.?!]', it["en"]) if p.strip()]
        is_compound = len(_parts) >= 2
        # 라벨 부여. (Day27~29 전용일·복합문은 단일 라벨 제외)
        if d["day"] in (27, 28, 29):
            it.pop("purpose", None); it.pop("purposeLabel", None); it.pop("purposeMean", None); it.pop("compound", None)
        elif is_compound:
            # 복합문 = 두 목적이 이어진 것. 단일 라벨 대신 '두 문장' 표시.
            it.pop("purpose", None); it.pop("purposeLabel", None); it.pop("purposeMean", None)
            it["compound"] = True
        elif it["id"] in LABEL_OVERRIDE:
            # 뜻 기반 보정(질문/능력/부탁/허락 등) — 모양 분류보다 우선.
            it.pop("compound", None)
            lab = LABEL_OVERRIDE[it["id"]]
            it["purpose"] = "ask"  # 색 계열 키(상세는 라벨로)
            it["purposeLabel"] = lab
            it["purposeMean"] = PURPOSE_MEAN.get(lab, "")
        else:
            it.pop("compound", None)
            pkey = PURPOSE.get(it["id"])
            if pkey in PURPOSE_TAGGED:
                it["purpose"] = pkey
                lab = refine_ask(it["en"]) if pkey == "ask" else PURPOSE_LABEL[pkey]
                it["purposeLabel"] = lab
                it["purposeMean"] = PURPOSE_MEAN.get(lab, "")
            else:
                it.pop("purpose", None); it.pop("purposeLabel", None); it.pop("purposeMean", None)
        # 보조 안내(↔, 별도 줄이라 note와 공존 가능). 종류혼동(kind)은 핵심이라 note 있어도 표시.
        if it["id"] in KIND_NOTE:
            it["rel"] = KIND_NOTE[it["id"]]
        elif not it.get("note") and it["id"] in REL_NOTE:
            it["rel"] = REL_NOTE[it["id"]]
        else:
            it.pop("rel", None)
        if it["id"] in SCENES:
            it["scene"] = SCENES[it["id"]]; n_scene += 1
        if it["id"] in EQ:
            it["eq"] = EQ[it["id"]]; n_eq += 1
        if it["id"] in NOTES:
            it["note"] = NOTES[it["id"]]; n_note += 1
        elif it["id"] in APPLY_NOTES:
            it["note"] = APPLY_NOTES[it["id"]]; n_note += 1

# 시제 미니 단계(Day 27~28) 멱등 추가
have_days = {d["day"] for d in C["days"]}
for td in TENSE_DAYS:
    if td["day"] not in have_days:
        C["days"].append(td)
C["days"].sort(key=lambda d: d["day"])

# day 내 목적순 안정 재배치 — 같은 목적끼리 뭉쳐 패턴 학습.
# 복습일(mix)·시제전용(27,28)·trip(23~26)은 의도적 흐름이라 제외. 일반 동사 학습일만.
PURPOSE_ORDER = {"state":0, "have":1, "action":2, "need":3, "want":4, "ask":5, "tell":6, "none":7, None:7}
SKIP_REORDER = set([6,13,18,22,23,24,25,26,27,28,29])
for d in C["days"]:
    if d["day"] in SKIP_REORDER: continue
    d["items"].sort(key=lambda it: PURPOSE_ORDER.get(PURPOSE.get(it["id"]), 7))

header = ("// 영어 엔진 커리큘럼 — 단일 소스(자동 생성됨). 앱과 generate_audio.py가 함께 읽는다.\n"
          "// 수정은 enhance.py 또는 직접. items[].id = 음성파일, items[].note = 혼란 포인트 설명.\n")
out = header + "window.CURRICULUM = " + json.dumps(C, ensure_ascii=False, indent=2) + ";\n"
open(os.path.join(BASE, "curriculum.js"), "w", encoding="utf-8").write(out)
from collections import Counter
tc = Counter(it.get("tense") for d in C["days"] if d["day"] not in (27,28) for it in d["items"])
print(f"개념 갱신: {n_concept}일 / 노트: {n_note}개 / 장면: {n_scene}개 / 같은뜻: {n_eq}개")
print(f"시제 태그(인라인): 평소{tc.get('평소',0)} 과거{tc.get('과거',0)} 미래{tc.get('미래',0)} 지금{tc.get('지금',0)} / 태그없음{tc.get(None,0)}")
