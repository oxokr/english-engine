// 영어 엔진 커리큘럼 — 단일 소스(자동 생성됨). 앱과 generate_audio.py가 함께 읽는다.
// 수정은 enhance.py 또는 직접. items[].id = 음성파일, items[].note = 혼란 포인트 설명.
window.CURRICULUM = {
  "trip": {
    "name": "칸쿤 동굴 다이빙",
    "start": "2026-07-13"
  },
  "days": [
    {
      "day": 1,
      "verb": "be",
      "phase": "뼈대",
      "ready": true,
      "title": "be · 나는 ~이야",
      "concept": "자, 오늘은 딱 한 단어예요. be. 우리말로 나 배고파, 나 괜찮아 할 때 그 ~야를 영어는 이 be 하나로 다 해요. I'm, 나는. 뒤에 단어 하나만 붙이면 끝이에요. I'm okay. I'm hungry. 그런데 우리말엔 이 be가 없어서 자꾸 빼먹어요. I hungry가 아니라 꼭 I'm hungry. 중간에 be가 들어간다, 이거 하나만 기억해요. 오늘은 이걸로 기분이랑 상태를 다 말해볼게요.",
      "items": [
        {
          "id": "d1_01",
          "tag": "be",
          "ko": "나 괜찮아.",
          "en": "I'm okay.",
          "note": "I'm은 I am의 줄임. 우리말 나 ~야의 ~야가 영어선 꼭 들어가요.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_02",
          "tag": "be",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "note": "물어볼 땐 You are를 Are you로 뒤집어요.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_03",
          "tag": "be",
          "ko": "나 준비됐어.",
          "en": "I'm ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_04",
          "tag": "be",
          "ko": "너 준비됐어?",
          "en": "Are you ready?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_05",
          "tag": "be",
          "ko": "나 배고파.",
          "en": "I'm hungry.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_06",
          "tag": "be",
          "ko": "나 피곤해.",
          "en": "I'm tired.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_07",
          "tag": "be",
          "ko": "나 여기 있어.",
          "en": "I'm here.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_08",
          "tag": "be",
          "ko": "너 어디야?",
          "en": "Where are you?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d1_09",
          "tag": "be",
          "ko": "이거 좋다.",
          "en": "This is good.",
          "scene": "음식을 한 입 먹어보고.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_10",
          "tag": "be",
          "ko": "그거 괜찮아.",
          "en": "It's okay.",
          "scene": "걱정하는 사람을 안심시키며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_11",
          "tag": "be",
          "ko": "너무 추워.",
          "en": "It's too cold.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_12",
          "tag": "be",
          "ko": "나 안 괜찮아.",
          "en": "I'm not okay.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_13",
          "tag": "be",
          "ko": "나 행복해.",
          "en": "I'm happy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_14",
          "tag": "be",
          "ko": "그거 쉬워.",
          "en": "It's easy.",
          "scene": "해보고 나서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_15",
          "tag": "be",
          "ko": "이거 어려워.",
          "en": "This is hard.",
          "scene": "하다가 막혀서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_16",
          "tag": "be",
          "ko": "너 늦었어.",
          "en": "You're late.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_17",
          "tag": "be",
          "ko": "나 안 바빠.",
          "en": "I'm not busy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_18",
          "tag": "be",
          "ko": "그 사람 친절해.",
          "en": "He's nice.",
          "note": "He's는 He is. 그 사람은 ~야.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_19",
          "tag": "be",
          "ko": "우리 친구야.",
          "en": "We're friends.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d1_20",
          "tag": "be",
          "ko": "맞아.",
          "en": "That's right.",
          "scene": "상대 말에 맞장구치며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        }
      ]
    },
    {
      "day": 2,
      "verb": "be",
      "phase": "뼈대",
      "ready": true,
      "title": "be · 어디야 / ~ 아니야",
      "concept": "오늘도 be예요. 이번엔 어디 있는지랑, 아니야를 말해봐요. I'm at home, 나 집에 있어. 아니라고 할 땐 be 뒤에 not만 붙여요. I'm not late, 나 안 늦었어. 물어볼 땐 순서가 살짝 바뀌어요. You are가 Are you로. Are you there? 이게 다예요. 쉽죠.",
      "items": [
        {
          "id": "d2_01",
          "tag": "be",
          "ko": "나 집에 있어.",
          "en": "I'm at home.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_02",
          "tag": "be",
          "ko": "나 회사에 있어.",
          "en": "I'm at work.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_03",
          "tag": "be",
          "ko": "그거 여기 있어.",
          "en": "It's here.",
          "scene": "찾던 걸 발견하고.",
          "eq": "It's here는 그게 여기 있어(물건), I'm here는 나 여기 있어(사람).",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_04",
          "tag": "be",
          "ko": "그거 저기 있어.",
          "en": "It's there.",
          "scene": "멀리 가리키며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_05",
          "tag": "be",
          "ko": "나 안에 있어.",
          "en": "I'm inside.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_06",
          "tag": "be",
          "ko": "나 밖에 있어.",
          "en": "I'm outside.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_07",
          "tag": "be",
          "ko": "이건 내 거야.",
          "en": "This is mine.",
          "scene": "내 물건이라고 짚으며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_08",
          "tag": "be",
          "ko": "그건 네 거야.",
          "en": "That's yours.",
          "scene": "물건을 건네주며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_09",
          "tag": "be",
          "ko": "이게 뭐야?",
          "en": "What is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d2_10",
          "tag": "be",
          "ko": "그건 안 좋아.",
          "en": "That's not good.",
          "scene": "결과를 보고 실망해서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_11",
          "tag": "be",
          "ko": "나 늦지 않았어.",
          "en": "I'm not late.",
          "note": "아니라고 할 땐 be 뒤에 not. I'm not.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_12",
          "tag": "be",
          "ko": "우리 거의 다 왔어.",
          "en": "We're almost there.",
          "eq": "We're getting there 는 가는 중(더 멂), almost there는 거의 다 옴.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_13",
          "tag": "be",
          "ko": "그 사람 여기 없어.",
          "en": "He's not here.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_14",
          "tag": "be",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "note": "the bathroom — 거기 하나뿐인 곳이라 a 아니고 the.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d2_15",
          "tag": "be",
          "ko": "내 가방 어디 있어?",
          "en": "Where is my bag?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d2_16",
          "tag": "be",
          "ko": "거기 멀어?",
          "en": "Is it far?",
          "scene": "택시 타기 전에 기사에게.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_17",
          "tag": "be",
          "ko": "거기 가까워.",
          "en": "It's close.",
          "scene": "길 물어본 사람에게.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_18",
          "tag": "be",
          "ko": "우리 준비됐어.",
          "en": "We're ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_19",
          "tag": "be",
          "ko": "너 거기 있어?",
          "en": "Are you there?",
          "scene": "전화로 상대를 확인하며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d2_20",
          "tag": "be",
          "ko": "그 사람 누구야?",
          "en": "Who is he?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        }
      ]
    },
    {
      "day": 3,
      "verb": "have",
      "phase": "뼈대",
      "ready": true,
      "title": "have · 가지다",
      "concept": "오늘은 have. 있다, 가지고 있다는 뜻이에요. I have a car, 나 차 있어. 여기서 a 하나 짚을게요. 영어는 하나를 셀 때 앞에 a를 붙여요. a car, a question. 처음 말하는, 아무거나 하나는 a예요. 그런데 너도 알고 나도 아는 바로 그거를 말할 땐 a 대신 the를 써요. a taxi는 아무 택시나, the taxi는 아까 그 택시. 화장실처럼 거기 하나뿐인 것도 the, the bathroom. 쉽게, a는 아무거나 하나, the는 바로 그거. 그리고 그 사람 얘기할 땐 have가 has로 바뀌어요. He has a car. 3인칭은 모양이 변해요.",
      "items": [
        {
          "id": "d3_01",
          "tag": "have",
          "ko": "나 차 있어.",
          "en": "I have a car.",
          "note": "셀 수 있는 하나엔 앞에 a. 우리말엔 없는 거예요.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_02",
          "tag": "have",
          "ko": "나 시간 있어.",
          "en": "I have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_03",
          "tag": "have",
          "ko": "나 시간 없어.",
          "en": "I don't have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_04",
          "tag": "have",
          "ko": "너 시간 있어?",
          "en": "Do you have time?",
          "eq": "have time = 시간 여유, have the time = 몇 시야? the 하나로 뜻이 달라요.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_05",
          "tag": "have",
          "ko": "나 질문 있어.",
          "en": "I have a question.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_06",
          "tag": "have",
          "ko": "나 돈 없어.",
          "en": "I don't have money.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_07",
          "tag": "have",
          "ko": "너 펜 있어?",
          "en": "Do you have a pen?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_08",
          "tag": "have",
          "ko": "나 형제 있어.",
          "en": "I have a brother.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_09",
          "tag": "have",
          "ko": "나 강아지 있어.",
          "en": "I have a dog.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_10",
          "tag": "have",
          "ko": "우리 문제 생겼어.",
          "en": "We have a problem.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_11",
          "tag": "have",
          "ko": "나 좋은 생각 있어.",
          "en": "I have an idea.",
          "note": "idea처럼 모음 소리로 시작하면 a 대신 an.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_12",
          "tag": "have",
          "ko": "너 여권 있어?",
          "en": "Do you have your passport?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_13",
          "tag": "have",
          "ko": "나 예약 있어.",
          "en": "I have a reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_14",
          "tag": "have",
          "ko": "나 표 있어.",
          "en": "I have a ticket.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_15",
          "tag": "have",
          "ko": "너 현금 있어?",
          "en": "Do you have cash?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_16",
          "tag": "have",
          "ko": "나 아무것도 없어.",
          "en": "I don't have anything.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_17",
          "tag": "have",
          "ko": "그 사람 차 있어.",
          "en": "He has a car.",
          "note": "I have지만 3인칭(그 사람)은 has로 바뀌어요.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_18",
          "tag": "have",
          "ko": "와이파이 돼요?",
          "en": "Do you have wifi?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_19",
          "tag": "have",
          "ko": "나 5분 있어.",
          "en": "I have five minutes.",
          "note": "둘 이상이면 끝에 s. minute에서 minutes.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d3_20",
          "tag": "have",
          "ko": "방 있어요?",
          "en": "Do you have a room?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        }
      ]
    },
    {
      "day": 4,
      "verb": "have",
      "phase": "뼈대",
      "ready": true,
      "title": "have · 먹다·해야 해",
      "concept": "have의 다른 얼굴이에요. 놀랍게도 have가 먹다도 돼요. I have lunch, 점심 먹어. 또 have to를 붙이면 해야 한다가 돼요. I have to go, 나 가야 해. 똑같은 have인데 to 하나 붙었다고 뜻이 확 바뀌죠. 그리고 어제 먹은 건 had예요. haved가 아니에요. 자주 쓰는 단어는 이렇게 모양이 막 변해요.",
      "items": [
        {
          "id": "d4_13",
          "tag": "have",
          "ko": "나 회의 있어.",
          "en": "I have a meeting.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d4_16",
          "tag": "have",
          "ko": "나 감기 걸렸어.",
          "en": "I have a cold.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d4_17",
          "tag": "have",
          "ko": "나 두통 있어.",
          "en": "I have a headache.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d4_01",
          "tag": "have",
          "ko": "나 점심 먹어.",
          "en": "I have lunch.",
          "note": "여기서 have는 먹다. I have lunch는 점심 먹어.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d4_02",
          "tag": "have",
          "ko": "나 아침 먹었어.",
          "en": "I had breakfast.",
          "note": "have의 과거는 had. haved 아니에요.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d4_03",
          "tag": "have",
          "ko": "나 매일 커피 마셔.",
          "en": "I have coffee every day.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d4_04",
          "tag": "have",
          "ko": "우리 7시에 저녁 먹어.",
          "en": "We have dinner at seven.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d4_14",
          "tag": "have",
          "ko": "나 좋은 시간 보냈어.",
          "en": "I had a good time.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d4_07",
          "tag": "have",
          "ko": "나 가야 해.",
          "en": "I have to go.",
          "note": "have는 가지다, have to는 해야 한다. to가 뜻을 바꿔요.",
          "eq": "I need to go 랑 같은 뜻. have to = need to, 둘 다 '가야 해'. 바꿔 써도 돼요.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ '가야 해'(의무)는 have to, '가고 싶어'(욕구)는 want to. 끝소리로 갈려요.",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_08",
          "tag": "have",
          "ko": "나 일해야 해.",
          "en": "I have to work.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_09",
          "tag": "have",
          "ko": "너 가야 해?",
          "en": "Do you have to go?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_10",
          "tag": "have",
          "ko": "나 지금 가야 해.",
          "en": "I have to go now.",
          "eq": "I need to go now 랑 같은 뜻. have to = need to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_11",
          "tag": "have",
          "ko": "우리 기다려야 해.",
          "en": "We have to wait.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_12",
          "tag": "have",
          "ko": "나 안 가도 돼.",
          "en": "I don't have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_18",
          "tag": "have",
          "ko": "너 이거 봐야 해.",
          "en": "You have to see this.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_19",
          "tag": "have",
          "ko": "나 자야 해.",
          "en": "I have to sleep.",
          "eq": "I need to sleep 랑 같은 뜻. have to = need to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ '자야 해'(의무) have to ↔ '자고 싶어'(욕구) want to.",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_20",
          "tag": "have",
          "ko": "우리 서둘러야 해.",
          "en": "We have to hurry.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d4_05",
          "tag": "have",
          "ko": "좋은 시간 보내.",
          "en": "Have a good time.",
          "eq": "Have fun 이랑 같은 뜻. 헤어질 때 바꿔 써도 돼요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d4_06",
          "tag": "have",
          "ko": "좋은 하루 보내.",
          "en": "Have a good day.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d4_15",
          "tag": "have",
          "ko": "재밌게 놀아.",
          "en": "Have fun.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 5,
      "verb": "do",
      "phase": "뼈대",
      "ready": true,
      "title": "do · 질문·부정 엔진",
      "concept": "오늘은 do예요. 뜻 없이 일만 하는 단어인데, 부정할 때랑 물어볼 때 도와줘요. 몰라는 I don't know. don't를 동사 앞에 딱. 물어볼 땐 맨 앞에 Do. Do you know? 자, 여기서 제일 헷갈리는 거 하나 정리할게요. Do you랑 Are you. 가다, 알다, 좋아하다 같은 동작을 물으면 Do you. Do you know? Do you go? 반대로 괜찮다, 준비됐다 같은 상태를 물으면 Are you. Are you okay? Are you ready? 쉽게, 상태면 Are, 동작이면 Do. 이 하나만 잡으면 안 헷갈려요.",
      "items": [
        {
          "id": "d5_01",
          "tag": "do",
          "ko": "나 몰라.",
          "en": "I don't know.",
          "note": "부정은 동사 앞에 don't. 안 ~.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_02",
          "tag": "do",
          "ko": "너 알아?",
          "en": "Do you know?",
          "note": "물어볼 땐 맨 앞에 Do.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_03",
          "tag": "do",
          "ko": "나 안 좋아해.",
          "en": "I don't like it.",
          "note": "I don't ~ 는 안 ~해. like 자리만 바꿔봐: I don't know, I don't care.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_04",
          "tag": "do",
          "ko": "너 이거 좋아해?",
          "en": "Do you like this?",
          "note": "동작(좋아하다)을 물으면 Do you. 상태(괜찮다)면 Are you.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_05",
          "tag": "do",
          "ko": "너 영어 할 줄 알아?",
          "en": "Do you speak English?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_06",
          "tag": "do",
          "ko": "나 이해 안 돼.",
          "en": "I don't understand.",
          "eq": "I don't get it 이라고도 해요. get it이 더 편한 말. 같은 뜻.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_07",
          "tag": "do",
          "ko": "너 이해돼?",
          "en": "Do you understand?",
          "eq": "Do you get it? 이라고도 해요. get it이 더 캐주얼.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_08",
          "tag": "do",
          "ko": "나 신경 안 써.",
          "en": "I don't care.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_09",
          "tag": "do",
          "ko": "너 무슨 일 해?",
          "en": "What do you do?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_10",
          "tag": "do",
          "ko": "이거 어떻게 해?",
          "en": "How do you do it?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_11",
          "tag": "do",
          "ko": "나 커피 안 마셔.",
          "en": "I don't drink coffee.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_12",
          "tag": "do",
          "ko": "너 커피 마셔?",
          "en": "Do you drink coffee?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_13",
          "tag": "do",
          "ko": "나 담배 안 피워.",
          "en": "I don't smoke.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_14",
          "tag": "do",
          "ko": "너 운전해?",
          "en": "Do you drive?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_15",
          "tag": "do",
          "ko": "나 운동 잘 안 해.",
          "en": "I don't exercise much.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_16",
          "tag": "do",
          "ko": "너 날 알아?",
          "en": "Do you know me?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_17",
          "tag": "do",
          "ko": "나 그거 안 했어.",
          "en": "I didn't do it.",
          "note": "do의 과거는 did. didn't는 안 했어.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d5_18",
          "tag": "do",
          "ko": "너 그거 했어?",
          "en": "Did you do it?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d5_19",
          "tag": "do",
          "ko": "걱정 마.",
          "en": "Don't worry.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d5_20",
          "tag": "do",
          "ko": "서두르지 마.",
          "en": "Don't rush.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 6,
      "verb": "복습",
      "phase": "뼈대",
      "ready": true,
      "title": "복습 · be+have+do",
      "concept": "오늘은 좀 쉬어가요. 지금까지 배운 be, have, do 세 개를 섞어볼 거예요. 짧은 문장 두 개를 그냥 이어 붙이면 그게 대화예요. 배고파, 그래서 먹어야 해. I'm hungry, so I have to eat. 어려운 거 없어요. and, so, but, because. 이 네 개로 문장을 이으면 돼요.",
      "items": [
        {
          "id": "d6_01",
          "tag": "mix",
          "ko": "나 배고파, 뭐 좀 먹어야 해.",
          "en": "I'm hungry, so I have to eat.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d6_02",
          "tag": "mix",
          "ko": "시간 없어, 가야 해.",
          "en": "I don't have time, so I have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d6_03",
          "tag": "mix",
          "ko": "나 몰라. 너 알아?",
          "en": "I don't know. Do you know?",
          "tense": "평소",
          "compound": true
        },
        {
          "id": "d6_04",
          "tag": "mix",
          "ko": "나 피곤해, 자야 해.",
          "en": "I'm tired, so I have to sleep.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d6_05",
          "tag": "mix",
          "ko": "나 차 있는데 시간이 없어.",
          "en": "I have a car, but I don't have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d6_06",
          "tag": "mix",
          "ko": "너 준비됐어? 가야 해.",
          "en": "Are you ready? We have to go.",
          "compound": true
        },
        {
          "id": "d6_07",
          "tag": "mix",
          "ko": "나 질문 있어.",
          "en": "I have a question.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d6_08",
          "tag": "mix",
          "ko": "별로야. 다른 거 있어?",
          "en": "It's not good. Do you have another one?",
          "scene": "물건이 마음에 안 들 때.",
          "compound": true
        },
        {
          "id": "d6_09",
          "tag": "mix",
          "ko": "나 안 바빠, 시간 있어.",
          "en": "I'm not busy. I have time.",
          "compound": true
        },
        {
          "id": "d6_10",
          "tag": "mix",
          "ko": "너 영어 해? 나 한국어 해.",
          "en": "Do you speak English? I speak Korean.",
          "tense": "평소",
          "compound": true
        },
        {
          "id": "d6_11",
          "tag": "mix",
          "ko": "나 이해 안 돼. 너 이해돼?",
          "en": "I don't understand. Do you understand?",
          "tense": "평소",
          "compound": true
        },
        {
          "id": "d6_12",
          "tag": "mix",
          "ko": "우리 늦었어, 서둘러야 해.",
          "en": "We're late, so we have to hurry.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d6_13",
          "tag": "mix",
          "ko": "나 괜찮아, 걱정 마.",
          "en": "I'm okay. Don't worry.",
          "compound": true
        },
        {
          "id": "d6_14",
          "tag": "mix",
          "ko": "너 시간 있어? 나 질문 있어.",
          "en": "Do you have time? I have a question.",
          "compound": true
        }
      ]
    },
    {
      "day": 7,
      "verb": "go",
      "phase": "이동·만능",
      "ready": true,
      "title": "go · 가다",
      "concept": "오늘은 go, 가다예요. 지금 가는 중이라고 할 땐 be랑 같이 써요. I'm going home, 나 집에 가. 어디 가냐고 물으면 Where are you going? 그리고 오늘 does가 처음 나와요. 짚고 갈게요. 너나 나한테 물을 땐 Do you go. 그런데 그 사람, 또는 버스나 사물 하나한테 물을 땐 Do가 Does로 바뀌어요. Does this bus go downtown? 이 버스 시내 가요? 중요한 거 하나, does가 변신을 다 맡으니까 뒤에 오는 동사는 그냥 원형이에요. Does it goes 아니고 Does it go. s는 한 번만 붙어요.",
      "items": [
        {
          "id": "d7_01",
          "tag": "go",
          "ko": "나 집에 가.",
          "en": "I'm going home.",
          "note": "지금 하는 중은 be 더하기 동사ing. I am going.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_02",
          "tag": "go",
          "ko": "나 일하러 가.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_03",
          "tag": "go",
          "ko": "너 어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_04",
          "tag": "go",
          "ko": "우리 지금 가.",
          "en": "We're going now.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_05",
          "tag": "go",
          "ko": "나 안 가.",
          "en": "I'm not going.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_06",
          "tag": "go",
          "ko": "너 가?",
          "en": "Are you going?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_07",
          "tag": "go",
          "ko": "나 학교 가.",
          "en": "I'm going to school.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_08",
          "tag": "go",
          "ko": "그 사람 집에 가.",
          "en": "He's going home.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_09",
          "tag": "go",
          "ko": "우리 같이 가.",
          "en": "We're going together.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_10",
          "tag": "go",
          "ko": "나 거기 가.",
          "en": "I'm going there.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_11",
          "tag": "go",
          "ko": "나 이제 가.",
          "en": "I'm going now.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_12",
          "tag": "go",
          "ko": "나 화장실 가.",
          "en": "I'm going to the bathroom.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_13",
          "tag": "go",
          "ko": "너 시내 가?",
          "en": "Are you going downtown?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_15",
          "tag": "go",
          "ko": "나 안 가, 피곤해.",
          "en": "I'm not going. I'm tired.",
          "tense": "지금",
          "compound": true
        },
        {
          "id": "d7_16",
          "tag": "go",
          "ko": "이 버스 시내 가요?",
          "en": "Does this bus go downtown?",
          "note": "그 사람·사물 하나엔 Do가 Does. 뒤 동사는 원형 go (goes 아님).",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_17",
          "tag": "go",
          "ko": "이 길 해변으로 가요?",
          "en": "Does this road go to the beach?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_18",
          "tag": "go",
          "ko": "너 지금 가?",
          "en": "Are you going now?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d7_19",
          "tag": "go",
          "ko": "나 곧 가.",
          "en": "I'm going soon.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_20",
          "tag": "go",
          "ko": "그 사람들 해변 가.",
          "en": "They're going to the beach.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d7_14",
          "tag": "go",
          "ko": "우리 늦었어, 가야 해.",
          "en": "We're late. We have to go.",
          "compound": true
        }
      ]
    },
    {
      "day": 8,
      "verb": "go",
      "phase": "이동·만능",
      "ready": true,
      "title": "go · ~할 거야",
      "concept": "오늘은 미래예요. 앞으로 할 일을 말할 때, 영어는 어려운 거 안 써요. 그냥 going to만 붙여요. I'm going to eat, 나 먹을 거야. I'm going to sleep, 잘 거야. 봐요, going to가 ~할 거야예요. 미래 시제 문법 같은 거 외울 필요 없어요. 이거 하나면 돼요.",
      "items": [
        {
          "id": "d8_17",
          "tag": "go",
          "ko": "우리 괜찮을 거야.",
          "en": "We're going to be okay.",
          "tense": "미래",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d8_01",
          "tag": "go",
          "ko": "나 먹을 거야.",
          "en": "I'm going to eat.",
          "note": "going to는 ~할 거야. 미래는 이걸로 끝.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_02",
          "tag": "go",
          "ko": "너 뭐 할 거야?",
          "en": "What are you going to do?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d8_03",
          "tag": "go",
          "ko": "나 잘 거야.",
          "en": "I'm going to sleep.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_04",
          "tag": "go",
          "ko": "우리 늦을 거야.",
          "en": "We're going to be late.",
          "eq": "We'll be late 랑 같은 뜻. going to be가 더 확실한 예상.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_05",
          "tag": "go",
          "ko": "나 그 사람한테 물어볼 거야.",
          "en": "I'm going to ask him.",
          "note": "going to 뒤 동사만 바꾸면 다 미래. ask 자리에 eat, call, try.",
          "eq": "I'll ~ 랑 비슷. going to는 미리 정한 일, I'll은 방금 정한 일.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_06",
          "tag": "go",
          "ko": "너 그거 살 거야?",
          "en": "Are you going to buy it?",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d8_07",
          "tag": "go",
          "ko": "나 안 갈 거야.",
          "en": "I'm not going to go.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_08",
          "tag": "go",
          "ko": "비 올 거야.",
          "en": "It's going to rain.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_09",
          "tag": "go",
          "ko": "나 기다릴 거야.",
          "en": "I'm going to wait.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_10",
          "tag": "go",
          "ko": "우리 다이빙할 거야.",
          "en": "We're going to dive.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_11",
          "tag": "go",
          "ko": "너 어디 갈 거야?",
          "en": "Where are you going to go?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d8_12",
          "tag": "go",
          "ko": "나 그거 해볼 거야.",
          "en": "I'm going to try it.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_13",
          "tag": "go",
          "ko": "그 사람 올 거야.",
          "en": "He's going to come.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_14",
          "tag": "go",
          "ko": "나 쉴 거야.",
          "en": "I'm going to rest.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_15",
          "tag": "go",
          "ko": "너 도와줄 거야?",
          "en": "Are you going to help?",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d8_16",
          "tag": "go",
          "ko": "나 집에 있을 거야.",
          "en": "I'm going to stay home.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_18",
          "tag": "go",
          "ko": "나 나중에 전화할 거야.",
          "en": "I'm going to call you later.",
          "eq": "I'll call you 랑 같은 뜻. 거의 같아서 바꿔 써도 돼요.",
          "tense": "미래",
          "rel": "↔ 둘 다 '~할 거야'. 거의 바꿔 써도 됨. 굳이 나누면 going to=이미 마음먹은 일(나 커피 사 올 거야), will=방금 그 자리에서 정한 일/약속(또 올게요). 왕초보는 going to 하나로 통일해도 100% 통함.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d8_19",
          "tag": "go",
          "ko": "너 언제 갈 거야?",
          "en": "When are you going to go?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d8_20",
          "tag": "go",
          "ko": "나 곧 끝낼 거야.",
          "en": "I'm going to finish soon.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        }
      ]
    },
    {
      "day": 9,
      "verb": "go",
      "phase": "이동·만능",
      "ready": true,
      "title": "go · 방향",
      "concept": "오늘은 go에 방향을 붙여볼 거예요. 이게 진짜 영어의 힘이에요. go 뒤에 위, 아래, 안, 밖만 붙이면 돼요. Go up 올라가, go down 내려가, go out 나가, go back 돌아가. 같이 가자고 할 땐 Let's go. 이 말들, 칸쿤 물속에서 그대로 써요. 단어 몇 개로 다 통해요.",
      "items": [
        {
          "id": "d9_11",
          "tag": "go",
          "ko": "우리 올라가.",
          "en": "We're going up.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d9_12",
          "tag": "go",
          "ko": "나 밖에 나가.",
          "en": "I'm going out.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d9_01",
          "tag": "go",
          "ko": "올라가.",
          "en": "Go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_02",
          "tag": "go",
          "ko": "내려가.",
          "en": "Go down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_03",
          "tag": "go",
          "ko": "나가.",
          "en": "Go out.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_04",
          "tag": "go",
          "ko": "들어가.",
          "en": "Go in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_05",
          "tag": "go",
          "ko": "돌아가.",
          "en": "Go back.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_06",
          "tag": "go",
          "ko": "계속 가.",
          "en": "Keep going.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_07",
          "tag": "go",
          "ko": "저리 가.",
          "en": "Go away.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_08",
          "tag": "go",
          "ko": "천천히 가.",
          "en": "Go slow.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_09",
          "tag": "go",
          "ko": "먼저 가.",
          "en": "Go ahead.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_10",
          "tag": "go",
          "ko": "직진해.",
          "en": "Go straight.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_13",
          "tag": "go",
          "ko": "다시 들어가.",
          "en": "Go back in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_14",
          "tag": "go",
          "ko": "더 깊이 가지 마.",
          "en": "Don't go deeper.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_15",
          "tag": "go",
          "ko": "가자.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_16",
          "tag": "go",
          "ko": "너 먼저 가.",
          "en": "You go first.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_17",
          "tag": "go",
          "ko": "위로 천천히 올라가.",
          "en": "Go up slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_18",
          "tag": "go",
          "ko": "왼쪽으로 가.",
          "en": "Go left.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_19",
          "tag": "go",
          "ko": "오른쪽으로 가.",
          "en": "Go right.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d9_20",
          "tag": "go",
          "ko": "끝까지 해.",
          "en": "Go all the way.",
          "note": "go all the way는 중간에 멈추지 말고 끝까지. 일·거리 둘 다 써요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 10,
      "verb": "get",
      "phase": "이동·만능",
      "ready": true,
      "title": "get · 받다·얻다",
      "concept": "오늘부터 get이에요. 영어에서 제일 많이 쓰는 단어, 왕이에요. 먼저 얻다, 받다, 사다. I got it, 알았어 또는 받았어. 가게에서 Can I get a coffee? 하면 커피 하나 주세요가 돼요. 그리고 get의 과거는 getted가 아니라 got이에요. 이거 하나 기억해요.",
      "items": [
        {
          "id": "d10_01",
          "tag": "get",
          "ko": "알았어.",
          "en": "I got it.",
          "note": "got은 get의 과거.",
          "eq": "I got it 은 방금 받았어/알았어 (과거). I get it 은 이해돼 (지금). 비슷하지만 시제가 달라요.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_02",
          "tag": "get",
          "ko": "나 커피 사 올 거야.",
          "en": "I'm going to get a coffee.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_04",
          "tag": "get",
          "ko": "너 그거 어디서 샀어?",
          "en": "Where did you get it?",
          "scene": "친구가 가진 걸 보고.",
          "tense": "과거",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d10_05",
          "tag": "get",
          "ko": "나 택시 잡을 거야.",
          "en": "I'm going to get a taxi.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_06",
          "tag": "get",
          "ko": "나 표 구했어.",
          "en": "I got a ticket.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_08",
          "tag": "get",
          "ko": "나 새 폰 샀어.",
          "en": "I got a new phone.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_09",
          "tag": "get",
          "ko": "너 선물 받았어?",
          "en": "Did you get a gift?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d10_10",
          "tag": "get",
          "ko": "나 네 문자 받았어.",
          "en": "I got your text.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_12",
          "tag": "get",
          "ko": "나 그거 못 샀어.",
          "en": "I didn't get it.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_14",
          "tag": "get",
          "ko": "나 일자리 구했어.",
          "en": "I got a job.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_15",
          "tag": "get",
          "ko": "너 그거 받았어?",
          "en": "Did you get it?",
          "scene": "문자 보낸 뒤 확인하며.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d10_17",
          "tag": "get",
          "ko": "나 좋은 자리 잡았어.",
          "en": "I got a good seat.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_18",
          "tag": "get",
          "ko": "나 차 빌릴 거야.",
          "en": "I'm going to rent a car.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_20",
          "tag": "get",
          "ko": "나 방금 알았어.",
          "en": "I just got it.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d10_03",
          "tag": "get",
          "ko": "커피 하나 주세요.",
          "en": "Can I get a coffee?",
          "note": "Can I get...?은 ~ 주세요. 가게에서 쓰는 말.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d10_07",
          "tag": "get",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d10_13",
          "tag": "get",
          "ko": "영수증 좀 주세요.",
          "en": "Can I get the receipt?",
          "note": "the receipt — 방금 그 영수증이라 the. 처음이면 a.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d10_16",
          "tag": "get",
          "ko": "메뉴판 좀 주세요.",
          "en": "Can I get a menu?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d10_19",
          "tag": "get",
          "ko": "뭐 갖다 드릴까요?",
          "en": "What can I get you?",
          "scene": "식당 직원이 손님에게.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d10_11",
          "tag": "get",
          "ko": "도움 좀 받아 봐.",
          "en": "Get some help.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 11,
      "verb": "get",
      "phase": "이동·만능",
      "ready": true,
      "title": "get · 되다·도착하다",
      "concept": "오늘도 get인데, 이번엔 ~되다랑 도착하다예요. 같은 get이 이렇게 변신해요. It's getting cold, 추워지고 있어. I got home, 집에 도착했어. 점점 어떻게 되어간다 할 때 getting을 써요. 한 단어가 이렇게 여러 일을 하는 게 영어예요.",
      "items": [
        {
          "id": "d11_14",
          "tag": "get",
          "ko": "나 익숙해지고 있어.",
          "en": "I'm getting used to it.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d11_16",
          "tag": "get",
          "ko": "나 슬슬 졸려.",
          "en": "I'm getting sleepy.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d11_18",
          "tag": "get",
          "ko": "점점 쉬워지고 있어.",
          "en": "It's getting easier.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d11_19",
          "tag": "get",
          "ko": "나 슬슬 짜증나.",
          "en": "I'm getting annoyed.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d11_20",
          "tag": "get",
          "ko": "곧 어두워질 거야.",
          "en": "It's going to get dark soon.",
          "tense": "미래",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d11_01",
          "tag": "get",
          "ko": "나 피곤해졌어.",
          "en": "I got tired.",
          "eq": "I'm tired는 지금 피곤해, I got tired는 피곤해졌어(변화).",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_02",
          "tag": "get",
          "ko": "나 집에 도착했어.",
          "en": "I got home.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_03",
          "tag": "get",
          "ko": "너 언제 도착해?",
          "en": "When do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d11_04",
          "tag": "get",
          "ko": "추워지고 있어.",
          "en": "It's getting cold.",
          "note": "getting은 점점 ~해지다. It's getting cold는 추워지고 있어.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_05",
          "tag": "get",
          "ko": "나 배고파지고 있어.",
          "en": "I'm getting hungry.",
          "note": "I'm getting ~ 는 슬슬/점점 ~. hungry 자리에 tired, cold, better.",
          "tense": "지금",
          "rel": "↔ '배고파'(상태) I'm hungry ↔ '슬슬 배고파져'(변화중) I'm getting hungry.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_06",
          "tag": "get",
          "ko": "우리 거의 다 와 가.",
          "en": "We're getting there.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_07",
          "tag": "get",
          "ko": "늦어지고 있어.",
          "en": "It's getting late.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_08",
          "tag": "get",
          "ko": "어두워지고 있어.",
          "en": "It's getting dark.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_09",
          "tag": "get",
          "ko": "나 좋아지고 있어.",
          "en": "I'm getting better.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_10",
          "tag": "get",
          "ko": "너 거기 어떻게 가?",
          "en": "How do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d11_11",
          "tag": "get",
          "ko": "나 직장에 도착했어.",
          "en": "I got to work.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_12",
          "tag": "get",
          "ko": "더워지고 있어.",
          "en": "It's getting hot.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_13",
          "tag": "get",
          "ko": "나 슬슬 긴장돼.",
          "en": "I'm getting nervous.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_15",
          "tag": "get",
          "ko": "나 거기 못 갔어.",
          "en": "I didn't get there.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d11_17",
          "tag": "get",
          "ko": "너 잘 도착했어?",
          "en": "Did you get there okay?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        }
      ]
    },
    {
      "day": 12,
      "verb": "get",
      "phase": "이동·만능",
      "ready": true,
      "title": "get · 이해하다 + 구동사",
      "concept": "get의 마지막 얼굴이에요. 놀랍게도 이해하다도 get이에요. I get it, 이해했어. 그리고 방향을 붙이면 또 달라져요. Get up 일어나, get in 타, get out 나와. 우리말 먹다가 밥도 먹고 마음도 먹고 나이도 먹잖아요. 영어 get이 딱 그래요. 하나로 여러 개.",
      "items": [
        {
          "id": "d12_01",
          "tag": "get",
          "ko": "이해했어.",
          "en": "I get it.",
          "eq": "I get it 은 지금 이해돼. I got it 은 알았어 (과거). 살짝 시제 차이.",
          "rel": "↔ 거의 같은데 시제만 다름. I get it=지금 이해가 돼(상태). I got it=방금 알아들었어/받았어(과거 동작). '알았어!'라고 반응할 땐 보통 I got it. 둘 다 자주 쓰니 시제 감만 잡아.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d12_02",
          "tag": "get",
          "ko": "이해 안 돼.",
          "en": "I don't get it.",
          "tense": "평소",
          "eq": "I don't understand 랑 같은 뜻. don't get it이 더 편한 말.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d12_03",
          "tag": "get",
          "ko": "너 이해돼?",
          "en": "Do you get it?",
          "tense": "평소",
          "eq": "Do you understand? 랑 같은 뜻. get it이 더 캐주얼해요.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d12_18",
          "tag": "get",
          "ko": "나 이제 이해돼.",
          "en": "Now I get it.",
          "scene": "설명을 다 듣고 나서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d12_19",
          "tag": "get",
          "ko": "내 말 이해돼?",
          "en": "Do you get what I mean?",
          "tense": "평소",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d12_05",
          "tag": "get",
          "ko": "나 일찍 일어나.",
          "en": "I get up early.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d12_04",
          "tag": "get",
          "ko": "일어나.",
          "en": "Get up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_06",
          "tag": "get",
          "ko": "타.",
          "en": "Get in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_07",
          "tag": "get",
          "ko": "나와.",
          "en": "Get out.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_08",
          "tag": "get",
          "ko": "차에 타.",
          "en": "Get in the car.",
          "note": "get + 방향. in 자리에 out(내려), on/off(타다/내리다).",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_09",
          "tag": "get",
          "ko": "차에서 내려.",
          "en": "Get out of the car.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_10",
          "tag": "get",
          "ko": "버스에 타.",
          "en": "Get on the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_11",
          "tag": "get",
          "ko": "버스에서 내려.",
          "en": "Get off the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_12",
          "tag": "get",
          "ko": "물에서 나와.",
          "en": "Get out of the water.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_13",
          "tag": "get",
          "ko": "비켜.",
          "en": "Get out of the way.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_14",
          "tag": "get",
          "ko": "좀 쉬어.",
          "en": "Get some rest.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_15",
          "tag": "get",
          "ko": "빨리 나아.",
          "en": "Get well soon.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_16",
          "tag": "get",
          "ko": "준비해.",
          "en": "Get ready.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_17",
          "tag": "get",
          "ko": "가까이 붙어.",
          "en": "Get close.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d12_20",
          "tag": "get",
          "ko": "어서 타.",
          "en": "Get in, quick.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 13,
      "verb": "복습",
      "phase": "이동·만능",
      "ready": true,
      "title": "복습 · go+get",
      "concept": "오늘은 go랑 get을 섞어요. 이 두 단어만 자유롭게 써도 이동하고, 사고, 도착하고, 이해하는 게 다 돼요. 천천히 가, 차에 타, 거기 어떻게 가. 두 단어로 이만큼 말할 수 있다는 걸 오늘 느껴봐요.",
      "items": [
        {
          "id": "d13_01",
          "tag": "mix",
          "ko": "나 집에 가, 피곤해.",
          "en": "I'm going home. I'm tired.",
          "tense": "지금",
          "compound": true
        },
        {
          "id": "d13_02",
          "tag": "mix",
          "ko": "나 커피 사러 가.",
          "en": "I'm going to get a coffee.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d13_03",
          "tag": "mix",
          "ko": "우리 늦었어, 택시 잡자.",
          "en": "We're late. Let's get a taxi.",
          "compound": true
        },
        {
          "id": "d13_04",
          "tag": "mix",
          "ko": "내려가, 천천히.",
          "en": "Go down, slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d13_05",
          "tag": "mix",
          "ko": "너 거기 어떻게 가?",
          "en": "How do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d13_06",
          "tag": "mix",
          "ko": "차에 타, 가자.",
          "en": "Get in. Let's go.",
          "compound": true
        },
        {
          "id": "d13_07",
          "tag": "mix",
          "ko": "나 거의 다 왔어.",
          "en": "I'm almost there.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d13_08",
          "tag": "mix",
          "ko": "어두워지고 있어, 나가자.",
          "en": "It's getting dark. Let's go out.",
          "tense": "지금",
          "compound": true
        },
        {
          "id": "d13_09",
          "tag": "mix",
          "ko": "너 그거 샀어?",
          "en": "Did you get it?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d13_10",
          "tag": "mix",
          "ko": "나 안 가, 피곤해지고 있어.",
          "en": "I'm not going. I'm getting tired.",
          "tense": "지금",
          "compound": true
        },
        {
          "id": "d13_11",
          "tag": "mix",
          "ko": "위로 천천히 올라가.",
          "en": "Go up slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d13_12",
          "tag": "mix",
          "ko": "물에서 나와, 추워.",
          "en": "Get out of the water. It's cold.",
          "compound": true
        },
        {
          "id": "d13_13",
          "tag": "mix",
          "ko": "너 일어났어?",
          "en": "Did you get up?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d13_14",
          "tag": "mix",
          "ko": "나 일하러 가는 중이야.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        }
      ]
    },
    {
      "day": 14,
      "verb": "want",
      "phase": "욕구·능력·허락",
      "ready": true,
      "title": "want · ~하고 싶어",
      "concept": "오늘은 want, 원하다예요. 뒤에 물건이 오면 그걸 원하는 거예요. I want water, 물 줘. 뒤에 동사를 넣고 싶으면 사이에 to를 껴요. I want to go, 가고 싶어. want to, 하고 싶어. 이 to 빼먹기 쉬운데 꼭 넣어요.",
      "items": [
        {
          "id": "d14_01",
          "tag": "want",
          "ko": "나 물 줘.",
          "en": "I want water.",
          "eq": "I want some water 라고도 해요. some 붙으면 살짝 부드러워요. 같은 뜻.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ 둘 다 '물 줘'. some 붙이면 살짝 부드럽고 양이 '좀'인 느낌일 뿐 뜻 같음. 바꿔 써도 됨. 물·돈·시간처럼 못 세는 건 a 안 붙이고 그냥 쓰거나 some을 붙여.",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_02",
          "tag": "want",
          "ko": "뭐 줄까?",
          "en": "What do you want?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d14_03",
          "tag": "want",
          "ko": "나 커피 줘.",
          "en": "I want a coffee.",
          "note": "want 뒤에 물건이면 to 없이. 동사일 때만 want to.",
          "eq": "Can I get a coffee? 랑 같은 뜻. want는 직설적, Can I get은 더 공손.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_04",
          "tag": "want",
          "ko": "나 가고 싶어.",
          "en": "I want to go.",
          "note": "하고 싶다는 want 더하기 to 더하기 동사. to 빼먹지 마요.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ '가고 싶어'(욕구)는 want to, '가야 해'(의무)는 have to.",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_05",
          "tag": "want",
          "ko": "나 집에 가고 싶어.",
          "en": "I want to go home.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_06",
          "tag": "want",
          "ko": "너 가고 싶어?",
          "en": "Do you want to go?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ '갈래?'(의향 질문) Do you want to go? ↔ '가자'(제안) Let's go.",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_07",
          "tag": "want",
          "ko": "나 자고 싶어.",
          "en": "I want to sleep.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ '자고 싶어'(욕구) want to ↔ '자야 해'(의무) have to.",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_08",
          "tag": "want",
          "ko": "나 이거 줘.",
          "en": "I want this.",
          "scene": "가게에서 물건을 가리키며.",
          "note": "want + 물건. this 자리에 that, more, one.",
          "eq": "Can I have this? 랑 같은 뜻. want는 직설적, Can I have는 공손.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_09",
          "tag": "want",
          "ko": "나 그거 됐어.",
          "en": "I don't want that.",
          "scene": "권하는 걸 사양하며.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_10",
          "tag": "want",
          "ko": "나 쉬고 싶어.",
          "en": "I want to rest.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_11",
          "tag": "want",
          "ko": "너 뭐 먹고 싶어?",
          "en": "What do you want to eat?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d14_12",
          "tag": "want",
          "ko": "나 너랑 가고 싶어.",
          "en": "I want to go with you.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_13",
          "tag": "want",
          "ko": "더 줘.",
          "en": "I want more.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_14",
          "tag": "want",
          "ko": "나 지금 가고 싶어.",
          "en": "I want to go now.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_15",
          "tag": "want",
          "ko": "마실 거 줄까?",
          "en": "Do you want a drink?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ 뜻 같음: 원하다. I want는 직설(친구·급할 때), I'd like(=would like)는 공손(점원·격식). 여행 주문에선 I'd like가 더 예의 바르지만, 커리큘럼은 want+Can I get으로 충분히 커버됨. would like는 여유 되면 추가.",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_16",
          "tag": "want",
          "ko": "나 다이빙하고 싶어.",
          "en": "I want to dive.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_17",
          "tag": "want",
          "ko": "나 안 가고 싶어.",
          "en": "I don't want to go.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_18",
          "tag": "want",
          "ko": "나 집에 있고 싶어.",
          "en": "I want to stay home.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d14_19",
          "tag": "want",
          "ko": "너 뭐 하고 싶어?",
          "en": "What do you want to do?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d14_20",
          "tag": "want",
          "ko": "나 그냥 쉬고 싶어.",
          "en": "I just want to rest.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        }
      ]
    },
    {
      "day": 15,
      "verb": "can",
      "phase": "욕구·능력·허락",
      "ready": true,
      "title": "can · 할 수 있어",
      "concept": "오늘은 can, 할 수 있다예요. I can do it, 나 할 수 있어. 부탁할 때도 써요. Can you help me? 도와줄래? 하나 중요한 거, can 뒤엔 동사 원형이 그냥 와요. He can do, He cans 이런 거 없어요. 그리고 물속에서 꼭 쓸 말, I can't breathe, 숨 못 쉬겠어. 오늘 같이 익혀요.",
      "items": [
        {
          "id": "d15_01",
          "tag": "can",
          "ko": "나 할 수 있어.",
          "en": "I can do it.",
          "note": "can 뒤엔 동사 원형 그대로. cans 같은 건 없어요.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_02",
          "tag": "can",
          "ko": "나 못 해.",
          "en": "I can't do it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_03",
          "tag": "can",
          "ko": "너 할 수 있어?",
          "en": "Can you do it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d15_04",
          "tag": "can",
          "ko": "나 도와줄 수 있어.",
          "en": "I can help you.",
          "eq": "Let me help you 랑 비슷. I can help you 는 도와줄 수 있어, Let me help you 는 내가 도와줄게.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_05",
          "tag": "can",
          "ko": "도와줄래?",
          "en": "Can you help me?",
          "note": "Can you ~? 는 ~해줄래? help 자리에 see, fix, wait.",
          "eq": "Can you give me a hand? 라고도 해요. a hand가 더 가벼운 부탁.",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d15_06",
          "tag": "can",
          "ko": "나 영어 할 줄 알아.",
          "en": "I can speak English.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_07",
          "tag": "can",
          "ko": "나 영어 잘 못해.",
          "en": "I can't speak English well.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_08",
          "tag": "can",
          "ko": "이거 가져도 돼요?",
          "en": "Can I have this?",
          "note": "Can I ~? 는 ~해도 돼요/주세요. have 자리에 use, get.",
          "eq": "Can I get this? 랑 같은 뜻. 가게·식당에서 바꿔 써도 돼요.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d15_09",
          "tag": "can",
          "ko": "화장실 써도 돼요?",
          "en": "Can I use the bathroom?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?"
        },
        {
          "id": "d15_10",
          "tag": "can",
          "ko": "천천히 말해 줄래요?",
          "en": "Can you speak slowly?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d15_11",
          "tag": "can",
          "ko": "나 수영할 수 있어.",
          "en": "I can swim.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_12",
          "tag": "can",
          "ko": "나 안 보여.",
          "en": "I can't see.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_13",
          "tag": "can",
          "ko": "나 보여?",
          "en": "Can you see me?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d15_14",
          "tag": "can",
          "ko": "나 숨 못 쉬겠어.",
          "en": "I can't breathe.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_15",
          "tag": "can",
          "ko": "다시 말해 줄래요?",
          "en": "Can you say that again?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d15_16",
          "tag": "can",
          "ko": "나 기다릴 수 있어.",
          "en": "I can wait.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_17",
          "tag": "can",
          "ko": "우리 지금 갈 수 있어?",
          "en": "Can we go now?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d15_18",
          "tag": "can",
          "ko": "나 안 들려.",
          "en": "I can't hear you.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_19",
          "tag": "can",
          "ko": "나 운전할 수 있어.",
          "en": "I can drive.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d15_20",
          "tag": "can",
          "ko": "너 이거 고칠 수 있어?",
          "en": "Can you fix this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        }
      ]
    },
    {
      "day": 16,
      "verb": "need",
      "phase": "욕구·능력·허락",
      "ready": true,
      "title": "need · 필요해",
      "concept": "오늘은 need, 필요하다예요. I need water, 물 필요해. 뭘 해야 한다고 할 땐 need to. I need to rest, 나 쉬어야 해. want랑 비슷한데, want는 하고 싶다, need는 꼭 필요하다예요. 다이빙에서 제일 중요한 말, I need air, 공기 필요해. 이거 오늘 확실히 해둬요.",
      "items": [
        {
          "id": "d16_01",
          "tag": "need",
          "ko": "나 도움 필요해.",
          "en": "I need help.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_02",
          "tag": "need",
          "ko": "나 물 필요해.",
          "en": "I need water.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ '필요해'(need)는 없으면 안 돼, '원해/줘'(want)는 그냥 하고 싶어. need가 더 급해요.",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_03",
          "tag": "need",
          "ko": "나 공기 필요해.",
          "en": "I need air.",
          "note": "need는 꼭 필요하다. want(하고 싶다)보다 강해요.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_04",
          "tag": "need",
          "ko": "너 뭐 필요해?",
          "en": "What do you need?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d16_05",
          "tag": "need",
          "ko": "나 쉬어야 해.",
          "en": "I need to rest.",
          "note": "I need to ~ 는 ~해야 해. rest 자리에 go, eat, stop.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ '쉬어야 해'(필요) need to ↔ '쉬고 싶어'(욕구) want to.",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_06",
          "tag": "need",
          "ko": "나 가야 해.",
          "en": "I need to go.",
          "eq": "I have to go (Day4) 랑 같은 뜻. need to = have to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ 둘 다 '~해야 해'. 완전히 바꿔 써도 됨. have to가 살짝 더 '규칙·의무', need to가 살짝 더 '내가 필요해서'지만 왕초보는 신경 안 써도 통함. 입에 붙는 거 하나만 골라 써라.",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_07",
          "tag": "need",
          "ko": "나 자야 해.",
          "en": "I need to sleep.",
          "eq": "I have to sleep 랑 같은 뜻. need to = have to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_08",
          "tag": "need",
          "ko": "나 이거 필요해.",
          "en": "I need this.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_09",
          "tag": "need",
          "ko": "나 그거 필요 없어.",
          "en": "I don't need that.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_10",
          "tag": "need",
          "ko": "나 의사 필요해.",
          "en": "I need a doctor.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_11",
          "tag": "need",
          "ko": "나 시간이 좀 필요해.",
          "en": "I need some time.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_12",
          "tag": "need",
          "ko": "너 도움 필요해?",
          "en": "Do you need help?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_13",
          "tag": "need",
          "ko": "나 화장실 가야 해.",
          "en": "I need a bathroom.",
          "eq": "I need to use the bathroom 이라고도 해요. 같은 뜻.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_14",
          "tag": "need",
          "ko": "나 좀 멈춰야 해.",
          "en": "I need to stop.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_15",
          "tag": "need",
          "ko": "나 네 도움이 필요해.",
          "en": "I need your help.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_16",
          "tag": "need",
          "ko": "나 새 거 필요해.",
          "en": "I need a new one.",
          "scene": "쓰던 게 고장 났을 때.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_17",
          "tag": "need",
          "ko": "우리 더 천천히 가야 해.",
          "en": "We need to slow down.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_18",
          "tag": "need",
          "ko": "나 먹어야 해.",
          "en": "I need to eat.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_19",
          "tag": "need",
          "ko": "너 그거 필요해?",
          "en": "Do you need it?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d16_20",
          "tag": "need",
          "ko": "나 지금 가야 해.",
          "en": "I need to go now.",
          "eq": "I have to go now 랑 같은 뜻. need to = have to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        }
      ]
    },
    {
      "day": 17,
      "verb": "let",
      "phase": "욕구·능력·허락",
      "ready": true,
      "title": "let · let me / let's",
      "concept": "오늘은 let이에요. 부드럽게 말하는 마법의 단어예요. Let me는 내가 할게, 또는 하게 해줘. Let me see, 어디 보자. Let's는 같이 하자. Let's go, 가자. 명령처럼 딱딱하게 안 하고, 이 let을 쓰면 훨씬 자연스러워요. 오늘 이 느낌만 익혀요.",
      "items": [
        {
          "id": "d17_01",
          "tag": "let",
          "ko": "어디 보자.",
          "en": "Let me see.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_02",
          "tag": "let",
          "ko": "생각 좀 해볼게.",
          "en": "Let me think.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_03",
          "tag": "let",
          "ko": "내가 도와줄게.",
          "en": "Let me help you.",
          "note": "Let me ~ 는 내가 ~할게. help 자리에 see, check, ask.",
          "eq": "I can help you 랑 비슷. Let me help you 는 내가 나서서 도와줄게 느낌.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_04",
          "tag": "let",
          "ko": "가자.",
          "en": "Let's go.",
          "note": "Let's ~ 는 같이 ~하자. go 자리에 eat, start, wait.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "rel": "↔ '가자'(같이, 제안)는 Let's go, '갈래?'(너 의향)는 Do you want to go?",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_05",
          "tag": "let",
          "ko": "먹자.",
          "en": "Let's eat.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_06",
          "tag": "let",
          "ko": "시작하자.",
          "en": "Let's start.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_07",
          "tag": "let",
          "ko": "알려줘.",
          "en": "Let me know.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_08",
          "tag": "let",
          "ko": "내가 할게.",
          "en": "Let me do it.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_09",
          "tag": "let",
          "ko": "들어가자.",
          "en": "Let's go in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_10",
          "tag": "let",
          "ko": "잠깐 쉬자.",
          "en": "Let's rest.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_11",
          "tag": "let",
          "ko": "내가 확인해볼게.",
          "en": "Let me check.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_12",
          "tag": "let",
          "ko": "천천히 하자.",
          "en": "Let's slow down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_13",
          "tag": "let",
          "ko": "기다리자.",
          "en": "Let's wait.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_14",
          "tag": "let",
          "ko": "내가 물어볼게.",
          "en": "Let me ask.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_15",
          "tag": "let",
          "ko": "그거 내가 가져갈게.",
          "en": "Let me get it.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_16",
          "tag": "let",
          "ko": "다시 해보자.",
          "en": "Let's try again.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_17",
          "tag": "let",
          "ko": "그만하자.",
          "en": "Let's stop.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_18",
          "tag": "let",
          "ko": "같이 가자.",
          "en": "Let's go together.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_19",
          "tag": "let",
          "ko": "내가 보여줄게.",
          "en": "Let me show you.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d17_20",
          "tag": "let",
          "ko": "올라가자.",
          "en": "Let's go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 18,
      "verb": "복습",
      "phase": "욕구·능력·허락",
      "ready": true,
      "title": "복습 · want+can+need+let",
      "concept": "오늘은 want, can, need, let 네 개를 섞어요. 원하고, 할 수 있고, 필요하고, 같이 하자고. 이 네 개면 내 마음이랑 부탁을 거의 다 말해요. 물속 상황도 미리 한번 연습해 볼게요.",
      "items": [
        {
          "id": "d18_01",
          "tag": "mix",
          "ko": "나 쉬고 싶어, 좀 쉬자.",
          "en": "I want to rest. Let's take a break.",
          "compound": true
        },
        {
          "id": "d18_02",
          "tag": "mix",
          "ko": "나 도움 필요해, 도와줄래?",
          "en": "I need help. Can you help me?",
          "compound": true
        },
        {
          "id": "d18_03",
          "tag": "mix",
          "ko": "나 가고 싶은데 못 가.",
          "en": "I want to go, but I can't.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d18_04",
          "tag": "mix",
          "ko": "천천히 하자, 나 못 따라가.",
          "en": "Let's slow down. I can't keep up.",
          "compound": true
        },
        {
          "id": "d18_05",
          "tag": "mix",
          "ko": "너 뭐 필요해?",
          "en": "What do you need?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d18_06",
          "tag": "mix",
          "ko": "나 물 마시고 싶어.",
          "en": "I want some water.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d18_07",
          "tag": "mix",
          "ko": "나 안 보여, 너 보여?",
          "en": "I can't see. Can you see?",
          "compound": true
        },
        {
          "id": "d18_08",
          "tag": "mix",
          "ko": "가자, 준비됐어.",
          "en": "Let's go. I'm ready.",
          "compound": true
        },
        {
          "id": "d18_09",
          "tag": "mix",
          "ko": "나 숨 못 쉬겠어, 올라가자.",
          "en": "I can't breathe. Let's go up.",
          "compound": true
        },
        {
          "id": "d18_10",
          "tag": "mix",
          "ko": "나 좀 멈춰야 해.",
          "en": "I need to stop.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d18_11",
          "tag": "mix",
          "ko": "내가 도와줄게, 기다려.",
          "en": "Let me help. Wait.",
          "compound": true
        },
        {
          "id": "d18_12",
          "tag": "mix",
          "ko": "나 다이빙하고 싶어.",
          "en": "I want to dive.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d18_13",
          "tag": "mix",
          "ko": "너 갈 수 있어?",
          "en": "Can you go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d18_14",
          "tag": "mix",
          "ko": "나 공기 필요해.",
          "en": "I need air.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        }
      ]
    },
    {
      "day": 19,
      "verb": "take",
      "phase": "액션·종합",
      "ready": true,
      "title": "take · 가져가다·~하다",
      "concept": "오늘은 take예요. 가져가다인데 그것보다 훨씬 많이 써요. take a look 한번 봐, take the bus 버스 타, take a photo 사진 찍어, take your time 천천히 해. 그리고 숨 깊게 쉬어, take a deep breath. 다이빙 전에 꼭 듣는 말이죠. 한 단어가 또 여러 일을 해요.",
      "items": [
        {
          "id": "d19_08",
          "tag": "take",
          "ko": "시간 좀 걸려.",
          "en": "It takes time.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d19_09",
          "tag": "take",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d19_05",
          "tag": "take",
          "ko": "나 사진 찍을게.",
          "en": "I'm going to take a photo.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d19_07",
          "tag": "take",
          "ko": "나 택시 탈 거야.",
          "en": "I'm going to take a taxi.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d19_19",
          "tag": "take",
          "ko": "나 샤워할 거야.",
          "en": "I'm going to take a shower.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d19_20",
          "tag": "take",
          "ko": "이걸로 할게요.",
          "en": "I'll take this one.",
          "eq": "I want this 랑 같은 뜻. take가 더 자연스러운 결정 표현.",
          "tense": "미래",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d19_04",
          "tag": "take",
          "ko": "사진 찍어 줄래요?",
          "en": "Can you take a photo?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d19_01",
          "tag": "take",
          "ko": "이거 가져.",
          "en": "Take it.",
          "scene": "상대에게 물건을 건네며.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_02",
          "tag": "take",
          "ko": "이거 가져가.",
          "en": "Take this.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_03",
          "tag": "take",
          "ko": "한번 봐.",
          "en": "Take a look.",
          "note": "take a look은 한번 보다. take가 보다로도 쓰여요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_06",
          "tag": "take",
          "ko": "버스 타.",
          "en": "Take the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_10",
          "tag": "take",
          "ko": "약 먹어.",
          "en": "Take your medicine.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_11",
          "tag": "take",
          "ko": "좀 쉬어.",
          "en": "Take a break.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_12",
          "tag": "take",
          "ko": "숨 깊게 쉬어.",
          "en": "Take a deep breath.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_13",
          "tag": "take",
          "ko": "나 좀 데려가 줘.",
          "en": "Take me with you.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_14",
          "tag": "take",
          "ko": "공항으로 데려다주세요.",
          "en": "Take me to the airport.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_15",
          "tag": "take",
          "ko": "자리에 앉아.",
          "en": "Take a seat.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_16",
          "tag": "take",
          "ko": "천천히 해.",
          "en": "Take your time.",
          "note": "Take your ~. time이면 천천히 해, seat이면 앉아.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_17",
          "tag": "take",
          "ko": "이 길로 가.",
          "en": "Take this road.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d19_18",
          "tag": "take",
          "ko": "우산 가져가.",
          "en": "Take an umbrella.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 20,
      "verb": "make",
      "phase": "액션·종합",
      "ready": true,
      "title": "make · 만들다·~되게",
      "concept": "오늘은 make, 만들다예요. 그런데 ~되게 하다로도 써요. I made it, 해냈어. make sure, 확실히 해. That makes sense, 그거 말 되네. 그리고 만든 건 maked가 아니라 made예요. 자주 쓰는 동사는 또 불규칙이에요.",
      "items": [
        {
          "id": "d20_10",
          "tag": "make",
          "ko": "그거 말 되네.",
          "en": "That makes sense.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d20_11",
          "tag": "make",
          "ko": "그거 말 안 돼.",
          "en": "That doesn't make sense.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d20_15",
          "tag": "make",
          "ko": "그게 날 행복하게 해.",
          "en": "It makes me happy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "note": "make는 '~되게 해'. 한국말론 '그거 하면 기분 좋아'가 자연스럽지만 영어는 make로 말해요."
        },
        {
          "id": "d20_01",
          "tag": "make",
          "ko": "나 해냈어.",
          "en": "I made it.",
          "note": "made는 make의 과거.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_06",
          "tag": "make",
          "ko": "나 마음 정했어.",
          "en": "I made a decision.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_07",
          "tag": "make",
          "ko": "나 실수했어.",
          "en": "I made a mistake.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_08",
          "tag": "make",
          "ko": "나 저녁 만들 거야.",
          "en": "I'm going to make dinner.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_12",
          "tag": "make",
          "ko": "나 친구 사귀었어.",
          "en": "I made a friend.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_14",
          "tag": "make",
          "ko": "나 예약했어.",
          "en": "I made a reservation.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_18",
          "tag": "make",
          "ko": "나 돈 좀 벌어.",
          "en": "I make some money.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_20",
          "tag": "make",
          "ko": "너 해낼 거야.",
          "en": "You're going to make it.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d20_02",
          "tag": "make",
          "ko": "너 해낼 수 있어.",
          "en": "You can make it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d20_03",
          "tag": "make",
          "ko": "우리 시간 맞춰 갈 수 있어.",
          "en": "We can make it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d20_09",
          "tag": "make",
          "ko": "커피 좀 타 줄래?",
          "en": "Can you make some coffee?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d20_04",
          "tag": "make",
          "ko": "확실히 해.",
          "en": "Make sure.",
          "note": "Make sure ~ 는 ~인지 꼭 확인해. 뒤에 문장을 붙여봐.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d20_05",
          "tag": "make",
          "ko": "문 잠겼는지 확인해.",
          "en": "Make sure the door is locked.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d20_13",
          "tag": "make",
          "ko": "빨리 끝내자.",
          "en": "Let's make it quick.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d20_16",
          "tag": "make",
          "ko": "시끄럽게 하지 마.",
          "en": "Don't make noise.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d20_17",
          "tag": "make",
          "ko": "계획 세우자.",
          "en": "Let's make a plan.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d20_19",
          "tag": "make",
          "ko": "안전한지 확실히 해.",
          "en": "Make sure it's safe.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 21,
      "verb": "wh",
      "phase": "액션·종합",
      "ready": true,
      "title": "육하원칙 · 질문 자유자재",
      "concept": "오늘은 질문이에요. 누구, 뭐, 언제, 어디, 왜, 어떻게. who, what, when, where, why, how. 이 여섯 개를 문장 맨 앞에 놓으면 뭐든 물어볼 수 있어요. Where is the bathroom? How much is it? 여행에서 제일 많이 쓸 무기예요. 오늘 이 여섯 개랑 친해져요.",
      "items": [
        {
          "id": "d21_01",
          "tag": "wh",
          "ko": "이게 뭐야?",
          "en": "What is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_02",
          "tag": "wh",
          "ko": "너 누구야?",
          "en": "Who are you?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_03",
          "tag": "wh",
          "ko": "그거 언제야?",
          "en": "When is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_04",
          "tag": "wh",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "note": "where(어디)를 맨 앞에. 의문사 더하기 is 더하기 주어.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_08",
          "tag": "wh",
          "ko": "그 사람 누구야?",
          "en": "Who is he?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_12",
          "tag": "wh",
          "ko": "얼마예요?",
          "en": "How much is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_13",
          "tag": "wh",
          "ko": "몇 시예요?",
          "en": "What time is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_14",
          "tag": "wh",
          "ko": "누가 알아?",
          "en": "Who knows?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_15",
          "tag": "wh",
          "ko": "이거 누구 거예요?",
          "en": "Whose is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_19",
          "tag": "wh",
          "ko": "왜 늦었어?",
          "en": "Why are you late?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_24",
          "tag": "wh",
          "ko": "3시 30분이요.",
          "en": "It's three thirty.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d21_06",
          "tag": "wh",
          "ko": "이거 어떻게 해요?",
          "en": "How do you do this?",
          "note": "How do you ~? 는 어떻게 ~해요? do this 자리에 say it, use it.",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_07",
          "tag": "wh",
          "ko": "너 뭐 해?",
          "en": "What are you doing?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_09",
          "tag": "wh",
          "ko": "우리 언제 가?",
          "en": "When do we go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_10",
          "tag": "wh",
          "ko": "너 어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_16",
          "tag": "wh",
          "ko": "거기 어떻게 가요?",
          "en": "How do I get there?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_17",
          "tag": "wh",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_18",
          "tag": "wh",
          "ko": "뭐 줄까?",
          "en": "What do you want?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_05",
          "tag": "wh",
          "ko": "왜?",
          "en": "Why?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_11",
          "tag": "wh",
          "ko": "왜 안 돼?",
          "en": "Why not?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_20",
          "tag": "wh",
          "ko": "어느 거예요?",
          "en": "Which one?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d21_21",
          "tag": "wh",
          "ko": "두 명이요.",
          "en": "Two people."
        },
        {
          "id": "d21_22",
          "tag": "wh",
          "ko": "저 혼자예요.",
          "en": "Just me."
        },
        {
          "id": "d21_23",
          "tag": "wh",
          "ko": "7시에요.",
          "en": "At seven.",
          "note": "시간 대답은 at. at seven, at eight."
        }
      ]
    },
    {
      "day": 22,
      "verb": "복습",
      "phase": "액션·종합",
      "ready": true,
      "title": "종합 · 짧은 대화",
      "concept": "오늘은 종합이에요. 지금까지 배운 걸 짧은 대화로 엮어볼 거예요. 만나서 인사하고, 묻고, 부탁하고, 헤어지고. 어려운 단어 하나도 안 써요. 다 아는 거예요. 한 흐름으로 가볼게요.",
      "items": [
        {
          "id": "d22_01",
          "tag": "mix",
          "ko": "안녕, 잘 지내?",
          "en": "Hi, how are you?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d22_02",
          "tag": "mix",
          "ko": "나 잘 지내, 너는?",
          "en": "I'm good. How about you?",
          "compound": true
        },
        {
          "id": "d22_03",
          "tag": "mix",
          "ko": "어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d22_04",
          "tag": "mix",
          "ko": "나 일하러 가.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d22_05",
          "tag": "mix",
          "ko": "너 시간 있어?",
          "en": "Do you have time?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d22_06",
          "tag": "mix",
          "ko": "미안, 나 가야 해.",
          "en": "Sorry, I have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d22_07",
          "tag": "mix",
          "ko": "뭐 좀 먹을래?",
          "en": "Do you want to get something to eat?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        },
        {
          "id": "d22_08",
          "tag": "mix",
          "ko": "그래, 배고파.",
          "en": "Yes, I'm hungry.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d22_09",
          "tag": "mix",
          "ko": "뭐 먹고 싶어?",
          "en": "What do you want to eat?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d22_10",
          "tag": "mix",
          "ko": "아무거나 괜찮아.",
          "en": "Anything is okay.",
          "scene": "뭐 먹을지 물어오면.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d22_11",
          "tag": "mix",
          "ko": "이거 얼마예요?",
          "en": "How much is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d22_12",
          "tag": "mix",
          "ko": "카드 돼요?",
          "en": "Can I use a card?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?"
        },
        {
          "id": "d22_13",
          "tag": "mix",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d22_14",
          "tag": "mix",
          "ko": "천천히 말해 줄래요?",
          "en": "Can you speak slowly?",
          "eq": "Please speak slowly 라고도 해요. 같은 뜻, 바꿔 써도 돼요.",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d22_15",
          "tag": "mix",
          "ko": "다시 말해 줄래요?",
          "en": "Can you say that again?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d22_16",
          "tag": "mix",
          "ko": "나 영어 잘 못해.",
          "en": "I can't speak English well.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d22_17",
          "tag": "mix",
          "ko": "도와주실 수 있어요?",
          "en": "Can you help me?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d22_18",
          "tag": "mix",
          "ko": "고마워요.",
          "en": "Thank you."
        },
        {
          "id": "d22_19",
          "tag": "mix",
          "ko": "천만에요.",
          "en": "You're welcome."
        },
        {
          "id": "d22_20",
          "tag": "mix",
          "ko": "또 봐.",
          "en": "See you.",
          "eq": "Take care 라고도 해요. See you는 또 봐, Take care는 잘 지내.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        }
      ]
    },
    {
      "day": 23,
      "verb": "trip",
      "phase": "칸쿤 실전",
      "ready": true,
      "title": "공항·입국",
      "concept": "이제 진짜 칸쿤이에요. 오늘은 공항이랑 입국. 다 아는 단어로 돼요. I'm here for diving, 다이빙하러 왔어요. I have a reservation, 예약했어요. Where is...? 어디예요? 새 단어 거의 없죠. 지금까지 배운 걸로 입국 통과해 봐요.",
      "items": [
        {
          "id": "d23_01",
          "tag": "trip",
          "ko": "안녕하세요.",
          "en": "Hello."
        },
        {
          "id": "d23_02",
          "tag": "trip",
          "ko": "여기 여권 있어요.",
          "en": "Here is my passport.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d23_03",
          "tag": "trip",
          "ko": "저 다이빙하러 왔어요.",
          "en": "I'm here for diving.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d23_04",
          "tag": "trip",
          "ko": "저 휴가로 왔어요.",
          "en": "I'm here on vacation.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d23_05",
          "tag": "trip",
          "ko": "2주 있을 거예요.",
          "en": "I'm going to stay for two weeks.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d23_06",
          "tag": "trip",
          "ko": "호텔 예약했어요.",
          "en": "I have a hotel reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d23_07",
          "tag": "trip",
          "ko": "짐 찾는 곳 어디예요?",
          "en": "Where is baggage claim?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_08",
          "tag": "trip",
          "ko": "제 가방을 못 찾겠어요.",
          "en": "I can't find my bag.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d23_09",
          "tag": "trip",
          "ko": "택시 어디서 타요?",
          "en": "Where can I get a taxi?",
          "note": "Where can I get ~? 는 ~ 어디서 구해요/타요? taxi 자리에 cash, water.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_10",
          "tag": "trip",
          "ko": "시내까지 얼마예요?",
          "en": "How much is it to downtown?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_11",
          "tag": "trip",
          "ko": "이거 호텔 주소예요.",
          "en": "Here is the hotel address.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d23_12",
          "tag": "trip",
          "ko": "와이파이 있어요?",
          "en": "Do you have wifi?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d23_13",
          "tag": "trip",
          "ko": "환전 어디서 해요?",
          "en": "Where can I get cash?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_14",
          "tag": "trip",
          "ko": "도와주실 수 있어요?",
          "en": "Can you help me?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d23_15",
          "tag": "trip",
          "ko": "영어 하세요?",
          "en": "Do you speak English?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_16",
          "tag": "trip",
          "ko": "천천히 말해 주세요.",
          "en": "Please speak slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "rel": "↔ 둘 다 '천천히 말해 주세요'. 바꿔 써도 됨. Can you ~?는 '~해줄래요?'(질문형 부탁), Please ~는 '~해 주세요'(명령형+please). 둘 다 공손하니 편한 거 써라.",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d23_17",
          "tag": "trip",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_18",
          "tag": "trip",
          "ko": "제 비행기 늦었어요.",
          "en": "My flight is late.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d23_19",
          "tag": "trip",
          "ko": "출구 어디예요?",
          "en": "Where is the exit?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d23_20",
          "tag": "trip",
          "ko": "고맙습니다.",
          "en": "Thank you."
        }
      ]
    },
    {
      "day": 24,
      "verb": "trip",
      "phase": "칸쿤 실전",
      "ready": true,
      "title": "다이빙샵·장비",
      "concept": "오늘은 다이빙샵이에요. 장비 빌리고, 물어보고, 준비하는 말. I need a tank, 공기통 필요해요. Can I get...? 그리고 I'm a certified diver, 저 자격증 있어요. 전부 우리가 배운 동사로 돼요. 현장에서 바로 써먹을 거예요.",
      "items": [
        {
          "id": "d24_01",
          "tag": "trip",
          "ko": "저 다이빙하러 왔어요.",
          "en": "I'm here to dive.",
          "eq": "I'm here for diving 이라고도 해요. to dive=동사, for diving=명사. 같은 뜻.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_02",
          "tag": "trip",
          "ko": "저 자격증 있어요.",
          "en": "I'm a certified diver.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_03",
          "tag": "trip",
          "ko": "예약했어요.",
          "en": "I have a reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d24_04",
          "tag": "trip",
          "ko": "공기통 필요해요.",
          "en": "I need a tank.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d24_05",
          "tag": "trip",
          "ko": "장비 빌릴 수 있어요?",
          "en": "Can I rent some gear?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?"
        },
        {
          "id": "d24_06",
          "tag": "trip",
          "ko": "이거 제 사이즈예요?",
          "en": "Is this my size?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_07",
          "tag": "trip",
          "ko": "웻수트 필요해요.",
          "en": "I need a wetsuit.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d24_08",
          "tag": "trip",
          "ko": "이거 어떻게 써요?",
          "en": "How do you use this?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d24_09",
          "tag": "trip",
          "ko": "물 차가워요?",
          "en": "Is the water cold?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_10",
          "tag": "trip",
          "ko": "얼마나 깊어요?",
          "en": "How deep is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d24_11",
          "tag": "trip",
          "ko": "가이드 있어요?",
          "en": "Do you have a guide?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다"
        },
        {
          "id": "d24_12",
          "tag": "trip",
          "ko": "저 동굴 다이빙해요.",
          "en": "I'm doing cave diving.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d24_13",
          "tag": "trip",
          "ko": "몇 시에 가요?",
          "en": "What time do we go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d24_14",
          "tag": "trip",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d24_15",
          "tag": "trip",
          "ko": "이거 안전해요?",
          "en": "Is it safe?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_16",
          "tag": "trip",
          "ko": "제 공기통 확인해 주세요.",
          "en": "Can you check my tank?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘"
        },
        {
          "id": "d24_17",
          "tag": "trip",
          "ko": "저 좀 천천히 가야 해요.",
          "en": "I need to go slow.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d24_18",
          "tag": "trip",
          "ko": "제 짝이 누구예요?",
          "en": "Who is my buddy?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d24_19",
          "tag": "trip",
          "ko": "준비됐어요.",
          "en": "I'm ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_20",
          "tag": "trip",
          "ko": "가요.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d24_21",
          "tag": "trip",
          "ko": "한 시간 걸려요.",
          "en": "It takes about an hour.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d24_22",
          "tag": "trip",
          "ko": "공기통 두 개요.",
          "en": "Two tanks, please.",
          "purpose": "ask",
          "purposeLabel": "요청",
          "purposeMean": "부탁"
        },
        {
          "id": "d24_23",
          "tag": "trip",
          "ko": "8시쯤에요.",
          "en": "Around eight."
        }
      ]
    },
    {
      "day": 25,
      "verb": "trip",
      "phase": "칸쿤 실전",
      "ready": true,
      "title": "다이빙 브리핑·수신호",
      "concept": "오늘은 다이빙 브리핑이랑 수신호예요. 한 가지 꼭 짚을게요. 물속에선 입에 호흡기를 물고 있어서 말을 못 해요. 진짜 신호는 손으로 줘요. 그래서 오늘 이 표현들은 두 가지로 써요. 하나, 물에 들어가기 전 브리핑이랑 수면에서 짝이랑 주고받을 때. 둘, 강사가 영어로 신호를 설명할 때 그게 무슨 뜻인지 알아듣게. I'm okay, 괜찮아. Go down 내려가, come up 올라가. Slow down 천천히. 짧지만 다 통해요. 손동작이랑 같이 기억해 둬요.",
      "items": [
        {
          "id": "d25_01",
          "tag": "trip",
          "ko": "나 괜찮아.",
          "en": "I'm okay.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d25_02",
          "tag": "trip",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d25_03",
          "tag": "trip",
          "ko": "내려가.",
          "en": "Go down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_04",
          "tag": "trip",
          "ko": "올라가.",
          "en": "Go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_05",
          "tag": "trip",
          "ko": "속도 줄여.",
          "en": "Slow down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_06",
          "tag": "trip",
          "ko": "멈춰.",
          "en": "Stop.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_07",
          "tag": "trip",
          "ko": "가자.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_08",
          "tag": "trip",
          "ko": "따라와.",
          "en": "Follow me.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_09",
          "tag": "trip",
          "ko": "가까이 붙어.",
          "en": "Stay close.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_10",
          "tag": "trip",
          "ko": "내 손 잡아.",
          "en": "Take my hand.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_11",
          "tag": "trip",
          "ko": "나 공기 부족해.",
          "en": "I'm low on air.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d25_12",
          "tag": "trip",
          "ko": "나 숨 못 쉬겠어.",
          "en": "I can't breathe.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d25_13",
          "tag": "trip",
          "ko": "나 너 보여.",
          "en": "I can see you.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d25_14",
          "tag": "trip",
          "ko": "나 안 보여.",
          "en": "I can't see.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다"
        },
        {
          "id": "d25_15",
          "tag": "trip",
          "ko": "위로 올라가자.",
          "en": "Let's go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_16",
          "tag": "trip",
          "ko": "여기서 기다려.",
          "en": "Wait here.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_17",
          "tag": "trip",
          "ko": "안 괜찮아.",
          "en": "I'm not okay.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d25_18",
          "tag": "trip",
          "ko": "도와줘.",
          "en": "Help me.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "rel": "↔ 'Help me'는 급한 명령, 'Can you help me?'는 부탁. Can you 빠지면 명령처럼 들려요.",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_19",
          "tag": "trip",
          "ko": "이쪽으로.",
          "en": "This way.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d25_20",
          "tag": "trip",
          "ko": "다 됐어, 돌아가자.",
          "en": "We're done. Let's go back.",
          "compound": true
        }
      ]
    },
    {
      "day": 26,
      "verb": "trip",
      "phase": "칸쿤 실전",
      "ready": true,
      "title": "식당·비상·작별",
      "concept": "마지막 날이에요. 식당에서 주문하고 계산하고, 아프면 도움 청하고, 고맙다고 인사하는 말. Can I get the check? 계산서 주세요. I don't feel good, 몸이 안 좋아요. Thank you. 여기까지면 칸쿤에서 충분히 살아요. 잘 했어요.",
      "items": [
        {
          "id": "d26_01",
          "tag": "trip",
          "ko": "메뉴 좀 주세요.",
          "en": "Can I get a menu?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_02",
          "tag": "trip",
          "ko": "이거 주세요.",
          "en": "Can I get this?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_03",
          "tag": "trip",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_04",
          "tag": "trip",
          "ko": "이거 맛있어요.",
          "en": "This is good.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d26_05",
          "tag": "trip",
          "ko": "계산서 주세요.",
          "en": "Can I get the check?",
          "note": "정해진 그것엔 the. the check는 그 계산서.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_06",
          "tag": "trip",
          "ko": "카드 돼요?",
          "en": "Can I use a card?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?"
        },
        {
          "id": "d26_07",
          "tag": "trip",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d26_08",
          "tag": "trip",
          "ko": "저 몸이 안 좋아요.",
          "en": "I don't feel good.",
          "eq": "I'm not okay 랑 비슷. feel good은 몸, not okay는 더 넓은 상황.",
          "rel": "↔ I don't feel good=몸 컨디션이 안 좋아(아플 때). I'm not okay=더 넓게 '나 안 괜찮아'(상황·기분·몸 다). 아파서 도움 청할 땐 I don't feel good 또는 I need a doctor가 정확.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d26_09",
          "tag": "trip",
          "ko": "의사 필요해요.",
          "en": "I need a doctor.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함"
        },
        {
          "id": "d26_10",
          "tag": "trip",
          "ko": "도와주세요.",
          "en": "Help me, please.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d26_11",
          "tag": "trip",
          "ko": "이거 안 시켰어요.",
          "en": "I didn't order this.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d26_12",
          "tag": "trip",
          "ko": "얼마예요?",
          "en": "How much is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음"
        },
        {
          "id": "d26_13",
          "tag": "trip",
          "ko": "정말 맛있었어요.",
          "en": "It was really good.",
          "tense": "과거",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d26_14",
          "tag": "trip",
          "ko": "너무 매워요.",
          "en": "It's too spicy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d26_15",
          "tag": "trip",
          "ko": "하나 더 주세요.",
          "en": "Can I get one more?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_16",
          "tag": "trip",
          "ko": "포장돼요?",
          "en": "Can I get this to go?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)"
        },
        {
          "id": "d26_17",
          "tag": "trip",
          "ko": "고마워요.",
          "en": "Thank you."
        },
        {
          "id": "d26_18",
          "tag": "trip",
          "ko": "정말 좋았어요.",
          "en": "It was great.",
          "tense": "과거",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다"
        },
        {
          "id": "d26_19",
          "tag": "trip",
          "ko": "또 올게요.",
          "en": "I'll come back.",
          "tense": "미래",
          "rel": "↔ 'I'll ~'은 방금 정한 약속(할게), 'I'm going to ~'는 미리 정한 계획(할 거야).",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d26_20",
          "tag": "trip",
          "ko": "잘 지내요.",
          "en": "Take care.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자"
        },
        {
          "id": "d26_21",
          "tag": "trip",
          "ko": "두 개 살게요.",
          "en": "I'll take two.",
          "note": "개수는 동사 뒤에. take two, take one.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함"
        },
        {
          "id": "d26_22",
          "tag": "trip",
          "ko": "맥주 두 잔 주세요.",
          "en": "Two beers, please.",
          "purpose": "ask",
          "purposeLabel": "요청",
          "purposeMean": "부탁"
        },
        {
          "id": "d26_23",
          "tag": "trip",
          "ko": "하나면 돼요.",
          "en": "Just one.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함"
        }
      ]
    },
    {
      "day": 27,
      "verb": "시제",
      "phase": "시제 · 4개의 시간",
      "ready": true,
      "dlabel": "시제 ①",
      "title": "시제 · 긍정",
      "concept": "영어 시제가 열두 개라고 들었죠? 겁먹지 마세요. 생존 영어는 딱 네 칸이면 돼요. 평소, 과거, 미래, 지금. 같은 문장을 네 칸에 넣어볼게요. 평소엔 I eat, 어제는 I ate, 내일은 I'll eat, 지금은 I'm eating. 보세요, 문장은 그대론데 시간만 바뀌죠. 한국어는 시간을 대충 말하지만 영어는 이 네 칸을 꼭 골라요. 그래서 한국어 힌트에 매일, 어제, 내일, 지금을 넣어뒀어요. 그 단어 보고 네 칸 중 하나를 고르면 돼요. 딱 하나만, 과거는 동사가 변해요. ate, went처럼요. 그건 그냥 외우세요.",
      "items": [
        {
          "id": "d27_01",
          "tag": "평소",
          "ko": "나 매일 먹어.",
          "en": "I eat every day.",
          "note": "평소·반복은 동사 원형 그대로. I eat."
        },
        {
          "id": "d27_02",
          "tag": "평소",
          "ko": "나 매일 거기 가.",
          "en": "I go there every day."
        },
        {
          "id": "d27_03",
          "tag": "평소",
          "ko": "나 매일 커피 마셔.",
          "en": "I drink coffee every day."
        },
        {
          "id": "d27_04",
          "tag": "평소",
          "ko": "나 매일 일해.",
          "en": "I work every day."
        },
        {
          "id": "d27_05",
          "tag": "평소",
          "ko": "나 매일 그거 해.",
          "en": "I do it every day."
        },
        {
          "id": "d27_06",
          "tag": "과거",
          "ko": "나 어제 먹었어.",
          "en": "I ate yesterday.",
          "note": "eat의 과거는 ate. ed 아니고 통째로 바뀜. 외우기."
        },
        {
          "id": "d27_07",
          "tag": "과거",
          "ko": "나 어제 거기 갔어.",
          "en": "I went there yesterday.",
          "note": "go의 과거는 went."
        },
        {
          "id": "d27_08",
          "tag": "과거",
          "ko": "나 어제 커피 마셨어.",
          "en": "I drank coffee yesterday.",
          "note": "drink의 과거는 drank."
        },
        {
          "id": "d27_09",
          "tag": "과거",
          "ko": "나 어제 일했어.",
          "en": "I worked yesterday.",
          "note": "work는 규칙. 뒤에 ed 붙여 worked."
        },
        {
          "id": "d27_10",
          "tag": "과거",
          "ko": "나 어제 그거 했어.",
          "en": "I did it yesterday.",
          "note": "do의 과거는 did."
        },
        {
          "id": "d27_11",
          "tag": "미래",
          "ko": "나 내일 먹을 거야.",
          "en": "I'll eat tomorrow.",
          "note": "미래는 I'll(=I will) + 원형. I'll eat."
        },
        {
          "id": "d27_12",
          "tag": "미래",
          "ko": "나 내일 거기 갈 거야.",
          "en": "I'll go there tomorrow."
        },
        {
          "id": "d27_13",
          "tag": "미래",
          "ko": "나 내일 커피 마실 거야.",
          "en": "I'll drink coffee tomorrow."
        },
        {
          "id": "d27_14",
          "tag": "미래",
          "ko": "나 내일 일할 거야.",
          "en": "I'll work tomorrow."
        },
        {
          "id": "d27_15",
          "tag": "미래",
          "ko": "나 내일 그거 할 거야.",
          "en": "I'll do it tomorrow."
        },
        {
          "id": "d27_16",
          "tag": "지금",
          "ko": "나 지금 먹고 있어.",
          "en": "I'm eating now.",
          "note": "지금은 be + 동사ing. I'm eating."
        },
        {
          "id": "d27_17",
          "tag": "지금",
          "ko": "나 지금 거기 가고 있어.",
          "en": "I'm going there now."
        },
        {
          "id": "d27_18",
          "tag": "지금",
          "ko": "나 지금 커피 마시고 있어.",
          "en": "I'm drinking coffee now."
        },
        {
          "id": "d27_19",
          "tag": "지금",
          "ko": "나 지금 일하고 있어.",
          "en": "I'm working now."
        },
        {
          "id": "d27_20",
          "tag": "지금",
          "ko": "나 지금 그거 하고 있어.",
          "en": "I'm doing it now."
        }
      ]
    },
    {
      "day": 28,
      "verb": "시제",
      "phase": "시제 · 4개의 시간",
      "ready": true,
      "dlabel": "시제 ②",
      "title": "시제 · 부정",
      "concept": "오늘은 아니라고 말하기예요. 여기가 진짜 중요해요. 시간마다 아니라는 말이 달라요. 평소에 안 해는 don't. 어제 안 했어는 didn't. 내일 안 할 거야는 won't. 지금 안 하고 있어는 not. 정리할게요. don't, didn't, won't, 이 셋은 뒤에 동사 원형이 와요. I didn't eat, ate 아니고 eat. 그리고 지금 안 하고 있어만 be 더하기 not 더하기 ing예요. I'm not eating. 딱 이 네 개만 잡으면 부정은 끝이에요.",
      "items": [
        {
          "id": "d28_01",
          "tag": "평소",
          "ko": "나 평소엔 아침 안 먹어.",
          "en": "I don't eat breakfast.",
          "note": "평소 안 해 = don't + 원형. eat breakfast 그대로."
        },
        {
          "id": "d28_02",
          "tag": "평소",
          "ko": "나 평소엔 거기 안 가.",
          "en": "I don't go there."
        },
        {
          "id": "d28_03",
          "tag": "평소",
          "ko": "나 평소엔 커피 안 마셔.",
          "en": "I don't drink coffee."
        },
        {
          "id": "d28_04",
          "tag": "평소",
          "ko": "나 평소엔 일 많이 안 해.",
          "en": "I don't work much."
        },
        {
          "id": "d28_05",
          "tag": "평소",
          "ko": "나 평소엔 그거 안 해.",
          "en": "I don't do it."
        },
        {
          "id": "d28_06",
          "tag": "과거",
          "ko": "나 어제 안 먹었어.",
          "en": "I didn't eat.",
          "note": "과거 안 했어 = didn't + 원형. ate 아니고 eat!"
        },
        {
          "id": "d28_07",
          "tag": "과거",
          "ko": "나 어제 거기 안 갔어.",
          "en": "I didn't go there."
        },
        {
          "id": "d28_08",
          "tag": "과거",
          "ko": "나 어제 커피 안 마셨어.",
          "en": "I didn't drink coffee."
        },
        {
          "id": "d28_09",
          "tag": "과거",
          "ko": "나 어제 일 안 했어.",
          "en": "I didn't work."
        },
        {
          "id": "d28_10",
          "tag": "과거",
          "ko": "나 어제 그거 안 했어.",
          "en": "I didn't do it."
        },
        {
          "id": "d28_11",
          "tag": "미래",
          "ko": "나 안 먹을 거야.",
          "en": "I won't eat.",
          "note": "미래 안 할 거야 = won't(=will not) + 원형."
        },
        {
          "id": "d28_12",
          "tag": "미래",
          "ko": "나 거기 안 갈 거야.",
          "en": "I won't go there."
        },
        {
          "id": "d28_13",
          "tag": "미래",
          "ko": "나 커피 안 마실 거야.",
          "en": "I won't drink coffee."
        },
        {
          "id": "d28_14",
          "tag": "미래",
          "ko": "나 일 안 할 거야.",
          "en": "I won't work."
        },
        {
          "id": "d28_15",
          "tag": "미래",
          "ko": "나 그거 안 할 거야.",
          "en": "I won't do it."
        },
        {
          "id": "d28_16",
          "tag": "지금",
          "ko": "나 지금 안 먹고 있어.",
          "en": "I'm not eating.",
          "note": "지금 ~하는 중이 아니다 = be + not + ing. 이 칸만 don't/didn't/won't 안 쓰고 not으로 해요."
        },
        {
          "id": "d28_17",
          "tag": "지금",
          "ko": "나 지금 거기 안 가고 있어.",
          "en": "I'm not going there."
        },
        {
          "id": "d28_18",
          "tag": "지금",
          "ko": "나 지금 커피 안 마시고 있어.",
          "en": "I'm not drinking coffee."
        },
        {
          "id": "d28_19",
          "tag": "지금",
          "ko": "나 지금 일 안 하고 있어.",
          "en": "I'm not working."
        },
        {
          "id": "d28_20",
          "tag": "지금",
          "ko": "나 지금 그거 안 하고 있어.",
          "en": "I'm not doing it."
        }
      ]
    },
    {
      "day": 29,
      "verb": "묻기",
      "phase": "묻는 말 · 5가지",
      "ready": true,
      "dlabel": "묻기",
      "title": "Do / Are / Can you / Can I",
      "concept": "오늘은 묻는 말이에요. 자주 헷갈리는 Do you랑 Are you부터 갈라볼게요. 끝소리로만 외우면 가끔 틀려요. 알아? 있어? 도 아 어 로 끝나지만 Do you 거든요. 그러니 뜻으로 잡아요. 괜찮아? 배고파? 준비됐어? 처럼 지금 어떤 상태인지 물으면 Are you. Are you okay? 마셔? 운전해? 알아? 처럼 무슨 행동을 하는지 물으면 Do you. Do you drink coffee? 쉽게, 상태면 Are, 동작이면 Do. 그리고 더 쉬운 방법. 자주 쓰는 건 그냥 통째로 외워요. 어유오케이 Are you okay, 어유레디 Are you ready, 두유노 Do you know. 이렇게 덩어리로 입에 붙이면 고를 필요도 없어요. 나머지도 간단해요. 도와줄래? 는 Can you. 내가 해도 돼? 는 Can I. 커피 주세요 는 Can I get. 오늘은 이 다섯을 입에 붙여봐요.",
      "items": [
        {
          "id": "d29_01",
          "tag": "사실",
          "ko": "너 커피 마셔?",
          "en": "Do you drink coffee?",
          "note": "마셔? 운전해? 처럼 무슨 행동을 하는지 물으면 Do you."
        },
        {
          "id": "d29_02",
          "tag": "사실",
          "ko": "너 운전해?",
          "en": "Do you drive?"
        },
        {
          "id": "d29_03",
          "tag": "사실",
          "ko": "너 영어 해?",
          "en": "Do you speak English?"
        },
        {
          "id": "d29_04",
          "tag": "사실",
          "ko": "너 그거 알아?",
          "en": "Do you know it?",
          "note": "알아? 는 아? 로 끝나도 Do you 예요. 두유노잇 통째로 외워요."
        },
        {
          "id": "d29_05",
          "tag": "상태",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "note": "괜찮아? 배고파? 준비됐어? 처럼 상태를 물으면 Are you. 어유오케이는 통째로."
        },
        {
          "id": "d29_06",
          "tag": "상태",
          "ko": "너 준비됐어?",
          "en": "Are you ready?",
          "note": "어유레디. 통째로."
        },
        {
          "id": "d29_07",
          "tag": "상태",
          "ko": "너 배고파?",
          "en": "Are you hungry?"
        },
        {
          "id": "d29_08",
          "tag": "상태",
          "ko": "너 거기 있어?",
          "en": "Are you there?",
          "note": "거기 있어? 는 어디 있나(상태)라 Are you. ('시간 있어?'는 가짐이라 Do you.)"
        },
        {
          "id": "d29_09",
          "tag": "부탁",
          "ko": "도와줄래?",
          "en": "Can you help me?",
          "note": "Can you ~? = 해줄래?(상대가 해줌)."
        },
        {
          "id": "d29_10",
          "tag": "부탁",
          "ko": "천천히 말해 줄래?",
          "en": "Can you speak slowly?"
        },
        {
          "id": "d29_11",
          "tag": "부탁",
          "ko": "이거 고쳐 줄래?",
          "en": "Can you fix this?"
        },
        {
          "id": "d29_12",
          "tag": "부탁",
          "ko": "사진 찍어 줄래?",
          "en": "Can you take a photo?"
        },
        {
          "id": "d29_13",
          "tag": "허락",
          "ko": "화장실 써도 돼?",
          "en": "Can I use the bathroom?",
          "note": "Can I + 동사 = 내가 해도 돼?(허락)."
        },
        {
          "id": "d29_14",
          "tag": "허락",
          "ko": "나 들어가도 돼?",
          "en": "Can I come in?"
        },
        {
          "id": "d29_15",
          "tag": "허락",
          "ko": "나 여기 앉아도 돼?",
          "en": "Can I sit here?"
        },
        {
          "id": "d29_16",
          "tag": "허락",
          "ko": "나 네 펜 써도 돼?",
          "en": "Can I use your pen?"
        },
        {
          "id": "d29_17",
          "tag": "주문",
          "ko": "커피 하나 주세요.",
          "en": "Can I get a coffee?",
          "note": "Can I get + 물건 = ~ 주세요(가게 주문)."
        },
        {
          "id": "d29_18",
          "tag": "주문",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?"
        },
        {
          "id": "d29_19",
          "tag": "주문",
          "ko": "메뉴판 주세요.",
          "en": "Can I get a menu?"
        },
        {
          "id": "d29_20",
          "tag": "주문",
          "ko": "하나 더 주세요.",
          "en": "Can I get one more?",
          "note": "'주세요'는 Can I get. '~해도 돼?'(허락)랑 달라요."
        }
      ]
    },
    {
      "day": 30,
      "verb": "시작어",
      "phase": "시작어 스프린트 · 첫 단어 0.1초",
      "ready": true,
      "sprint": true,
      "title": "시작어 스프린트 · 두유 vs 어유",
      "concept": "오늘은 좀 달라요. 문장의 첫 단어 하나만 떼서 반사로 만들 거예요. 한국어가 들리면 뒷말 말고 시작어 딱 한 마디만 빨리 뱉어요. 괜찮아? 배고파? 준비됐어? 처럼 지금 상태를 물으면 어유, Are you. 마셔? 운전해? 알아? 처럼 무슨 행동을 하는지 물으면 두유, Do you. 딱 두 개예요. 조심할 거 하나. 거기 있어? 는 어디 있나라서 어유, 시간 있어? 는 가졌나라서 두유. 같은 있어인데 갈려요. 먼저 한 통씩 굳히고, 그다음 번갈아, 마지막에 섞어요. 정답 음성이 나오기 전에 입에서 먼저 튀어나오면 통과예요. 신호 기다릴 때 한 판씩 해봐요.",
      "items": [
        {
          "id": "s30_01",
          "sprint": true,
          "onset": "Do you",
          "round": 1,
          "koRef": "d29_01",
          "ko": "너 커피 마셔?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_02",
          "sprint": true,
          "onset": "Do you",
          "round": 1,
          "koRef": "d29_02",
          "ko": "너 운전해?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_03",
          "sprint": true,
          "onset": "Do you",
          "round": 1,
          "koRef": "d29_03",
          "ko": "너 영어 해?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_04",
          "sprint": true,
          "onset": "Are you",
          "round": 1,
          "koRef": "d29_05",
          "ko": "너 괜찮아?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_05",
          "sprint": true,
          "onset": "Are you",
          "round": 1,
          "koRef": "d29_06",
          "ko": "너 준비됐어?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_06",
          "sprint": true,
          "onset": "Are you",
          "round": 1,
          "koRef": "d29_07",
          "ko": "너 배고파?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_07",
          "sprint": true,
          "onset": "Are you",
          "round": 2,
          "koRef": "d29_08",
          "ko": "너 거기 있어?",
          "en": "Are you",
          "note": "거기 있어? = 어디 있나(상태) → 어유. '시간 있어?'랑 헷갈리지 마."
        },
        {
          "id": "s30_08",
          "sprint": true,
          "onset": "Do you",
          "round": 2,
          "koRef": "d3_04",
          "ko": "너 시간 있어?",
          "en": "Do you",
          "note": "시간 있어? = 가졌나(가짐) → 두유. '거기 있어?'(어유)랑 달라."
        },
        {
          "id": "s30_09",
          "sprint": true,
          "onset": "Do you",
          "round": 2,
          "koRef": "d5_04",
          "ko": "너 이거 좋아해?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_10",
          "sprint": true,
          "onset": "Are you",
          "round": 2,
          "koRef": "d7_13",
          "ko": "너 시내 가?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_11",
          "sprint": true,
          "onset": "Do you",
          "round": 2,
          "koRef": "d29_04",
          "ko": "너 그거 알아?",
          "en": "Do you",
          "note": "알아? 도 행동 물음이라 → 두유 (Do you). 아? 로 끝나도 두유."
        },
        {
          "id": "s30_12",
          "sprint": true,
          "onset": "Are you",
          "round": 2,
          "koRef": "d29_05",
          "ko": "너 괜찮아?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_13",
          "sprint": true,
          "onset": "Do you",
          "round": 3,
          "koRef": "d5_16",
          "ko": "너 날 알아?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_14",
          "sprint": true,
          "onset": "Are you",
          "round": 3,
          "koRef": "d7_18",
          "ko": "너 지금 가?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        },
        {
          "id": "s30_15",
          "sprint": true,
          "onset": "Do you",
          "round": 3,
          "koRef": "d29_02",
          "ko": "너 운전해?",
          "en": "Do you",
          "note": "행동·가짐·앎을 물으면 → 두유 (Do you)"
        },
        {
          "id": "s30_16",
          "sprint": true,
          "onset": "Are you",
          "round": 3,
          "koRef": "d29_07",
          "ko": "너 배고파?",
          "en": "Are you",
          "note": "상태(기분)를 물으면 → 어유 (Are you)"
        }
      ]
    },
    {
      "day": 31,
      "verb": "시작어",
      "phase": "시작어 스프린트 · 첫 단어 0.1초",
      "ready": true,
      "sprint": true,
      "title": "시작어 스프린트 · 캔유 vs 캔아이 vs 캔아이겟",
      "concept": "오늘은 캔으로 시작하는 세 가지를 갈라요. 도와줄래? 처럼 남이 해주는 부탁이면 캔유, Can you. 들어가도 돼? 처럼 내가 해도 되냐 물으면 캔아이, Can I. 커피 주세요 처럼 물건을 달라면 캔아이겟, Can I get. 줄래는 캔유, 돼는 캔아이, 주세요는 캔아이겟. 어제처럼 한 통씩 굳히고 번갈아 섞어요. 시작어만 빨리 뱉는 연습이에요.",
      "items": [
        {
          "id": "s31_01",
          "sprint": true,
          "onset": "Can you",
          "round": 1,
          "koRef": "d29_09",
          "ko": "도와줄래?",
          "en": "Can you",
          "note": "네가 해줘(부탁) → 캔유 (Can you)"
        },
        {
          "id": "s31_02",
          "sprint": true,
          "onset": "Can you",
          "round": 1,
          "koRef": "d29_10",
          "ko": "천천히 말해 줄래?",
          "en": "Can you",
          "note": "네가 해줘(부탁) → 캔유 (Can you)"
        },
        {
          "id": "s31_03",
          "sprint": true,
          "onset": "Can I",
          "round": 1,
          "koRef": "d29_13",
          "ko": "화장실 써도 돼?",
          "en": "Can I",
          "note": "내가 해도 돼(허락) → 캔아이 (Can I)"
        },
        {
          "id": "s31_04",
          "sprint": true,
          "onset": "Can I",
          "round": 1,
          "koRef": "d29_14",
          "ko": "나 들어가도 돼?",
          "en": "Can I",
          "note": "내가 해도 돼(허락) → 캔아이 (Can I)"
        },
        {
          "id": "s31_05",
          "sprint": true,
          "onset": "Can I get",
          "round": 1,
          "koRef": "d29_17",
          "ko": "커피 하나 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        },
        {
          "id": "s31_06",
          "sprint": true,
          "onset": "Can I get",
          "round": 1,
          "koRef": "d29_18",
          "ko": "물 좀 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        },
        {
          "id": "s31_07",
          "sprint": true,
          "onset": "Can you",
          "round": 2,
          "koRef": "d29_11",
          "ko": "이거 고쳐 줄래?",
          "en": "Can you",
          "note": "네가 해줘(부탁) → 캔유 (Can you)"
        },
        {
          "id": "s31_08",
          "sprint": true,
          "onset": "Can I",
          "round": 2,
          "koRef": "d29_15",
          "ko": "나 여기 앉아도 돼?",
          "en": "Can I",
          "note": "내가 해도 돼(허락) → 캔아이 (Can I)"
        },
        {
          "id": "s31_09",
          "sprint": true,
          "onset": "Can I get",
          "round": 2,
          "koRef": "d29_19",
          "ko": "메뉴판 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        },
        {
          "id": "s31_10",
          "sprint": true,
          "onset": "Can you",
          "round": 2,
          "koRef": "d29_12",
          "ko": "사진 찍어 줄래?",
          "en": "Can you",
          "note": "네가 해줘(부탁) → 캔유 (Can you)"
        },
        {
          "id": "s31_11",
          "sprint": true,
          "onset": "Can I",
          "round": 2,
          "koRef": "d29_16",
          "ko": "나 네 펜 써도 돼?",
          "en": "Can I",
          "note": "내가 해도 돼(허락) → 캔아이 (Can I)"
        },
        {
          "id": "s31_12",
          "sprint": true,
          "onset": "Can I get",
          "round": 2,
          "koRef": "d29_20",
          "ko": "하나 더 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        },
        {
          "id": "s31_13",
          "sprint": true,
          "onset": "Can you",
          "round": 3,
          "koRef": "d15_15",
          "ko": "다시 말해 줄래요?",
          "en": "Can you",
          "note": "네가 해줘(부탁) → 캔유 (Can you)"
        },
        {
          "id": "s31_14",
          "sprint": true,
          "onset": "Can I get",
          "round": 3,
          "koRef": "d26_05",
          "ko": "계산서 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        },
        {
          "id": "s31_15",
          "sprint": true,
          "onset": "Can I",
          "round": 3,
          "koRef": "d29_13",
          "ko": "화장실 써도 돼?",
          "en": "Can I",
          "note": "내가 해도 돼(허락) → 캔아이 (Can I)"
        },
        {
          "id": "s31_16",
          "sprint": true,
          "onset": "Can I get",
          "round": 3,
          "koRef": "d29_18",
          "ko": "물 좀 주세요.",
          "en": "Can I get",
          "note": "물건 주세요(주문) → 캔아이겟 (Can I get)"
        }
      ]
    },
    {
      "day": 32,
      "verb": "과거형",
      "phase": "과거형 스프린트 · 어제 한 일",
      "ready": true,
      "sprint": true,
      "title": "과거형 스프린트 · 갔어 went · 안 갔어 didn't go",
      "concept": "오늘은 과거예요. 어제 한 일. 딱 두 가지만 잡아요. 하나, 자주 쓰는 과거는 모양이 통째로 바껴요. go는 went, eat은 ate, get은 got, do는 did, drink는 drank, make는 made. ed 안 붙어요, 통째로 외워요. 둘, 안 했다고 할 땐 didn't 하나면 끝이에요. 그런데 didn't 뒤는 원형이에요. 안 갔어는 didn't went 아니라 didn't go. 갔어는 went, 안 갔어는 didn't go. 들으면 바로 한 마디만 뱉어요. 굳히고, 번갈아, 섞어요.",
      "items": [
        {
          "id": "s32_01",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d27_07",
          "ko": "나 어제 거기 갔어.",
          "en": "went",
          "note": "갔어 → went (goed 아님). 통째로 외워."
        },
        {
          "id": "s32_02",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d27_06",
          "ko": "나 어제 먹었어.",
          "en": "ate",
          "note": "먹었어 → ate (eated 아님)."
        },
        {
          "id": "s32_03",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d10_06",
          "ko": "나 표 구했어.",
          "en": "got",
          "note": "받았어·샀어·구했어 → got (get의 과거)."
        },
        {
          "id": "s32_04",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d27_10",
          "ko": "나 어제 그거 했어.",
          "en": "did",
          "note": "했어 → did (do의 과거)."
        },
        {
          "id": "s32_05",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d27_08",
          "ko": "나 어제 커피 마셨어.",
          "en": "drank",
          "note": "마셨어 → drank."
        },
        {
          "id": "s32_06",
          "sprint": true,
          "onset": "과거형",
          "round": 1,
          "koRef": "d20_07",
          "ko": "나 실수했어.",
          "en": "made",
          "note": "만들었어·했어 → made (maked 아님)."
        },
        {
          "id": "s32_07",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d28_07",
          "ko": "나 어제 거기 안 갔어.",
          "en": "didn't go",
          "note": "안 했어 = didn't + 원형. didn't 뒤는 원형(went 아니라 go)!"
        },
        {
          "id": "s32_08",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d28_06",
          "ko": "나 어제 안 먹었어.",
          "en": "didn't eat",
          "note": "안 먹었어 → didn't eat (ate 아니고 eat)."
        },
        {
          "id": "s32_09",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d28_10",
          "ko": "나 어제 그거 안 했어.",
          "en": "didn't do",
          "note": "안 했어 = didn't + 원형. didn't 뒤는 원형(went 아니라 go)!"
        },
        {
          "id": "s32_10",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d28_08",
          "ko": "나 어제 커피 안 마셨어.",
          "en": "didn't drink",
          "note": "안 했어 = didn't + 원형. didn't 뒤는 원형(went 아니라 go)!"
        },
        {
          "id": "s32_11",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d10_12",
          "ko": "나 그거 못 샀어.",
          "en": "didn't get",
          "note": "못 샀어·못 받았어 → didn't get."
        },
        {
          "id": "s32_12",
          "sprint": true,
          "onset": "didn't",
          "round": 2,
          "koRef": "d26_11",
          "ko": "이거 안 시켰어요.",
          "en": "didn't order",
          "note": "안 했어 = didn't + 원형. didn't 뒤는 원형(went 아니라 go)!"
        },
        {
          "id": "s32_13",
          "sprint": true,
          "onset": "과거형",
          "round": 3,
          "koRef": "d27_07",
          "ko": "나 어제 거기 갔어.",
          "en": "went",
          "note": "자주 쓰는 과거는 통째로 바껴요(ed 아님)."
        },
        {
          "id": "s32_14",
          "sprint": true,
          "onset": "didn't",
          "round": 3,
          "koRef": "d28_07",
          "ko": "나 어제 거기 안 갔어.",
          "en": "didn't go",
          "note": "갔어=went, 안 갔어=didn't go. 등 붙여 기억."
        },
        {
          "id": "s32_15",
          "sprint": true,
          "onset": "과거형",
          "round": 3,
          "koRef": "d10_06",
          "ko": "나 표 구했어.",
          "en": "got",
          "note": "자주 쓰는 과거는 통째로 바껴요(ed 아님)."
        },
        {
          "id": "s32_16",
          "sprint": true,
          "onset": "didn't",
          "round": 3,
          "koRef": "d28_06",
          "ko": "나 어제 안 먹었어.",
          "en": "didn't eat",
          "note": "안 했어 = didn't + 원형. didn't 뒤는 원형(went 아니라 go)!"
        }
      ]
    }
  ]
};
