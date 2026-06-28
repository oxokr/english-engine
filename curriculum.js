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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "okay 대신 fine, good, hungry, tired 넣으면 다 됨.",
          "use": "걱정해주는 사람한테 '나 괜찮아'. 사실 안 괜찮아도 둘러댈 때 많이 씀."
        },
        {
          "id": "d1_02",
          "tag": "be",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "note": "물어볼 땐 You are를 Are you로 뒤집어요.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "끝의 okay 대신 hurt, sick, sure 넣어도 됨.",
          "use": "넘어졌거나 표정 안 좋은 사람한테 다가가 '너 괜찮아?'"
        },
        {
          "id": "d1_03",
          "tag": "be",
          "ko": "나 준비됐어.",
          "en": "I'm ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "ready 대신 okay, here, hungry 넣어 상태 바꿔봐.",
          "use": "나갈 채비 끝내고 '나 준비 다 됐어'. 자신감이 묻어남."
        },
        {
          "id": "d1_04",
          "tag": "be",
          "ko": "너 준비됐어?",
          "en": "Are you ready?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "Are you 뒤에 ready, okay, sure, late 넣어봐.",
          "use": "출발 직전에 '갈까? 준비됐어?' 채근 아니고 확인하는 톤."
        },
        {
          "id": "d1_05",
          "tag": "be",
          "ko": "나 배고파.",
          "en": "I'm hungry.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "hungry 대신 thirsty(목말라), full(배불러) 넣어봐.",
          "use": "밥때라 '나 배고파'. 슬쩍 '뭐 먹자' 신호로도 던짐."
        },
        {
          "id": "d1_06",
          "tag": "be",
          "ko": "나 피곤해.",
          "en": "I'm tired.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "tired 대신 sleepy(졸려), busy(바빠), sick(아파).",
          "use": "기운 빠져 '나 피곤해'. 약속 미룰 핑계로도 자주 씀."
        },
        {
          "id": "d1_07",
          "tag": "be",
          "ko": "나 여기 있어.",
          "en": "I'm here.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "here 대신 there, home, ready 넣어 바꿔봐.",
          "use": "찾는 사람한테 손 들고 '나 여기 있어'. 안심시키는 톤."
        },
        {
          "id": "d1_08",
          "tag": "be",
          "ko": "너 어디야?",
          "en": "Where are you?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "you 대신 we, they 넣어 누구 위치인지 바꿔.",
          "use": "안 보이는 상대한테 전화로 '너 어디야?' 살짝 답답할 때."
        },
        {
          "id": "d1_09",
          "tag": "be",
          "ko": "이거 좋다.",
          "en": "This is good.",
          "scene": "음식을 한 입 먹어보고.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "good 대신 nice, easy, cheap 넣어 평가 바꿔.",
          "use": "맛보거나 써보고 '이거 좋다'. 마음에 든다고 가볍게."
        },
        {
          "id": "d1_10",
          "tag": "be",
          "ko": "그거 괜찮아.",
          "en": "It's okay.",
          "scene": "걱정하는 사람을 안심시키며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "It's 뒤에 fine, okay, good 넣어 바꿔봐.",
          "use": "상대가 미안해할 때 '괜찮아, 됐어' 하고 넘기는 톤."
        },
        {
          "id": "d1_11",
          "tag": "be",
          "ko": "너무 추워.",
          "en": "It's too cold.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "cold 대신 hot, expensive, far 넣어봐.",
          "use": "몸 떨며 '너무 춥다'. too는 '정도가 지나쳐 불편'."
        },
        {
          "id": "d1_12",
          "tag": "be",
          "ko": "나 안 괜찮아.",
          "en": "I'm not okay.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "not okay 대신 not ready, not sure, not happy.",
          "use": "참다가 솔직히 '나 안 괜찮아'. 도움 청하거나 속내 꺼낼 때."
        },
        {
          "id": "d1_13",
          "tag": "be",
          "ko": "나 행복해.",
          "en": "I'm happy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "happy 대신 glad, sad, tired 넣어 기분 바꿔.",
          "use": "기분 좋을 때 '나 행복해'. 고맙고 만족스럽다는 뜻으로도."
        },
        {
          "id": "d1_14",
          "tag": "be",
          "ko": "그거 쉬워.",
          "en": "It's easy.",
          "scene": "해보고 나서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "easy 대신 hard, good, cheap 넣어 평가 바꿔.",
          "use": "해보니 별거 아니라 '이거 쉽네'. 안심시키며 권할 때도."
        },
        {
          "id": "d1_15",
          "tag": "be",
          "ko": "이거 어려워.",
          "en": "This is hard.",
          "scene": "하다가 막혀서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "This is 대신 That is, It's 넣고 hard→easy로.",
          "use": "막혀서 '이거 어렵다'. 여기 hard는 '단단한'이 아니라 '어려운'."
        },
        {
          "id": "d1_16",
          "tag": "be",
          "ko": "너 늦었어.",
          "en": "You're late.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "You're 대신 He's, She's 넣어 남 얘기로.",
          "use": "늦게 온 사람한테 '너 늦었어'. 톤 따라 농담도 핀잔도."
        },
        {
          "id": "d1_17",
          "tag": "be",
          "ko": "나 안 바빠.",
          "en": "I'm not busy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "not busy 대신 not late, not tired, not ready.",
          "use": "도와줄 수 있다고 '나 안 바빠'. 부담 갖지 말라는 뜻."
        },
        {
          "id": "d1_18",
          "tag": "be",
          "ko": "그 사람 친절해.",
          "en": "He's nice.",
          "note": "He's는 He is. 그 사람은 ~야.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "nice 대신 kind, busy, here 넣어 사람 묘사.",
          "use": "누구 소개하며 '그 사람 좋은 사람이야'. He's=He is 줄임."
        },
        {
          "id": "d1_19",
          "tag": "be",
          "ko": "우리 친구야.",
          "en": "We're friends.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "We're 대신 They're 넣고 friends→ready, late로.",
          "use": "관계 설명하며 '우리 친구야'. 처음 본 사람한테 소개할 때도."
        },
        {
          "id": "d1_20",
          "tag": "be",
          "ko": "맞아.",
          "en": "That's right.",
          "scene": "상대 말에 맞장구치며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "right 대신 good, okay, true 넣어 바꿔봐.",
          "use": "상대 말에 '그래 맞아' 하고 맞장구. 네 말이 맞다는 뜻."
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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "at home 대신 at work, at the hotel, at the airport.",
          "use": "어디냐 물어오면 '집이야'. at home은 집에 머무는 중이란 뜻."
        },
        {
          "id": "d2_02",
          "tag": "be",
          "ko": "나 회사에 있어.",
          "en": "I'm at work.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "at work 대신 at home, at school, at the store.",
          "use": "'나 회사야'. 일하러 나와 있단 뜻이지 건물 콕 집은 게 아냐."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "찾던 게 보이면 '여기 있네'. 건네주며 '여기요'로도."
        },
        {
          "id": "d2_04",
          "tag": "be",
          "ko": "그거 저기 있어.",
          "en": "It's there.",
          "scene": "멀리 가리키며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "손으로 가리키며 '저기 있잖아'. 멀리 있는 걸 짚을 때."
        },
        {
          "id": "d2_05",
          "tag": "be",
          "ko": "나 안에 있어.",
          "en": "I'm inside.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "inside 대신 outside, in the car, in the room.",
          "use": "전화로 '나 안에 들어와 있어'. 건물·차 안이라 알릴 때."
        },
        {
          "id": "d2_06",
          "tag": "be",
          "ko": "나 밖에 있어.",
          "en": "I'm outside.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "'나 밖에 나와 있어'. 문 앞이나 가게 밖에서 기다린다 알릴 때."
        },
        {
          "id": "d2_07",
          "tag": "be",
          "ko": "이건 내 거야.",
          "en": "This is mine.",
          "scene": "내 물건이라고 짚으며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "mine 대신 yours, his, hers.",
          "use": "짐 섞였을 때 '이거 내 거'. 단호하게 챙길 때."
        },
        {
          "id": "d2_08",
          "tag": "be",
          "ko": "그건 네 거야.",
          "en": "That's yours.",
          "scene": "물건을 건네주며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "남 물건 챙겨주며 '이거 네 거야'. 거스름돈·짐 건넬 때."
        },
        {
          "id": "d2_09",
          "tag": "be",
          "ko": "이게 뭐야?",
          "en": "What is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "this 대신 that(저거).",
          "use": "처음 보는 물건·음식 가리키며 '이게 뭐예요?'. 점원에게."
        },
        {
          "id": "d2_10",
          "tag": "be",
          "ko": "그건 안 좋아.",
          "en": "That's not good.",
          "scene": "결과를 보고 실망해서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "맘에 안 들 때 '그건 좀 별로야'. 세게 까는 게 아니라 부드럽게."
        },
        {
          "id": "d2_11",
          "tag": "be",
          "ko": "나 늦지 않았어.",
          "en": "I'm not late.",
          "note": "아니라고 할 땐 be 뒤에 not. I'm not.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "늦었단 소리 들을까 봐 '나 안 늦었어'로 미리 막을 때."
        },
        {
          "id": "d2_12",
          "tag": "be",
          "ko": "우리 거의 다 왔어.",
          "en": "We're almost there.",
          "eq": "We're getting there 는 가는 중(더 멂), almost there는 거의 다 옴.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "목적지 가까워지면 '거의 다 왔어'. 운전·길에서 안심시킬 때."
        },
        {
          "id": "d2_13",
          "tag": "be",
          "ko": "그 사람 여기 없어.",
          "en": "He's not here.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "He's 대신 She's.",
          "use": "찾는 사람 자리 비웠을 때 '그 사람 지금 없어요'."
        },
        {
          "id": "d2_14",
          "tag": "be",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "note": "the bathroom — 거기 하나뿐인 곳이라 a 아니고 the.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "the bathroom 대신 the exit(출구), the station(역).",
          "use": "여행 첫 생존 문장. 식당·가게서 '화장실 어디예요?'"
        },
        {
          "id": "d2_15",
          "tag": "be",
          "ko": "내 가방 어디 있어?",
          "en": "Where is my bag?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "my bag 대신 my phone, my key, my room.",
          "use": "내 짐 안 보일 때 '내 가방 어디 갔지?'. 혼잣말로도, 물을 때도."
        },
        {
          "id": "d2_16",
          "tag": "be",
          "ko": "거기 멀어?",
          "en": "Is it far?",
          "scene": "택시 타기 전에 기사에게.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "far 대신 close(가까워?), open(열었어?).",
          "use": "걸어갈지 차 탈지 정하려 '거기 멀어요?' 점원·행인에게."
        },
        {
          "id": "d2_17",
          "tag": "be",
          "ko": "거기 가까워.",
          "en": "It's close.",
          "scene": "길 물어본 사람에게.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "'걸어갈 만해, 가까워'. 걱정 덜어주는 대답. far(멀어)의 반대."
        },
        {
          "id": "d2_18",
          "tag": "be",
          "ko": "우리 준비됐어.",
          "en": "We're ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "출발 직전 '우리 다 됐어'. 일행 챙겨 떠날 채비 끝났을 때."
        },
        {
          "id": "d2_19",
          "tag": "be",
          "ko": "너 거기 있어?",
          "en": "Are you there?",
          "scene": "전화로 상대를 확인하며.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "전화로 안 보일 때 '너 거기 있어?'. 듣고 있냐 확인할 때도."
        },
        {
          "id": "d2_20",
          "tag": "be",
          "ko": "그 사람 누구야?",
          "en": "Who is he?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Who 대신 What(뭐야), Where(어디야).",
          "use": "모르는 사람 보고 '저 사람 누구야?' 옆사람에게 슬쩍 물을 때."
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
          "purposeMean": "가지고 있다·없다",
          "apply": "a car 대신 a bike, a license, a map.",
          "use": "내 거 담담하게 '나 차 있어'. 자랑 아니고 그냥 사실."
        },
        {
          "id": "d3_02",
          "tag": "have",
          "ko": "나 시간 있어.",
          "en": "I have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "time 대신 a minute, a sec, an hour.",
          "use": "'나 지금 짬 나' 여유 있을 때. 도와줄게란 뜻으로도."
        },
        {
          "id": "d3_03",
          "tag": "have",
          "ko": "나 시간 없어.",
          "en": "I don't have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "앞에 Sorry, 붙이면 부드러워. \"Sorry, I don't have time.\"",
          "use": "바빠서 '나 시간 안 돼' 미안하게 거절할 때."
        },
        {
          "id": "d3_04",
          "tag": "have",
          "ko": "너 시간 있어?",
          "en": "Do you have time?",
          "eq": "have time = 시간 여유, have the time = 몇 시야? the 하나로 뜻이 달라요.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "time 대신 a minute, a sec.",
          "use": "부탁 전에 '너 시간 돼?' 조심스레 떠볼 때."
        },
        {
          "id": "d3_05",
          "tag": "have",
          "ko": "나 질문 있어.",
          "en": "I have a question.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a question 대신 an idea, a problem, a favor.",
          "use": "끼어들며 '저 궁금한 거 있어요'. 손 들고."
        },
        {
          "id": "d3_06",
          "tag": "have",
          "ko": "나 돈 없어.",
          "en": "I don't have money.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "money 대신 cash, change(잔돈).",
          "use": "'나 지금 돈 없어' 솔직하게. 호객 거절에도."
        },
        {
          "id": "d3_07",
          "tag": "have",
          "ko": "너 펜 있어?",
          "en": "Do you have a pen?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a pen 대신 a charger, a tissue, a lighter.",
          "use": "적어야 할 때 옆사람에게 '펜 있어?' 가볍게 빌릴 때."
        },
        {
          "id": "d3_08",
          "tag": "have",
          "ko": "나 형제 있어.",
          "en": "I have a brother.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a brother 대신 a sister, two kids.",
          "use": "'나 형제 있어'. 영어는 형·동생 구분 안 해."
        },
        {
          "id": "d3_09",
          "tag": "have",
          "ko": "나 강아지 있어.",
          "en": "I have a dog.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a dog 대신 a cat, two dogs.",
          "use": "'나 강아지 키워'. have엔 '키우다' 뜻도 있어."
        },
        {
          "id": "d3_10",
          "tag": "have",
          "ko": "우리 문제 생겼어.",
          "en": "We have a problem.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a problem 대신 a situation, an issue.",
          "use": "일 꼬였을 때 '우리 문제 생겼어' 알릴 때. 살짝 긴장."
        },
        {
          "id": "d3_11",
          "tag": "have",
          "ko": "나 좋은 생각 있어.",
          "en": "I have an idea.",
          "note": "idea처럼 모음 소리로 시작하면 a 대신 an.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "뒤에 이어가: \"I have an idea—let's ~(이러자)\".",
          "use": "'나 좋은 생각났어!' 방법 떠올라 눈 반짝일 때."
        },
        {
          "id": "d3_12",
          "tag": "have",
          "ko": "너 여권 있어?",
          "en": "Do you have your passport?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "your passport 대신 your ticket, your phone, your key.",
          "use": "나가기 전 '여권 챙겼어?' 다정하게 확인할 때."
        },
        {
          "id": "d3_13",
          "tag": "have",
          "ko": "나 예약 있어.",
          "en": "I have a reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "\"I have a reservation for two / seven.\" (둘·7시)",
          "use": "식당·호텔서 '저 예약했는데요' 이름 대기 직전에."
        },
        {
          "id": "d3_14",
          "tag": "have",
          "ko": "나 표 있어.",
          "en": "I have a ticket.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a ticket 대신 a pass, a coupon.",
          "use": "입장·탑승 때 '저 표 있어요' 보여주며."
        },
        {
          "id": "d3_15",
          "tag": "have",
          "ko": "너 현금 있어?",
          "en": "Do you have cash?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "cash 대신 change(잔돈), small bills(잔돈).",
          "use": "계산 전 '너 현금 있어?' 카드 안 될까 봐."
        },
        {
          "id": "d3_16",
          "tag": "have",
          "ko": "나 아무것도 없어.",
          "en": "I don't have anything.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "use": "빈손일 때 '나 아무것도 없어'. 검문·호객 거절에도."
        },
        {
          "id": "d3_17",
          "tag": "have",
          "ko": "그 사람 차 있어.",
          "en": "He has a car.",
          "note": "I have지만 3인칭(그 사람)은 has로 바뀌어요.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a car 대신 a house, a dog. (he/she면 has)",
          "use": "남 얘기로 '걔 차 있어'. he/she면 have 말고 has."
        },
        {
          "id": "d3_18",
          "tag": "have",
          "ko": "와이파이 돼요?",
          "en": "Do you have wifi?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "wifi 대신 a charger, parking, a menu.",
          "use": "카페·호텔서 '와이파이 돼요?' 시설 되냐 물을 때."
        },
        {
          "id": "d3_19",
          "tag": "have",
          "ko": "나 5분 있어.",
          "en": "I have five minutes.",
          "note": "둘 이상이면 끝에 s. minute에서 minutes.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "five minutes 대신 a minute, an hour.",
          "use": "'나 5분 정도 돼' 잠깐 시간 낼 때. 통화·대화 전."
        },
        {
          "id": "d3_20",
          "tag": "have",
          "ko": "방 있어요?",
          "en": "Do you have a room?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a room 대신 a table(자리), a single(1인실).",
          "use": "호텔 도착해 '빈 방 있어요?' 예약 없이 물을 때."
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
          "purposeMean": "가지고 있다·없다",
          "apply": "a meeting 자리에 a call, a class, an appointment.",
          "use": "스케줄 비냐 물을 때 '나 회의 있어'. have=일정이 잡혀 있다."
        },
        {
          "id": "d4_16",
          "tag": "have",
          "ko": "나 감기 걸렸어.",
          "en": "I have a cold.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a cold 자리에 a fever(열), a cough(기침).",
          "use": "콧물·기침 나서 '나 감기 걸렸어'. have=그 증상이 있다."
        },
        {
          "id": "d4_17",
          "tag": "have",
          "ko": "나 두통 있어.",
          "en": "I have a headache.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a headache 자리에 a stomachache(배), a toothache(이).",
          "use": "머리 지끈할 때 '나 두통 있어'. 약 달라거나 쉬고 싶을 때."
        },
        {
          "id": "d4_01",
          "tag": "have",
          "ko": "나 점심 먹어.",
          "en": "I have lunch.",
          "note": "여기서 have는 먹다. I have lunch는 점심 먹어.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "lunch 자리에 breakfast, dinner, coffee.",
          "use": "여기서 have는 '가지다' 아니고 '먹다'. 점심 먹는다 할 때."
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
          "purposeMean": "무언가를 함",
          "apply": "breakfast 자리에 lunch, dinner.",
          "use": "had는 have의 과거. '아침 먹었어' 하고 지난 일 말할 때."
        },
        {
          "id": "d4_03",
          "tag": "have",
          "ko": "나 매일 커피 마셔.",
          "en": "I have coffee every day.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "coffee 자리에 tea, a beer.",
          "use": "음료엔 have가 '마시다'. 늘 그런다는 습관 말할 때."
        },
        {
          "id": "d4_04",
          "tag": "have",
          "ko": "우리 7시에 저녁 먹어.",
          "en": "We have dinner at seven.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "at seven 자리에 at six, at eight.",
          "use": "저녁을 몇 시에 먹는지 알려줄 때. have=먹다, at seven=7시에."
        },
        {
          "id": "d4_14",
          "tag": "have",
          "ko": "나 좋은 시간 보냈어.",
          "en": "I had a good time.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "a good time 자리에 a great time, fun.",
          "use": "놀고 와서 '재밌었어' 한마디. have a good time=즐겁게 보내다."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "go 자리에 work, wait, leave, eat.",
          "use": "일어서며 '나 가야 해'. have to=해야만 한다. '가져야' 아님.",
          "enSpoken": "I gotta go."
        },
        {
          "id": "d4_08",
          "tag": "have",
          "ko": "나 일해야 해.",
          "en": "I have to work.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "work 자리에 go, study, cook.",
          "use": "약속 미루며 '나 일해야 해'. 어쩔 수 없다는 톤.",
          "enSpoken": "I gotta work."
        },
        {
          "id": "d4_09",
          "tag": "have",
          "ko": "너 가야 해?",
          "en": "Do you have to go?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "go 자리에 leave, work, wait.",
          "use": "'꼭 가야 해?' 아쉬워하며 묻는 톤. 붙잡고 싶을 때."
        },
        {
          "id": "d4_10",
          "tag": "have",
          "ko": "나 지금 가야 해.",
          "en": "I have to go now.",
          "eq": "I need to go now 랑 같은 뜻. have to = need to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "끝에 now / right now / soon.",
          "use": "지금 당장 일어서며 '나 지금 가야 해'. now가 급한 느낌 더함.",
          "enSpoken": "I gotta go now."
        },
        {
          "id": "d4_11",
          "tag": "have",
          "ko": "우리 기다려야 해.",
          "en": "We have to wait.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "wait 자리에 go, hurry, stay.",
          "use": "줄·차례에서 '우리 기다려야 해'. 어쩔 수 없이 기다린다는 톤.",
          "enSpoken": "We gotta wait."
        },
        {
          "id": "d4_12",
          "tag": "have",
          "ko": "나 안 가도 돼.",
          "en": "I don't have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "go 자리에 wait, work, pay.",
          "use": "don't have to=안 가도 돼(해도 되고 안 해도 됨). '가면 안 돼' 아님."
        },
        {
          "id": "d4_18",
          "tag": "have",
          "ko": "너 이거 봐야 해.",
          "en": "You have to see this.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "see this 자리에 try this, taste this.",
          "use": "신기한 거 보여주며 '너 이거 꼭 봐야 해'. 의무 아니라 강추하는 톤.",
          "enSpoken": "You gotta see this."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "sleep 자리에 rest, go, lie down.",
          "use": "졸려서 일어서며 '나 자야 해'. 더 못 버틴다는 톤.",
          "enSpoken": "I gotta sleep."
        },
        {
          "id": "d4_20",
          "tag": "have",
          "ko": "우리 서둘러야 해.",
          "en": "We have to hurry.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "hurry 자리에 go, leave, run.",
          "use": "시간 빠듯할 때 '우리 서둘러야 해'. 같이 움직이자고 재촉.",
          "enSpoken": "We gotta hurry."
        },
        {
          "id": "d4_05",
          "tag": "have",
          "ko": "좋은 시간 보내.",
          "en": "Have a good time.",
          "eq": "Have fun 이랑 같은 뜻. 헤어질 때 바꿔 써도 돼요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "헤어질 때 '재밌게 보내' 빌어주는 인사. 명령 아니라 다정한 덕담."
        },
        {
          "id": "d4_06",
          "tag": "have",
          "ko": "좋은 하루 보내.",
          "en": "Have a good day.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "a good day 자리에 a good trip(여행), a nice weekend.",
          "use": "가게·헤어질 때 '좋은 하루 보내'. '수고하세요'처럼 흔한 인사."
        },
        {
          "id": "d4_15",
          "tag": "have",
          "ko": "재밌게 놀아.",
          "en": "Have fun.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "놀러 가는 사람한테 '재밌게 놀아!' 가볍게 보내주는 한마디."
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
          "purposeMean": "무언가를 함",
          "use": "답을 모를 때 가장 흔한 한마디. 어깨 으쓱하며 말하면 무뚝뚝하지 않고 부드러워."
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
          "purposeMean": "궁금해서 물음",
          "apply": "know 자리에 have, want, like 넣어 봐.",
          "use": "'너 (그거) 알아?' 친구든 점원이든 끝 살짝 올려 가볍게 물어."
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
          "purposeMean": "무언가를 함",
          "apply": "I don't ~ 는 안 ~해. like 자리만 바꿔봐: I don't know, I don't care.",
          "use": "음식·물건이 별로일 때 '나 이거 별로야'. 사람한테 쓰면 차가우니 물건에만."
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
          "purposeMean": "궁금해서 물음",
          "apply": "this 자리에 it, them, this one.",
          "use": "물건 보여주며 '이거 마음에 들어?' 메뉴·기념품 권할 때 다정하게."
        },
        {
          "id": "d5_05",
          "tag": "do",
          "ko": "너 영어 할 줄 알아?",
          "en": "Do you speak English?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "English 자리에 Korean, Spanish.",
          "use": "'영어 하세요?' 영어 통하나 공손히 물을 때. speak은 '말할 줄 안다'는 뜻."
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
          "purposeMean": "무언가를 함",
          "use": "상대 말이 안 들리거나 어려울 때 '무슨 말인지 모르겠어'. 천천히 말해 달라는 신호로 통해."
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
          "purposeMean": "궁금해서 물음",
          "use": "설명 끝에 '알아들었어?' 다그치지 말고 부드럽게 확인할 때."
        },
        {
          "id": "d5_08",
          "tag": "do",
          "ko": "나 신경 안 써.",
          "en": "I don't care.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'난 아무거나 좋아' 가볍게 양보할 때. 쏘아붙이면 '내 알 바 아냐'로 들리니 톤 조심."
        },
        {
          "id": "d5_09",
          "tag": "do",
          "ko": "너 무슨 일 해?",
          "en": "What do you do?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "처음 만난 사람에게 '무슨 일 하세요?' 직업 물을 때. 뒤 do가 '일하다'."
        },
        {
          "id": "d5_10",
          "tag": "do",
          "ko": "이거 어떻게 해?",
          "en": "How do you do it?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "do it 자리에 use it, open it, get there.",
          "use": "'이거 어떻게 하는 거예요?' 기계·앱·요리 앞에서. you는 '보통 어떻게'란 뜻도 돼."
        },
        {
          "id": "d5_11",
          "tag": "do",
          "ko": "나 커피 안 마셔.",
          "en": "I don't drink coffee.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "drink coffee 자리에 eat meat, drink alcohol.",
          "use": "권할 때 '저 커피 안 마셔요'. 지금 한 잔 거절이 아니라 평소 안 마신다는 뜻."
        },
        {
          "id": "d5_12",
          "tag": "do",
          "ko": "너 커피 마셔?",
          "en": "Do you drink coffee?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "'커피 드세요?' 권하거나 취향 물을 때. 끝 올려 다정하게."
        },
        {
          "id": "d5_13",
          "tag": "do",
          "ko": "나 담배 안 피워.",
          "en": "I don't smoke.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "담배 권할 때 '저 담배 안 피워요'. 평소 습관을 담담히 밝히는 말."
        },
        {
          "id": "d5_14",
          "tag": "do",
          "ko": "너 운전해?",
          "en": "Do you drive?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "drive 자리에 cook, swim, work.",
          "use": "차·렌트 얘기서 '운전하세요?' 면허·운전 습관 묻는 가벼운 질문."
        },
        {
          "id": "d5_15",
          "tag": "do",
          "ko": "나 운동 잘 안 해.",
          "en": "I don't exercise much.",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "건강 얘기서 '운동은 잘 안 해요' 솔직하게. much는 '많이는'—'별로'란 뜻."
        },
        {
          "id": "d5_16",
          "tag": "do",
          "ko": "너 날 알아?",
          "en": "Do you know me?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "낯선 사람이 아는 척할 때 '저 아세요?' 경계 살짝 담아. 친한 사이엔 장난으로도."
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
          "purposeMean": "무언가를 함",
          "apply": "do it 자리에 say that, take it, break it.",
          "use": "누명 쓸 때 '나 그거 안 했어' 단호하게. didn't가 '안 했다'."
        },
        {
          "id": "d5_18",
          "tag": "do",
          "ko": "너 그거 했어?",
          "en": "Did you do it?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "'너 그거 했어?' 톤 따라 다정도 캐묻기도. 부탁한 일 됐나 물을 때."
        },
        {
          "id": "d5_19",
          "tag": "do",
          "ko": "걱정 마.",
          "en": "Don't worry.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "worry 자리에 cry, move, touch, look.",
          "use": "불안해하는 사람에게 '걱정 마' 어깨 토닥이듯 따뜻하게."
        },
        {
          "id": "d5_20",
          "tag": "do",
          "ko": "서두르지 마.",
          "en": "Don't rush.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "서두르는 상대에게 '천천히, 급할 거 없어' 재촉 말라고 차분히."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "so I have to + go(가야)/sleep(자야)/wait(기다려야).",
          "use": "배고파서 뭐라도 먹어야겠다 할 때. so는 '그래서'.",
          "enSpoken": "I'm hungry, so I gotta eat."
        },
        {
          "id": "d6_02",
          "tag": "mix",
          "ko": "시간 없어, 가야 해.",
          "en": "I don't have time, so I have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "I don't have + time / money / a pen.",
          "use": "시간 없어서 자리 떠야 할 때. 미안한 듯 짧게.",
          "enSpoken": "I don't have time, so I gotta go."
        },
        {
          "id": "d6_03",
          "tag": "mix",
          "ko": "나 몰라. 너 알아?",
          "en": "I don't know. Do you know?",
          "tense": "평소",
          "compound": true,
          "apply": "I don't know. Do you + have time / like this?",
          "use": "나도 모를 때 상대한테 되묻기. '나도 몰라, 넌?'"
        },
        {
          "id": "d6_04",
          "tag": "mix",
          "ko": "나 피곤해, 자야 해.",
          "en": "I'm tired, so I have to sleep.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "I'm tired, so I have to + go / rest / stop.",
          "use": "피곤해서 먼저 자야겠다 양해 구할 때. 다정하게.",
          "enSpoken": "I'm tired, so I gotta sleep."
        },
        {
          "id": "d6_05",
          "tag": "mix",
          "ko": "나 차 있는데 시간이 없어.",
          "en": "I have a car, but I don't have time.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "I have a car, but I don't have + time / money.",
          "use": "차는 있는데 시간이 안 돼 못 간다고. but은 '그런데'."
        },
        {
          "id": "d6_06",
          "tag": "mix",
          "ko": "너 준비됐어? 가야 해.",
          "en": "Are you ready? We have to go.",
          "compound": true,
          "apply": "Are you ready? We have to + go / hurry / leave.",
          "use": "같이 나가야 할 때 일행 재촉. '준비됐어? 가자.'",
          "enSpoken": "Are you ready? We gotta go."
        },
        {
          "id": "d6_07",
          "tag": "mix",
          "ko": "나 질문 있어.",
          "en": "I have a question.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "I have a + question / problem / reservation.",
          "use": "뭔가 물어보기 전 운 떼기. 직원한테 공손하게."
        },
        {
          "id": "d6_08",
          "tag": "mix",
          "ko": "별로야. 다른 거 있어?",
          "en": "It's not good. Do you have another one?",
          "scene": "물건이 마음에 안 들 때.",
          "compound": true,
          "apply": "Do you have + another one / a bigger one / wifi?",
          "use": "가게서 물건이 맘에 안 들 때. '다른 건 없어요?'"
        },
        {
          "id": "d6_09",
          "tag": "mix",
          "ko": "나 안 바빠, 시간 있어.",
          "en": "I'm not busy. I have time.",
          "compound": true,
          "apply": "I'm not busy. I have + time / a minute.",
          "use": "한가하다고 알릴 때. 도와줄 수 있다는 신호."
        },
        {
          "id": "d6_10",
          "tag": "mix",
          "ko": "너 영어 해? 나 한국어 해.",
          "en": "Do you speak English? I speak Korean.",
          "tense": "평소",
          "compound": true,
          "apply": "Do you speak + English? I speak + Korean / Spanish.",
          "use": "말 안 통할 때 더듬더듬. '영어 해요? 난 한국어 해요.'"
        },
        {
          "id": "d6_11",
          "tag": "mix",
          "ko": "나 이해 안 돼. 너 이해돼?",
          "en": "I don't understand. Do you understand?",
          "tense": "평소",
          "compound": true,
          "apply": "I don't + understand / know. Do you understand?",
          "use": "내가 못 알아들었을 때. '난 모르겠는데, 넌 알아?'"
        },
        {
          "id": "d6_12",
          "tag": "mix",
          "ko": "우리 늦었어, 서둘러야 해.",
          "en": "We're late, so we have to hurry.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "We're late, so we have to + hurry / go / run.",
          "use": "늦어서 서둘러야 할 때 일행 재촉. so는 '그러니까'.",
          "enSpoken": "We're late, so we gotta hurry."
        },
        {
          "id": "d6_13",
          "tag": "mix",
          "ko": "나 괜찮아, 걱정 마.",
          "en": "I'm okay. Don't worry.",
          "compound": true,
          "apply": "Don't + worry / rush / wait.",
          "use": "상대 안심시킬 때. '나 괜찮으니 걱정 마.' 다독이듯."
        },
        {
          "id": "d6_14",
          "tag": "mix",
          "ko": "너 시간 있어? 나 질문 있어.",
          "en": "Do you have time? I have a question.",
          "compound": true,
          "apply": "Do you have time? I have + a question / a favor.",
          "use": "시간 있는지 확인하고 부탁 꺼내기. '시간 돼? 물어볼 게 있어.'"
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
          "purposeMean": "무언가를 함",
          "apply": "going 뒤만 바꿔: to work(일하러) / to school(학교) / there(거기).",
          "use": "집으로 출발한다고 알릴 때. '가는 중'이란 진행의 느낌."
        },
        {
          "id": "d7_02",
          "tag": "go",
          "ko": "나 일하러 가.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "to work 자리에: home(집), to school(학교), to the gym(헬스장).",
          "use": "출근길에, 또는 '나 일하러 가' 하고 자리 뜰 때. 가는 중이라는 뜻."
        },
        {
          "id": "d7_03",
          "tag": "go",
          "ko": "너 어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Where are you + going / from(어디 출신) / staying(어디 묵어)?",
          "use": "나가는 사람한테 '어디 가?' 가볍게. 캐묻기 아닌 인사 톤."
        },
        {
          "id": "d7_04",
          "tag": "go",
          "ko": "우리 지금 가.",
          "en": "We're going now.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "일행에게 '우리 지금 출발해' 하고 알릴 때. now=바로 지금."
        },
        {
          "id": "d7_05",
          "tag": "go",
          "ko": "나 안 가.",
          "en": "I'm not going.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "권유에 '나 안 가' 가볍게 뺄 때. 거절보다 담담하게."
        },
        {
          "id": "d7_06",
          "tag": "go",
          "ko": "너 가?",
          "en": "Are you going?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "같이 갈지 떠보며 '너 가?' 물을 때. 짧고 부담 없게."
        },
        {
          "id": "d7_07",
          "tag": "go",
          "ko": "나 학교 가.",
          "en": "I'm going to school.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "to school 자리에: to work(일하러), to the store(가게), to the bank(은행).",
          "use": "학교 가는 길이라 알릴 때. 어른은 학원·수업 갈 때도 써."
        },
        {
          "id": "d7_08",
          "tag": "go",
          "ko": "그 사람 집에 가.",
          "en": "He's going home.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "그 사람이 집에 가는 중이라 남에게 전할 때. He's=그는 ~하는 중."
        },
        {
          "id": "d7_09",
          "tag": "go",
          "ko": "우리 같이 가.",
          "en": "We're going together.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'우리 같이 가' 하고 동행한다 할 때. 따로 안 가고 함께."
        },
        {
          "id": "d7_10",
          "tag": "go",
          "ko": "나 거기 가.",
          "en": "I'm going there.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'나 거기 가는 중'이라 행선지 가리킬 때. there=아까 말한 그곳."
        },
        {
          "id": "d7_11",
          "tag": "go",
          "ko": "나 이제 가.",
          "en": "I'm going now.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "자리 뜨며 '나 이제 가' 인사처럼. 일어설 때 딱."
        },
        {
          "id": "d7_12",
          "tag": "go",
          "ko": "나 화장실 가.",
          "en": "I'm going to the bathroom.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "to the bathroom 자리에: to the store(가게), to the front desk(프런트).",
          "use": "잠깐 자리 비울 때 '화장실 좀' 하고 양해 구하듯. 식당·모임서."
        },
        {
          "id": "d7_13",
          "tag": "go",
          "ko": "너 시내 가?",
          "en": "Are you going downtown?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "downtown 자리에: to the beach(해변), to the airport(공항), home(집).",
          "use": "같이 탈 사람에게 '시내 가?' 행선지 물을 때. 합승 떠볼 때."
        },
        {
          "id": "d7_15",
          "tag": "go",
          "ko": "나 안 가, 피곤해.",
          "en": "I'm not going. I'm tired.",
          "tense": "지금",
          "compound": true,
          "use": "권유 거절하며 '나 안 가, 피곤해' 이유까지. 솔직한 톤."
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
          "purposeMean": "궁금해서 물음",
          "apply": "downtown 자리에: to the airport(공항), to the station(역), to the beach(해변).",
          "use": "버스 타기 전 '이거 시내 가요?' 확인. 여행 필수 한마디."
        },
        {
          "id": "d7_17",
          "tag": "go",
          "ko": "이 길 해변으로 가요?",
          "en": "Does this road go to the beach?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "to the beach 자리에: to the station(역), downtown(시내), to the hotel(호텔).",
          "use": "갈림길에서 '이 길로 가면 해변 나와요?' 공손히 확인."
        },
        {
          "id": "d7_18",
          "tag": "go",
          "ko": "너 지금 가?",
          "en": "Are you going now?",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "막 일어서는 사람에게 '지금 가?' 확인할 때. 가볍게."
        },
        {
          "id": "d7_19",
          "tag": "go",
          "ko": "나 곧 가.",
          "en": "I'm going soon.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'나 곧 가' 하고 미리 알릴 때. 당장 말고 잠시 뒤 출발."
        },
        {
          "id": "d7_20",
          "tag": "go",
          "ko": "그 사람들 해변 가.",
          "en": "They're going to the beach.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "to the beach 자리에: downtown(시내), home(집), to the market(시장).",
          "use": "다른 사람들이 해변 가는 중이라 전할 때. They're=그들은 ~하는 중."
        },
        {
          "id": "d7_14",
          "tag": "go",
          "ko": "우리 늦었어, 가야 해.",
          "en": "We're late. We have to go.",
          "compound": true,
          "use": "늦어서 '우리 가야 해' 자리 정리할 때. go=떠나다, have to=꼭.",
          "enSpoken": "We're late. We gotta go."
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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "be okay 자리에 be fine / be all right.",
          "use": "걱정하는 사람 다독일 때. '다 잘될 거야' 토닥토닥.",
          "enSpoken": "We're gonna be okay."
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
          "purposeMean": "무언가를 함",
          "apply": "eat 자리에 sleep, rest, wait 넣어 계획 말하기.",
          "use": "지금 말고 곧 먹겠다 할 때. '이따 먹을 거야' 느낌.",
          "enSpoken": "I'm gonna eat."
        },
        {
          "id": "d8_02",
          "tag": "go",
          "ko": "너 뭐 할 거야?",
          "en": "What are you going to do?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "do 자리에 eat, say, buy 넣어 'What are you going to ~?'",
          "use": "상대 계획 물을 때. '이제 뭐 할 거야?' 가볍게.",
          "enSpoken": "What are you gonna do?"
        },
        {
          "id": "d8_03",
          "tag": "go",
          "ko": "나 잘 거야.",
          "en": "I'm going to sleep.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "이제 잘 거라 알릴 때. '나 먼저 잘게' 느낌.",
          "enSpoken": "I'm gonna sleep."
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
          "purposeMean": "무언가를 함",
          "apply": "late 자리에 early 넣으면 '일찍 올 거야'.",
          "use": "늦을 게 뻔히 보일 때. '이러다 늦겠다' 조바심.",
          "enSpoken": "We're gonna be late."
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
          "purposeMean": "무언가를 함",
          "apply": "going to 뒤 동사만 바꾸면 다 미래. ask 자리에 eat, call, try.",
          "use": "직접 물어보겠다 마음먹을 때. '내가 걔한테 물어볼게'.",
          "enSpoken": "I'm gonna ask him."
        },
        {
          "id": "d8_06",
          "tag": "go",
          "ko": "너 그거 살 거야?",
          "en": "Are you going to buy it?",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "buy 자리에 take, try, get 넣어 'Are you going to ~ it?'",
          "use": "살 마음 있나 떠볼 때. 가게서 같이 온 사람에게 '그거 살 거야?'",
          "enSpoken": "Are you gonna buy it?"
        },
        {
          "id": "d8_07",
          "tag": "go",
          "ko": "나 안 갈 거야.",
          "en": "I'm not going to go.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "go 자리에 eat, wait, ask 넣어 'I'm not going to ~.'",
          "use": "안 갈 거라 마음 정했을 때. '나 안 갈래' 단호하게.",
          "enSpoken": "I'm not gonna go."
        },
        {
          "id": "d8_08",
          "tag": "go",
          "ko": "비 올 거야.",
          "en": "It's going to rain.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "rain 자리에 snow 넣으면 '눈 오겠다'.",
          "use": "하늘 보고 비 올 것 같을 때. 예감으로 '비 오겠다'.",
          "enSpoken": "It's gonna rain."
        },
        {
          "id": "d8_09",
          "tag": "go",
          "ko": "나 기다릴 거야.",
          "en": "I'm going to wait.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "wait 자리에 stay, rest, try.",
          "use": "재촉 말고 그냥 기다리겠다 할 때. '난 기다릴게'.",
          "enSpoken": "I'm gonna wait."
        },
        {
          "id": "d8_10",
          "tag": "go",
          "ko": "우리 다이빙할 거야.",
          "en": "We're going to dive.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "dive 자리에 swim, snorkel, hike.",
          "use": "다이빙 일정 잡고 들떠서. '우리 다이빙할 거야!'",
          "enSpoken": "We're gonna dive."
        },
        {
          "id": "d8_11",
          "tag": "go",
          "ko": "너 어디 갈 거야?",
          "en": "Where are you going to go?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "go 자리에 eat, stay 넣어 'Where are you going to ~?'",
          "use": "어디 갈 계획인지 물을 때. '너 어디 갈 거야?' 동선 챙길 때.",
          "enSpoken": "Where are you gonna go?"
        },
        {
          "id": "d8_12",
          "tag": "go",
          "ko": "나 그거 해볼 거야.",
          "en": "I'm going to try it.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "try it 자리에 try this / try that.",
          "use": "처음 보는 거 한번 해보겠다 할 때. '나 이거 도전해볼래'.",
          "enSpoken": "I'm gonna try it."
        },
        {
          "id": "d8_13",
          "tag": "go",
          "ko": "그 사람 올 거야.",
          "en": "He's going to come.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "come 자리에 call, help, stay.",
          "use": "그 사람 오기로 돼 있을 때. '걔 올 거야' 안심시키듯.",
          "enSpoken": "He's gonna come."
        },
        {
          "id": "d8_14",
          "tag": "go",
          "ko": "나 쉴 거야.",
          "en": "I'm going to rest.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "rest 자리에 sleep, stay, wait.",
          "use": "이제 좀 쉬겠다 할 때. rest는 '쉬다'. '나 좀 쉴게'.",
          "enSpoken": "I'm gonna rest."
        },
        {
          "id": "d8_15",
          "tag": "go",
          "ko": "너 도와줄 거야?",
          "en": "Are you going to help?",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "help 자리에 come, stay, wait 넣어 'Are you going to ~?'",
          "use": "도와줄 마음 있나 물을 때. '너 도와줄 거야?' 살짝 기대하며.",
          "enSpoken": "Are you gonna help?"
        },
        {
          "id": "d8_16",
          "tag": "go",
          "ko": "나 집에 있을 거야.",
          "en": "I'm going to stay home.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "stay home 자리에 stay here / stay inside.",
          "use": "안 나가고 집에 있겠다 할 때. stay home은 '집에 머물다'.",
          "enSpoken": "I'm gonna stay home."
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
          "purposeMean": "무언가를 함",
          "apply": "call you 자리에 text you / ask you.",
          "use": "지금 말고 이따 전화하겠다 할 때. '이따 전화할게' 약속하듯.",
          "enSpoken": "I'm gonna call you later."
        },
        {
          "id": "d8_19",
          "tag": "go",
          "ko": "너 언제 갈 거야?",
          "en": "When are you going to go?",
          "tense": "미래",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "go 자리에 leave, come, start 넣어 'When are you going to ~?'",
          "use": "언제 떠날 건지 물을 때. '너 언제 갈 거야?' 일정 잡을 때.",
          "enSpoken": "When are you gonna go?"
        },
        {
          "id": "d8_20",
          "tag": "go",
          "ko": "나 곧 끝낼 거야.",
          "en": "I'm going to finish soon.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "finish 자리에 leave, start, eat.",
          "use": "거의 다 했고 곧 끝낸다 할 때. '나 금방 끝낼게' 안심시키듯.",
          "enSpoken": "I'm gonna finish soon."
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
          "purposeMean": "무언가를 함",
          "apply": "up 대신 down(내려가) / out(나가) / in(들어가) / back(돌아가).",
          "use": "엘리베이터·계단·언덕에서 '우리 올라가는 중'. 방향이 위."
        },
        {
          "id": "d9_12",
          "tag": "go",
          "ko": "나 밖에 나가.",
          "en": "I'm going out.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "out 대신 in(들어가) / up(올라가) / down(내려가).",
          "use": "'나 나가' — 방·건물 밖으로. 놀러 외출한다는 뜻도 돼."
        },
        {
          "id": "d9_01",
          "tag": "go",
          "ko": "올라가.",
          "en": "Go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "up 대신 down / out / in / back / straight / left / right.",
          "use": "위층·위로 '올라가' 짧게 가리킬 때. 손짓하며 길 알려주듯."
        },
        {
          "id": "d9_02",
          "tag": "go",
          "ko": "내려가.",
          "en": "Go down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "down 대신 up / out / in / back.",
          "use": "아래층·언덕 아래로 '내려가'. 손으로 가리키며, 다정하게도 단호하게도."
        },
        {
          "id": "d9_03",
          "tag": "go",
          "ko": "나가.",
          "en": "Go out.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "out 대신 in(들어가) / up / down / away(저리 가).",
          "use": "'나가' — 방에서 나가라는 안내일 수도, 화나서 '나가!'일 수도."
        },
        {
          "id": "d9_04",
          "tag": "go",
          "ko": "들어가.",
          "en": "Go in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "in 대신 out / up / down / back.",
          "use": "문·건물 안으로 '들어가' 권할 때. '먼저 들어가' 양보하듯 다정하게."
        },
        {
          "id": "d9_05",
          "tag": "go",
          "ko": "돌아가.",
          "en": "Go back.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "뒤에 붙여: go back in(다시 들어가) / go back home(집에 가).",
          "use": "왔던 길로 '돌아가'. 길 잘못 들었을 때, 또는 제자리로 가라고."
        },
        {
          "id": "d9_06",
          "tag": "go",
          "ko": "계속 가.",
          "en": "Keep going.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "going 대신 walking(계속 걸어) / trying(계속 해봐) / talking(계속 말해).",
          "use": "멈추지 말고 '계속 가'. 길 안내로도, '계속해' 응원으로도 써."
        },
        {
          "id": "d9_07",
          "tag": "go",
          "ko": "저리 가.",
          "en": "Go away.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "'저리 가' — 귀찮게 굴 때 단호하게. 호객·잡상인 떼어낼 때 딱."
        },
        {
          "id": "d9_08",
          "tag": "go",
          "ko": "천천히 가.",
          "en": "Go slow.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "slow 대신 straight(직진해) / left(왼쪽으로) / right(오른쪽으로).",
          "use": "'천천히 가' — 운전·다이빙에서 속도 줄이라고. 위험하니 조심해서."
        },
        {
          "id": "d9_09",
          "tag": "go",
          "ko": "먼저 가.",
          "en": "Go ahead.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "'먼저 가/하세요' 양보. 문 앞·줄에서, 또 말할 때 '말씀하세요'."
        },
        {
          "id": "d9_10",
          "tag": "go",
          "ko": "직진해.",
          "en": "Go straight.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "straight 대신 left(왼쪽) / right(오른쪽) / back(돌아가).",
          "use": "'직진해' 길 안내. 택시·행인에게 방향 알려줄 때. 손으로 앞 가리키며."
        },
        {
          "id": "d9_13",
          "tag": "go",
          "ko": "다시 들어가.",
          "en": "Go back in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "back in 대신 back out / back up / back home.",
          "use": "나갔다가 '다시 들어가'. 물에서 나왔다 또 들어가라거나, 방으로 되돌아가라고."
        },
        {
          "id": "d9_14",
          "tag": "go",
          "ko": "더 깊이 가지 마.",
          "en": "Don't go deeper.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "deeper 대신 too far(너무 멀리) / there(거기) / in(안으로).",
          "use": "'더 깊이 가지 마' — 바다·동굴서 위험 경고. 다이빙·물놀이 안전 한마디."
        },
        {
          "id": "d9_15",
          "tag": "go",
          "ko": "가자.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "go 대신 eat(먹자) / wait(기다리자) / try(해보자) / see(보자).",
          "use": "'가자' — 같이 출발하자고 가볍게 재촉. 일행 챙겨 나설 때 제일 많이 써."
        },
        {
          "id": "d9_16",
          "tag": "go",
          "ko": "너 먼저 가.",
          "en": "You go first.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "go 대신 wait(너 먼저 기다려) / choose(너 먼저 골라).",
          "use": "'너 먼저 가' 양보. 좁은 길·문 앞에서 상대 먼저 보낼 때 다정하게."
        },
        {
          "id": "d9_17",
          "tag": "go",
          "ko": "위로 천천히 올라가.",
          "en": "Go up slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "up 대신 down(내려가) / in(들어가) / back(돌아가) (+ slowly).",
          "use": "'천천히 올라가' — 다이빙 상승이나 가파른 계단서 조심해서. 안전 강조."
        },
        {
          "id": "d9_18",
          "tag": "go",
          "ko": "왼쪽으로 가.",
          "en": "Go left.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "left 대신 right / straight / back.",
          "use": "'왼쪽으로 가' 길 안내. 택시 기사·일행에게 방향 짚어줄 때."
        },
        {
          "id": "d9_19",
          "tag": "go",
          "ko": "오른쪽으로 가.",
          "en": "Go right.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "right 대신 left / straight / back.",
          "use": "'오른쪽으로 가' 길 안내. 운전·도보 방향 알려줄 때. 손으로 가리키며."
        },
        {
          "id": "d9_20",
          "tag": "go",
          "ko": "끝까지 해.",
          "en": "Go all the way.",
          "note": "go all the way는 중간에 멈추지 말고 끝까지. 일·거리 둘 다 써요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "'끝까지 가/해' — 망설이지 말고 다 가라고. 길 끝까지, 또는 '끝장 봐' 격려."
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
          "purposeMean": "무언가를 함",
          "use": "상대 말 '알아들었어'. got=이해했다. 시킨 일 '맡았어' 뜻도. \"이거 해줘\"—\"알았어.\""
        },
        {
          "id": "d10_02",
          "tag": "get",
          "ko": "나 커피 사 올 거야.",
          "en": "I'm going to get a coffee.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "get 대신 grab도 됨: I'm going to grab a coffee.",
          "use": "잠깐 나가서 '사 올게'. get=사다. '가져와' 명령 아님, 가볍게.",
          "enSpoken": "I'm gonna get a coffee."
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
          "purposeMean": "궁금해서 물음",
          "apply": "it 대신 this(이거) / those shoes(저 신발).",
          "use": "남 물건 보고 '그거 어디서 났어?'. 부럽거나 궁금할 때."
        },
        {
          "id": "d10_05",
          "tag": "get",
          "ko": "나 택시 잡을 거야.",
          "en": "I'm going to get a taxi.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "taxi 대신 a cab, an Uber, a ride.",
          "use": "길에서 '택시 잡을게'. get a taxi=택시 잡다. 손 흔드는 그림.",
          "enSpoken": "I'm gonna get a taxi."
        },
        {
          "id": "d10_06",
          "tag": "get",
          "ko": "나 표 구했어.",
          "en": "I got a ticket.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "표 '구했어' 하고 안도. get=손에 넣다."
        },
        {
          "id": "d10_08",
          "tag": "get",
          "ko": "나 새 폰 샀어.",
          "en": "I got a new phone.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "new phone 대신 a new bag, a new laptop.",
          "use": "새로 '하나 장만했어'. get=사다. 자랑 아니고 담담하게."
        },
        {
          "id": "d10_09",
          "tag": "get",
          "ko": "너 선물 받았어?",
          "en": "Did you get a gift?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "'선물 받았어?' 챙겨 묻는 말. get=받다."
        },
        {
          "id": "d10_10",
          "tag": "get",
          "ko": "나 네 문자 받았어.",
          "en": "I got your text.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "text 대신 message, email, call.",
          "use": "'네 문자 잘 받았어' 확인. get=받다. 답장 대신 한마디."
        },
        {
          "id": "d10_12",
          "tag": "get",
          "ko": "나 그거 못 샀어.",
          "en": "I didn't get it.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'못 받았어/못 샀어' 아쉽게. didn't get=손에 못 넣음."
        },
        {
          "id": "d10_14",
          "tag": "get",
          "ko": "나 일자리 구했어.",
          "en": "I got a job.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'취직했어' 좋은 소식. got a job=일자리 얻다."
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
          "purposeMean": "궁금해서 물음",
          "use": "'그거 받았어?' 도착 확인. 문자·택배·메일 다."
        },
        {
          "id": "d10_17",
          "tag": "get",
          "ko": "나 좋은 자리 잡았어.",
          "en": "I got a good seat.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "식당·극장서 '좋은 자리 맡았어'. get=차지하다. seat는 앉는 자리."
        },
        {
          "id": "d10_18",
          "tag": "get",
          "ko": "나 차 빌릴 거야.",
          "en": "I'm going to rent a car.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "a car 대신 a bike, a scooter.",
          "use": "여행지서 '차 빌릴게'. 여기선 get 대신 rent로 빌리다(사는 거 아님).",
          "enSpoken": "I'm gonna rent a car."
        },
        {
          "id": "d10_20",
          "tag": "get",
          "ko": "나 방금 알았어.",
          "en": "I just got it.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'방금 이해됐어'. just got it=이제야 알아들음. \"아 그거?\"—\"방금 알았어.\""
        },
        {
          "id": "d10_03",
          "tag": "get",
          "ko": "커피 하나 주세요.",
          "en": "Can I get a coffee?",
          "note": "Can I get...?은 ~ 주세요. 가게에서 쓰는 말.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "a coffee 대신 a beer, the menu, two of these.",
          "use": "카페서 '하나 주세요'. Can I get~=정중한 주문 공식."
        },
        {
          "id": "d10_07",
          "tag": "get",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "some water 대신 some napkins, the check.",
          "use": "식당서 '물 좀 주세요'. Can I get~ 단골 주문 표현."
        },
        {
          "id": "d10_13",
          "tag": "get",
          "ko": "영수증 좀 주세요.",
          "en": "Can I get the receipt?",
          "note": "the receipt — 방금 그 영수증이라 the. 처음이면 a.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "use": "계산 후 '영수증 좀요'. Can I get~로 부드럽게 요청."
        },
        {
          "id": "d10_16",
          "tag": "get",
          "ko": "메뉴판 좀 주세요.",
          "en": "Can I get a menu?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "use": "자리 앉아 '메뉴판 주세요'. Can I get~ 주문 공식."
        },
        {
          "id": "d10_19",
          "tag": "get",
          "ko": "뭐 갖다 드릴까요?",
          "en": "What can I get you?",
          "scene": "식당 직원이 손님에게.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "점원이 '뭐 드릴까요?' 손님한테. 내가 묻는 말 아님—듣는 말."
        },
        {
          "id": "d10_11",
          "tag": "get",
          "ko": "도움 좀 받아 봐.",
          "en": "Get some help.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "some help 대신 some rest, some sleep.",
          "use": "힘든 사람에게 '도움 좀 받아 봐' 권유. get help=도움받다."
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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "used to it 자리에 the weather, the food, driving here.",
          "use": "안 맞던 게 점점 몸에 배는 중. 처음엔 어색해도 이젠 익으니 안심."
        },
        {
          "id": "d11_16",
          "tag": "get",
          "ko": "나 슬슬 졸려.",
          "en": "I'm getting sleepy.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "getting + tired / hungry / cold 처럼 '슬슬 ~해져'.",
          "use": "막 졸음이 밀려올 때. 자고 싶다기보다 눈이 슬슬 감기는 느낌."
        },
        {
          "id": "d11_18",
          "tag": "get",
          "ko": "점점 쉬워지고 있어.",
          "en": "It's getting easier.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "easier 자리에 harder, better, worse.",
          "use": "갈수록 할 만해질 때. 익숙해져 수월해지니 안도하며."
        },
        {
          "id": "d11_19",
          "tag": "get",
          "ko": "나 슬슬 짜증나.",
          "en": "I'm getting annoyed.",
          "tense": "지금",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "참다가 슬슬 짜증이 올라올 때. 아직 폭발 전, '나 점점 거슬려'."
        },
        {
          "id": "d11_20",
          "tag": "get",
          "ko": "곧 어두워질 거야.",
          "en": "It's going to get dark soon.",
          "tense": "미래",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "dark 자리에 cold, late, hot.",
          "use": "해 지기 전이라 마음 급할 때. '곧 깜깜해져, 서두르자' 느낌.",
          "enSpoken": "It's gonna get dark soon."
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
          "purposeMean": "무언가를 함",
          "use": "피곤이 쌓여 지쳤을 때. 여기 get은 '받다' 말고 '~해지다'. 지난 일."
        },
        {
          "id": "d11_02",
          "tag": "get",
          "ko": "나 집에 도착했어.",
          "en": "I got home.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "home 자리에 there, to work, to the hotel.",
          "use": "집에 막 도착했을 때. get을 '도착하다'로. '나 방금 집 왔어'."
        },
        {
          "id": "d11_03",
          "tag": "get",
          "ko": "너 언제 도착해?",
          "en": "When do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "상대 도착 시각 물을 때. 마중 나가려 '몇 시쯤 도착해?'."
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
          "purposeMean": "무언가를 함",
          "apply": "cold 자리에 hot, dark, late, better.",
          "use": "날이 슬슬 추워질 때. 지금 막 변하는 중이라 -ing. '점점 추워지네'."
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
          "purposeMean": "무언가를 함",
          "apply": "I'm getting ~ 는 슬슬/점점 ~. hungry 자리에 tired, cold, better.",
          "use": "슬슬 배가 고파올 때. '밥 먹자' 운 띄우기 좋게."
        },
        {
          "id": "d11_06",
          "tag": "get",
          "ko": "우리 거의 다 와 가.",
          "en": "We're getting there.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "목적지가 코앞일 때. 일·과제가 '거의 다 됐어'에도 써."
        },
        {
          "id": "d11_07",
          "tag": "get",
          "ko": "늦어지고 있어.",
          "en": "It's getting late.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "슬슬 일어나야 할 때. '늦었네, 가자' 신호."
        },
        {
          "id": "d11_08",
          "tag": "get",
          "ko": "어두워지고 있어.",
          "en": "It's getting dark.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "해가 져 어둑어둑해질 때. 막 변하는 중이라 -ing."
        },
        {
          "id": "d11_09",
          "tag": "get",
          "ko": "나 좋아지고 있어.",
          "en": "I'm getting better.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "better 자리에 worse, easier, harder.",
          "use": "아팠다 차차 나아질 때, 실력이 늘 때도. '점점 좋아지고 있어'."
        },
        {
          "id": "d11_10",
          "tag": "get",
          "ko": "너 거기 어떻게 가?",
          "en": "How do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "there 자리에 to the station, downtown.",
          "use": "길 물을 때. 교통편·길 통째로 '거기 어떻게 가요?'."
        },
        {
          "id": "d11_11",
          "tag": "get",
          "ko": "나 직장에 도착했어.",
          "en": "I got to work.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "회사에 도착했다고. get to ~ = '~에 도착하다'. 지난 일."
        },
        {
          "id": "d11_12",
          "tag": "get",
          "ko": "더워지고 있어.",
          "en": "It's getting hot.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "hot 자리에 cold, dark, late.",
          "use": "날이 슬슬 더워질 때. '점점 덥네' 부채질하며."
        },
        {
          "id": "d11_13",
          "tag": "get",
          "ko": "나 슬슬 긴장돼.",
          "en": "I'm getting nervous.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "발표·면접 앞두고 슬슬 떨릴 때. '나 점점 긴장돼'."
        },
        {
          "id": "d11_15",
          "tag": "get",
          "ko": "나 거기 못 갔어.",
          "en": "I didn't get there.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "결국 거기 못 갔을 때. get there = 도착. '못 갔어' 아쉽게."
        },
        {
          "id": "d11_17",
          "tag": "get",
          "ko": "너 잘 도착했어?",
          "en": "Did you get there okay?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "헤어진 상대 무사 도착 챙길 때 다정하게. '집에 잘 들어갔어?'"
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "설명 듣고 '아, 알겠다' 할 때. get은 여기서 '이해하다'. 받는다는 뜻 아님."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "설명 들어도 이해가 안 갈 때 '무슨 말인지 모르겠어'. 살짝 답답하게."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "내 설명 끝에 '알아들었어?' 하고 확인. understand보다 가볍고 편한 사이에."
        },
        {
          "id": "d12_18",
          "tag": "get",
          "ko": "나 이제 이해돼.",
          "en": "Now I get it.",
          "scene": "설명을 다 듣고 나서.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "한참 헤매다 '아 이제 알겠다' 풀릴 때. Now 붙여 '드디어' 느낌."
        },
        {
          "id": "d12_19",
          "tag": "get",
          "ko": "내 말 이해돼?",
          "en": "Do you get what I mean?",
          "tense": "평소",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "돌려 설명한 뒤 '내 말 뜻 알지?' 하고 눈치 볼 때."
        },
        {
          "id": "d12_05",
          "tag": "get",
          "ko": "나 일찍 일어나.",
          "en": "I get up early.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "early 자리에 late, at six, at seven.",
          "use": "내 습관 말할 때 '난 일찍 일어나'. get up은 침대에서 몸 일으키는 것."
        },
        {
          "id": "d12_04",
          "tag": "get",
          "ko": "일어나.",
          "en": "Get up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "누워있는 사람한테 '일어나'. 깨우거나 재촉할 때. 살짝 단호."
        },
        {
          "id": "d12_06",
          "tag": "get",
          "ko": "타.",
          "en": "Get in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "차문 열고 '얼른 타'. get in은 택시·승용차처럼 몸 숙여 타는 것."
        },
        {
          "id": "d12_07",
          "tag": "get",
          "ko": "나와.",
          "en": "Get out.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "방·집에서 '나가'. 화나서 쫓을 때 강하게. 톤 따라 세기 다름."
        },
        {
          "id": "d12_08",
          "tag": "get",
          "ko": "차에 타.",
          "en": "Get in the car.",
          "note": "get + 방향. in 자리에 out(내려), on/off(타다/내리다).",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "get + 방향. in 자리에 out(내려), on/off(타다/내리다).",
          "use": "택시·친구차 앞에서 '타'. 승용차는 in, 버스·기차는 on."
        },
        {
          "id": "d12_09",
          "tag": "get",
          "ko": "차에서 내려.",
          "en": "Get out of the car.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "승용차에서 '내려'. 버스 같은 큰 차는 off, 승용차는 out of."
        },
        {
          "id": "d12_10",
          "tag": "get",
          "ko": "버스에 타.",
          "en": "Get on the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "the bus 자리에 the train, the metro, the plane.",
          "use": "버스·기차에 '타'. 바닥 넓고 큰 탈것은 on. 멕시코 버스 탈 때 딱."
        },
        {
          "id": "d12_11",
          "tag": "get",
          "ko": "버스에서 내려.",
          "en": "Get off the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "the bus 자리에 the train, the metro.",
          "use": "내릴 정류장에서 '내려'. 버스·기차 같은 큰 탈것은 off로 통일."
        },
        {
          "id": "d12_12",
          "tag": "get",
          "ko": "물에서 나와.",
          "en": "Get out of the water.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "물놀이하는 사람한테 '물에서 나와'. 위험하거나 그만할 때."
        },
        {
          "id": "d12_13",
          "tag": "get",
          "ko": "비켜.",
          "en": "Get out of the way.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "길 막은 사람한테 '비켜'. 다급할 땐 끝에 느낌표 붙여 세게."
        },
        {
          "id": "d12_14",
          "tag": "get",
          "ko": "좀 쉬어.",
          "en": "Get some rest.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "some rest 자리에 some sleep, some air(바람 좀).",
          "use": "지친 사람한테 '좀 쉬어' 다정하게. get은 여기서 '좀 챙겨'."
        },
        {
          "id": "d12_15",
          "tag": "get",
          "ko": "빨리 나아.",
          "en": "Get well soon.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "아픈 사람한테 '빨리 나아'. 카드·문자 끝맺음으로 자주 쓰는 따뜻한 인사."
        },
        {
          "id": "d12_16",
          "tag": "get",
          "ko": "준비해.",
          "en": "Get ready.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "나갈 채비 시킬 때 '준비해'. 옷 입고 챙기라는 재촉. 아이한테도."
        },
        {
          "id": "d12_17",
          "tag": "get",
          "ko": "가까이 붙어.",
          "en": "Get close.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "사진 찍을 때 '바짝 붙어' 또는 '가까이 와'."
        },
        {
          "id": "d12_20",
          "tag": "get",
          "ko": "어서 타.",
          "en": "Get in, quick.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "급할 때 '빨리 타!'. 비 오거나 쫓길 때 다급하게."
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
          "compound": true,
          "apply": "I'm going + home / to work / to bed.",
          "use": "집에 가는 길에 '나 갈게, 피곤해서'. 핑계 겸 작별 인사."
        },
        {
          "id": "d13_02",
          "tag": "mix",
          "ko": "나 커피 사러 가.",
          "en": "I'm going to get a coffee.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "get a + coffee / water / snack 으로 바꿔.",
          "use": "커피 사러 잠깐 나갈 때. go는 '가다', get은 '사 오다'.",
          "enSpoken": "I'm gonna get a coffee."
        },
        {
          "id": "d13_03",
          "tag": "mix",
          "ko": "우리 늦었어, 택시 잡자.",
          "en": "We're late. Let's get a taxi.",
          "compound": true,
          "apply": "Let's get a + taxi / room / table.",
          "use": "급할 때 '택시 잡자'. get은 '잡다·타다', Let's는 같이 하자."
        },
        {
          "id": "d13_04",
          "tag": "mix",
          "ko": "내려가, 천천히.",
          "en": "Go down, slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Go + down / up / back + slowly.",
          "use": "계단·언덕 내려갈 때 '천천히 내려가'. 다칠까 챙기는 톤."
        },
        {
          "id": "d13_05",
          "tag": "mix",
          "ko": "너 거기 어떻게 가?",
          "en": "How do you get there?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "How do I get to + the station / downtown?",
          "use": "길 물을 때 '거기 어떻게 가?'. get there는 '거기 가다·닿다'."
        },
        {
          "id": "d13_06",
          "tag": "mix",
          "ko": "차에 타, 가자.",
          "en": "Get in. Let's go.",
          "compound": true,
          "apply": "Get in 뒤에 the car / the taxi 붙여도 돼.",
          "use": "차에 타라고 '타, 가자'. get in은 '(차에) 타다'. 살짝 재촉."
        },
        {
          "id": "d13_07",
          "tag": "mix",
          "ko": "나 거의 다 왔어.",
          "en": "I'm almost there.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "다 와 가는데 채근당할 때 '나 거의 다 왔어'. 안심시키는 말."
        },
        {
          "id": "d13_08",
          "tag": "mix",
          "ko": "어두워지고 있어, 나가자.",
          "en": "It's getting dark. Let's go out.",
          "tense": "지금",
          "compound": true,
          "apply": "It's getting + dark / cold / late.",
          "use": "해 질 무렵 '어두워지네, 나가자'. get은 '~해지다'."
        },
        {
          "id": "d13_09",
          "tag": "mix",
          "ko": "너 그거 샀어?",
          "en": "Did you get it?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "부탁한 거 '그거 샀어? 받았어?'. get은 상황 따라 둘 다."
        },
        {
          "id": "d13_10",
          "tag": "mix",
          "ko": "나 안 가, 피곤해지고 있어.",
          "en": "I'm not going. I'm getting tired.",
          "tense": "지금",
          "compound": true,
          "apply": "I'm getting + tired / sleepy / hungry.",
          "use": "초대 거절할 때 '안 가, 점점 피곤해져서'. getting은 '점점 ~해지다'."
        },
        {
          "id": "d13_11",
          "tag": "mix",
          "ko": "위로 천천히 올라가.",
          "en": "Go up slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Go up / down + slowly / carefully.",
          "use": "계단·언덕 오를 때 '천천히 올라가'. 숨찰까 챙기는 톤."
        },
        {
          "id": "d13_12",
          "tag": "mix",
          "ko": "물에서 나와, 추워.",
          "en": "Get out of the water. It's cold.",
          "compound": true,
          "apply": "Get out of the + water / pool / car.",
          "use": "물놀이하는 사람한테 '나와, 추워'. 걱정돼 부르는 말."
        },
        {
          "id": "d13_13",
          "tag": "mix",
          "ko": "너 일어났어?",
          "en": "Did you get up?",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "아직 자나 싶어 '일어났어?'. get up은 '잠자리에서 일어나다'."
        },
        {
          "id": "d13_14",
          "tag": "mix",
          "ko": "나 일하러 가는 중이야.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "I'm going to + work / school / the airport.",
          "use": "출근하는 중이라 '나 일하러 가는 길이야'. go는 '가다'."
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
          "purposeMean": "하고 싶음·원함",
          "apply": "water 자리에 a menu, the bill, napkins.",
          "use": "식당에서 '물 줘' 할 때. want는 '원해'보다 '주문' 느낌."
        },
        {
          "id": "d14_02",
          "tag": "want",
          "ko": "뭐 줄까?",
          "en": "What do you want?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "상대한테 뭐 원하는지 물을 때. 무뚝뚝하니 친한 사이에만."
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
          "purposeMean": "하고 싶음·원함",
          "apply": "a coffee 자리에 a beer, the check.",
          "use": "카페에서 '커피 줘' 할 때. '커피 원해'가 아니라 주문 느낌."
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
          "purposeMean": "하고 싶음·원함",
          "apply": "go 자리에 eat, sleep, leave, rest.",
          "use": "그 자리 뜨고 싶을 때 '나 갈래'. want to가 '~하고 싶다' 기본 틀.",
          "enSpoken": "I wanna go."
        },
        {
          "id": "d14_05",
          "tag": "want",
          "ko": "나 집에 가고 싶어.",
          "en": "I want to go home.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "go home 자리에 go back, stay.",
          "use": "지쳐서 '집 가고 싶다' 할 때. 짜증 아니고 솔직한 마음.",
          "enSpoken": "I wanna go home."
        },
        {
          "id": "d14_06",
          "tag": "want",
          "ko": "너 가고 싶어?",
          "en": "Do you want to go?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ '갈래?'(의향 질문) Do you want to go? ↔ '가자'(제안) Let's go.",
          "purposeMean": "하고 싶음·원함",
          "apply": "go 자리에 eat, come, try.",
          "use": "같이 갈지 슬쩍 물을 때. '갈래?' 다정하게 권하는 톤.",
          "enSpoken": "Do you wanna go?"
        },
        {
          "id": "d14_07",
          "tag": "want",
          "ko": "나 자고 싶어.",
          "en": "I want to sleep.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ '자고 싶어'(욕구) want to ↔ '자야 해'(의무) have to.",
          "purposeMean": "하고 싶음·원함",
          "use": "졸리고 지칠 때 '자고 싶다'. 그냥 솔직한 바람.",
          "enSpoken": "I wanna sleep."
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
          "purposeMean": "하고 싶음·원함",
          "apply": "want + 물건. this 자리에 that, more, one.",
          "use": "물건 가리키며 '이거 줘' 할 때. '이걸로 할게' 느낌."
        },
        {
          "id": "d14_09",
          "tag": "want",
          "ko": "나 그거 됐어.",
          "en": "I don't want that.",
          "scene": "권하는 걸 사양하며.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "use": "권하는 걸 거절할 때 '그건 됐어'. don't want는 단호하니 가려 써라."
        },
        {
          "id": "d14_10",
          "tag": "want",
          "ko": "나 쉬고 싶어.",
          "en": "I want to rest.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "rest 자리에 sleep, sit down, go home.",
          "use": "지쳐서 '좀 쉬고 싶다' 할 때. 여행 다니다 딱.",
          "enSpoken": "I wanna rest."
        },
        {
          "id": "d14_11",
          "tag": "want",
          "ko": "너 뭐 먹고 싶어?",
          "en": "What do you want to eat?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "eat 자리에 do, drink, see.",
          "use": "식당 정하기 전 '뭐 먹을래?' 물을 때.",
          "enSpoken": "What do you wanna eat?"
        },
        {
          "id": "d14_12",
          "tag": "want",
          "ko": "나 너랑 가고 싶어.",
          "en": "I want to go with you.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "with you 자리에 with them.",
          "use": "같이 가자고 마음 표현할 때 '너랑 갈래'. 다정한 톤.",
          "enSpoken": "I wanna go with you."
        },
        {
          "id": "d14_13",
          "tag": "want",
          "ko": "더 줘.",
          "en": "I want more.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "more 자리에 some water, another one.",
          "use": "식당에서 리필·추가 시킬 때 '더 줘'."
        },
        {
          "id": "d14_14",
          "tag": "want",
          "ko": "나 지금 가고 싶어.",
          "en": "I want to go now.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "now 자리에 soon, later. go 자리에 leave.",
          "use": "지금 떠나고 싶을 때 '나 지금 갈래'. 살짝 재촉하는 마음.",
          "enSpoken": "I wanna go now."
        },
        {
          "id": "d14_15",
          "tag": "want",
          "ko": "마실 거 줄까?",
          "en": "Do you want a drink?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "rel": "↔ 뜻 같음: 원하다. I want는 직설(친구·급할 때), I'd like(=would like)는 공손(점원·격식). 여행 주문에선 I'd like가 더 예의 바르지만, 커리큘럼은 want+Can I get으로 충분히 커버됨. would like는 여유 되면 추가.",
          "purposeMean": "하고 싶음·원함",
          "apply": "a drink 자리에 some water, a coffee.",
          "use": "마실 거 권할 때 '뭐 마실래?'. 손님 챙기듯 다정하게."
        },
        {
          "id": "d14_16",
          "tag": "want",
          "ko": "나 다이빙하고 싶어.",
          "en": "I want to dive.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "dive 자리에 swim, snorkel, try it.",
          "use": "'다이빙해 보고 싶어' 할 때. 설레는 마음 담아.",
          "enSpoken": "I wanna dive."
        },
        {
          "id": "d14_17",
          "tag": "want",
          "ko": "나 안 가고 싶어.",
          "en": "I don't want to go.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "go 자리에 wait, do it.",
          "use": "가기 싫을 때 '안 갈래'. don't want to가 핵심 부정 틀.",
          "enSpoken": "I don't wanna go."
        },
        {
          "id": "d14_18",
          "tag": "want",
          "ko": "나 집에 있고 싶어.",
          "en": "I want to stay home.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "stay home 자리에 stay here, stay in.",
          "use": "나가기 싫을 때 '집에 있을래'. stay는 '안 나가고 버틴다'.",
          "enSpoken": "I wanna stay home."
        },
        {
          "id": "d14_19",
          "tag": "want",
          "ko": "너 뭐 하고 싶어?",
          "en": "What do you want to do?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "do 자리에 eat, see, buy.",
          "use": "계획 정할 때 일행에게 '뭐 하고 싶어?'.",
          "enSpoken": "What do you wanna do?"
        },
        {
          "id": "d14_20",
          "tag": "want",
          "ko": "나 그냥 쉬고 싶어.",
          "en": "I just want to rest.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "rest 자리에 sleep, stay home, sit here.",
          "use": "딴거 말고 그냥 쉬고 싶을 때. just가 '그냥' 느낌 살림.",
          "enSpoken": "I just wanna rest."
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
          "purposeMean": "할 수 있다·없다",
          "apply": "do it 자리에 swim, drive: I can swim / I can drive.",
          "use": "겁먹은 나에게 '나 할 수 있어' 다짐하듯. 자신감 한 마디."
        },
        {
          "id": "d15_02",
          "tag": "can",
          "ko": "나 못 해.",
          "en": "I can't do it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "apply": "can't 뒤에 동사: I can't go / I can't wait.",
          "use": "'나 못 해' 솔직히. 실력 없다기보단 지금은 안 된다는 뜻도."
        },
        {
          "id": "d15_03",
          "tag": "can",
          "ko": "너 할 수 있어?",
          "en": "Can you do it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Can you + do it / help / wait / fix it?",
          "use": "'너 할 수 있겠어?' 상대 능력 확인. 부탁으로도 들려, 톤은 가볍게."
        },
        {
          "id": "d15_04",
          "tag": "can",
          "ko": "나 도와줄 수 있어.",
          "en": "I can help you.",
          "eq": "Let me help you 랑 비슷. I can help you 는 도와줄 수 있어, Let me help you 는 내가 도와줄게.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "apply": "help you 자리에 drive you, carry it: I can carry it.",
          "use": "곤란해 보이는 사람에게 '내가 도와줄게' 먼저 손 내밀 때."
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
          "purposeMean": "네가 해줘",
          "apply": "Can you ~? 는 ~해줄래? help 자리에 see, fix, wait.",
          "use": "도움 청할 때 '좀 도와주실래요?'. Can you가 공손한 부탁."
        },
        {
          "id": "d15_06",
          "tag": "can",
          "ko": "나 영어 할 줄 알아.",
          "en": "I can speak English.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "apply": "speak English 자리에 swim, drive, cook.",
          "use": "'영어 할 줄 알아' 담담히. 자랑이 아니라 그냥 가능 여부."
        },
        {
          "id": "d15_07",
          "tag": "can",
          "ko": "나 영어 잘 못해.",
          "en": "I can't speak English well.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "여행지서 미리 '저 영어 잘 못해요' 양해 구할 때. 천천히 말해달란 신호."
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
          "purposeMean": "~ 주세요(가게서)",
          "apply": "Can I ~? 는 ~해도 돼요/주세요. have 자리에 use, get.",
          "use": "가게서 물건 집으며 '이거 가져도 돼요?'. 공손한 요청."
        },
        {
          "id": "d15_09",
          "tag": "can",
          "ko": "화장실 써도 돼요?",
          "en": "Can I use the bathroom?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?",
          "apply": "the bathroom 자리에 your phone, this chair.",
          "use": "남의 집·가게서 '화장실 좀 써도 될까요?' 허락 구할 때."
        },
        {
          "id": "d15_10",
          "tag": "can",
          "ko": "천천히 말해 줄래요?",
          "en": "Can you speak slowly?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "speak slowly 자리에 say that again, write it down.",
          "use": "못 알아들었을 때 '천천히 말해 주실래요?'. 여행 필수 한마디."
        },
        {
          "id": "d15_11",
          "tag": "can",
          "ko": "나 수영할 수 있어.",
          "en": "I can swim.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "apply": "swim 자리에 다른 동사: I can drive / I can cook.",
          "use": "'나 수영할 줄 알아' 가능 여부. 바다·수영장서 권유받았을 때."
        },
        {
          "id": "d15_12",
          "tag": "can",
          "ko": "나 안 보여.",
          "en": "I can't see.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "어두워서 '안 보여' 상황 설명. 눈이 나쁜 게 아니라 지금 안 보인다는 뜻."
        },
        {
          "id": "d15_13",
          "tag": "can",
          "ko": "나 보여?",
          "en": "Can you see me?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "see me 자리에 hear me: Can you hear me?",
          "use": "영상통화·인파 속에서 '나 보여?' 확인. 가벼운 질문."
        },
        {
          "id": "d15_14",
          "tag": "can",
          "ko": "나 숨 못 쉬겠어.",
          "en": "I can't breathe.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "물속·답답할 때 '숨 못 쉬겠어' 다급하게. 도움 요청 신호."
        },
        {
          "id": "d15_15",
          "tag": "can",
          "ko": "다시 말해 줄래요?",
          "en": "Can you say that again?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "say that again 자리에 speak slowly, repeat it.",
          "use": "못 들었을 때 '다시 말해 줄래요?' 되묻기. 정중하게 한 번 더."
        },
        {
          "id": "d15_16",
          "tag": "can",
          "ko": "나 기다릴 수 있어.",
          "en": "I can wait.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "재촉 안 하고 '나 기다려도 괜찮아' 여유 있게. 상대 부담 덜 때."
        },
        {
          "id": "d15_17",
          "tag": "can",
          "ko": "우리 지금 갈 수 있어?",
          "en": "Can we go now?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "go now 자리에 leave, start, order: Can we order now?",
          "use": "일행에게 '우리 지금 가도 돼?' 떠볼 때. 부드러운 제안."
        },
        {
          "id": "d15_18",
          "tag": "can",
          "ko": "나 안 들려.",
          "en": "I can't hear you.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "전화·시끄러운 데서 '안 들려' 설명. 지금 안 들린다는 뜻."
        },
        {
          "id": "d15_19",
          "tag": "can",
          "ko": "나 운전할 수 있어.",
          "en": "I can drive.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "'나 운전할 줄 알아' 가능 여부. 렌터카·교대운전 얘기 나올 때."
        },
        {
          "id": "d15_20",
          "tag": "can",
          "ko": "너 이거 고칠 수 있어?",
          "en": "Can you fix this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "fix this 자리에 help me, do it: Can you help me?",
          "use": "고장 났을 때 '이거 고칠 수 있어요?' 수리 가능한지 물을 때."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "need 뒤에 명사: need water(물) / need a doctor(의사) / need a taxi(택시).",
          "use": "곤란할 때 '나 좀 도와줘'. 분명하면서도 정중하게 손 내미는 말."
        },
        {
          "id": "d16_02",
          "tag": "need",
          "ko": "나 물 필요해.",
          "en": "I need water.",
          "purpose": "need",
          "purposeLabel": "의무",
          "rel": "↔ '필요해'(need)는 없으면 안 돼, '원해/줘'(want)는 그냥 하고 싶어. need가 더 급해요.",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "같은 자리에 want보다 절박. 'I need water'는 want보다 더 급해 들림.",
          "use": "식당·길에서 '물 좀 주세요' 느낌으로. 목마를 때 바로."
        },
        {
          "id": "d16_03",
          "tag": "need",
          "ko": "나 공기 필요해.",
          "en": "I need air.",
          "note": "need는 꼭 필요하다. want(하고 싶다)보다 강해요.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "숨 막혀 헐떡일 때 '나 숨 좀 쉬자'. 물속·꽉 막힌 곳에서."
        },
        {
          "id": "d16_04",
          "tag": "need",
          "ko": "너 뭐 필요해?",
          "en": "What do you need?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "What do you need? = 점원·친구가 도와주려 먼저 건네는 말.",
          "use": "상대가 곤란해 보일 때 '뭐 필요해?' 챙겨주듯 다정하게."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "I need to ~ 는 ~해야 해. rest 자리에 go, eat, stop.",
          "use": "지쳤을 때 '나 좀 쉬어야겠어'. need to는 하고 싶다보다 몸이 원하는 말."
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
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "자리 뜰 때 '나 가봐야 해'. have to보다 내 사정이라 부드러운 톤."
        },
        {
          "id": "d16_07",
          "tag": "need",
          "ko": "나 자야 해.",
          "en": "I need to sleep.",
          "eq": "I have to sleep 랑 같은 뜻. need to = have to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "졸리고 지칠 때 '나 자야겠어'. 내 몸이 자길 원한다는 뜻."
        },
        {
          "id": "d16_08",
          "tag": "need",
          "ko": "나 이거 필요해.",
          "en": "I need this.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "need this / need it / need a new one 으로 가리키며.",
          "use": "가게서 물건 집으며 '이거 꼭 있어야 해'. want('갖고 싶어')보다 절박."
        },
        {
          "id": "d16_09",
          "tag": "need",
          "ko": "나 그거 필요 없어.",
          "en": "I don't need that.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "권할 때 사양하며 '그건 됐어'. 필요 없다고 딱 자르는 톤."
        },
        {
          "id": "d16_10",
          "tag": "need",
          "ko": "나 의사 필요해.",
          "en": "I need a doctor.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "need + a doctor / the police / an ambulance(구급차). 급할 때 한 단어만 바꿔.",
          "use": "응급 상황에 '의사 좀!' 외칠 때. 여행 중 다치거나 아플 때 꼭."
        },
        {
          "id": "d16_11",
          "tag": "need",
          "ko": "나 시간이 좀 필요해.",
          "en": "I need some time.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "need some + time / water / help / rest. some 붙이면 '좀'.",
          "use": "재촉받을 때 '시간 좀 줘'. some 덕에 덜 부담스럽게."
        },
        {
          "id": "d16_12",
          "tag": "need",
          "ko": "너 도움 필요해?",
          "en": "Do you need help?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "Do you need + help / a hand / anything? '뭐 필요한 거 있어?'.",
          "use": "쩔쩔매는 사람에게 '도와줄까?' 먼저 손 내미는 다정한 말."
        },
        {
          "id": "d16_13",
          "tag": "need",
          "ko": "나 화장실 가야 해.",
          "en": "I need a bathroom.",
          "eq": "I need to use the bathroom 이라고도 해요. 같은 뜻.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "급히 화장실 찾을 때 '화장실 좀 가야 해'. 여행 중 자주."
        },
        {
          "id": "d16_14",
          "tag": "need",
          "ko": "나 좀 멈춰야 해.",
          "en": "I need to stop.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "차·일·걷기 중 '나 잠깐 멈춰야겠어'. 더는 못 버틸 때."
        },
        {
          "id": "d16_15",
          "tag": "need",
          "ko": "나 네 도움이 필요해.",
          "en": "I need your help.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "콕 집어 '네 도움이 필요해'. help보다 your help가 더 간곡."
        },
        {
          "id": "d16_16",
          "tag": "need",
          "ko": "나 새 거 필요해.",
          "en": "I need a new one.",
          "scene": "쓰던 게 고장 났을 때.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "a new one = '새 거 하나'. one 대신 phone, bag 넣어 구체화.",
          "use": "물건 고장났을 때 '새 거 하나 있어야겠어'. 가게서 교환 요청에도."
        },
        {
          "id": "d16_17",
          "tag": "need",
          "ko": "우리 더 천천히 가야 해.",
          "en": "We need to slow down.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "너무 빠를 때 '우리 좀 천천히 가자'. 못 따라갈 때 부드럽게 제동."
        },
        {
          "id": "d16_18",
          "tag": "need",
          "ko": "나 먹어야 해.",
          "en": "I need to eat.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "배고프고 기운 없을 때 '나 뭐 좀 먹어야겠어'. 몸이 보내는 신호."
        },
        {
          "id": "d16_19",
          "tag": "need",
          "ko": "너 그거 필요해?",
          "en": "Do you need it?",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "내 물건 권하며 '너 이거 필요해?' 줄까 말까 물을 때."
        },
        {
          "id": "d16_20",
          "tag": "need",
          "ko": "나 지금 가야 해.",
          "en": "I need to go now.",
          "eq": "I have to go now 랑 같은 뜻. need to = have to.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "끝에 now / soon 붙여 급한 정도 조절. go now / go soon.",
          "use": "더 못 미룰 때 '나 지금 가야 해'. now가 붙어 '당장'이라는 급함."
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
          "purposeMean": "상대에게 시킴·하자",
          "use": "급하게 답 못 줄 때 '잠깐, 어디 보자' 뜸 들이며. 메뉴·지도 볼 때."
        },
        {
          "id": "d17_02",
          "tag": "let",
          "ko": "생각 좀 해볼게.",
          "en": "Let me think.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "바로 답 안 하고 '음, 생각 좀 해볼게' 시간 벌 때. 강요 느낌 줄여줌."
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
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Let me ~ 는 내가 ~할게. help 자리에 see, check, ask.",
          "use": "끙끙대는 사람한테 '내가 해줄게' 먼저 손 내밀 때. 허락 구하듯 부드럽게."
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
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Let's ~ 는 같이 ~하자. go 자리에 eat, start, wait.",
          "use": "둘 이상이 같이 떠날 때 '가자'. 나 혼자가 아니라 같이."
        },
        {
          "id": "d17_05",
          "tag": "let",
          "ko": "먹자.",
          "en": "Let's eat.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "음식 앞에 두고 '자, 먹자' 같이 시작하자고. 식당서 일행한테."
        },
        {
          "id": "d17_06",
          "tag": "let",
          "ko": "시작하자.",
          "en": "Let's start.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "다 모였을 때 '자, 시작하자' 운 떼며. 투어·게임·식사 출발 신호."
        },
        {
          "id": "d17_07",
          "tag": "let",
          "ko": "알려줘.",
          "en": "Let me know.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "뒤에 붙여: Let me know if you need anything / when you're ready.",
          "use": "헤어지며 '정해지면 알려줘' 부탁. 강요 아니라 가볍게 연락 달라는 톤."
        },
        {
          "id": "d17_08",
          "tag": "let",
          "ko": "내가 할게.",
          "en": "Let me do it.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "남이 끙끙댈 때 '됐어, 내가 할게' 넘겨받을 때. 나서서 맡겠다는 톤."
        },
        {
          "id": "d17_09",
          "tag": "let",
          "ko": "들어가자.",
          "en": "Let's go in.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "가게·건물 앞에서 일행에게 '들어가자' 권할 때. 같이 들어가자고."
        },
        {
          "id": "d17_10",
          "tag": "let",
          "ko": "잠깐 쉬자.",
          "en": "Let's rest.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "걷다 지쳤을 때 '우리 잠깐 쉬자' 제안. 나만 쉬는 게 아니라 같이."
        },
        {
          "id": "d17_11",
          "tag": "let",
          "ko": "내가 확인해볼게.",
          "en": "Let me check.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "확실치 않을 때 '내가 한번 확인해볼게' 알아봐 주는 톤. check=확인."
        },
        {
          "id": "d17_12",
          "tag": "let",
          "ko": "천천히 하자.",
          "en": "Let's slow down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "너무 빠를 때 '우리 좀 천천히 가자' 부드럽게. 운전·말·일정 다 됨."
        },
        {
          "id": "d17_13",
          "tag": "let",
          "ko": "기다리자.",
          "en": "Let's wait.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "서두르는 일행에게 '좀 기다리자' 제안. 같이 기다려보자고."
        },
        {
          "id": "d17_14",
          "tag": "let",
          "ko": "내가 물어볼게.",
          "en": "Let me ask.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "모를 때 '내가 점원한테 물어볼게' 나서서. 멕시코서 길·가격 물을 때."
        },
        {
          "id": "d17_15",
          "tag": "let",
          "ko": "그거 내가 가져갈게.",
          "en": "Let me get it.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "짐 든 사람한테 '그거 내가 들게' 도와줄 때. get=가져오다·들다."
        },
        {
          "id": "d17_16",
          "tag": "let",
          "ko": "다시 해보자.",
          "en": "Let's try again.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "한 번 실패하고 '우리 다시 해보자' 격려하며. 포기 말고 한 번 더."
        },
        {
          "id": "d17_17",
          "tag": "let",
          "ko": "그만하자.",
          "en": "Let's stop.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "그만할 때 '자, 이제 그만하자' 같이 멈추자고. 명령 아니라 권유."
        },
        {
          "id": "d17_18",
          "tag": "let",
          "ko": "같이 가자.",
          "en": "Let's go together.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "혼자 가려는 사람한테 '같이 가자' 챙길 때. 떨어지지 말고 함께."
        },
        {
          "id": "d17_19",
          "tag": "let",
          "ko": "내가 보여줄게.",
          "en": "Let me show you.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "말로 설명 안 되면 '내가 보여줄게' 직접 해 보이며. show=보여주다."
        },
        {
          "id": "d17_20",
          "tag": "let",
          "ko": "올라가자.",
          "en": "Let's go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "계단·언덕 앞에서 '올라가자' 같이 오르자고. 다이빙 후 '수면으로'도 됨."
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
          "compound": true,
          "apply": "take a break 자리에 take a rest / stop for a bit.",
          "use": "지치면 '쉬자'. take a break은 잠깐 멈추고 한숨 돌리자는 말.",
          "enSpoken": "I wanna rest. Let's take a break."
        },
        {
          "id": "d18_02",
          "tag": "mix",
          "ko": "나 도움 필요해, 도와줄래?",
          "en": "I need help. Can you help me?",
          "compound": true,
          "apply": "Can you help me 뒤에 with this / find it / call them?",
          "use": "혼자 안 될 때 '도와줄래?'. Can you~?는 명령 아닌 부드러운 부탁."
        },
        {
          "id": "d18_03",
          "tag": "mix",
          "ko": "나 가고 싶은데 못 가.",
          "en": "I want to go, but I can't.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "want to ~, but I can't 뒤에 go / stay / wait / help.",
          "use": "가고 싶은데 사정상 못 갈 때. '미안, 마음은 있는데 못 가.'",
          "enSpoken": "I wanna go, but I can't."
        },
        {
          "id": "d18_04",
          "tag": "mix",
          "ko": "천천히 하자, 나 못 따라가.",
          "en": "Let's slow down. I can't keep up.",
          "compound": true,
          "apply": "Let's 자리에 slow down / wait / take it easy.",
          "use": "남이 너무 빨라 벅찰 때 '천천히 가자'. keep up은 속도 맞춰 따라가다."
        },
        {
          "id": "d18_05",
          "tag": "mix",
          "ko": "너 뭐 필요해?",
          "en": "What do you need?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "What do you need 뒤에 from me / right now?",
          "use": "곤란해 보이는 사람한테 '뭐 필요해?' 챙기는 말. 다정하게."
        },
        {
          "id": "d18_06",
          "tag": "mix",
          "ko": "나 물 마시고 싶어.",
          "en": "I want some water.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "want some 자리에 water / coffee / time.",
          "use": "물 좀 달라고 부드럽게. some이 '좀'이라 덜 딱딱해. 식당 주문에도 써."
        },
        {
          "id": "d18_07",
          "tag": "mix",
          "ko": "나 안 보여, 너 보여?",
          "en": "I can't see. Can you see?",
          "compound": true,
          "apply": "I can't 자리에 see / hear / find it.",
          "use": "어두워 안 보일 때 '안 보여, 넌 보여?'. 시력 말고 '지금 안 보인다'."
        },
        {
          "id": "d18_08",
          "tag": "mix",
          "ko": "가자, 준비됐어.",
          "en": "Let's go. I'm ready.",
          "compound": true,
          "use": "준비 끝났으니 '가자!'. Let's go는 같이 출발하자고 가볍게 미는 말."
        },
        {
          "id": "d18_09",
          "tag": "mix",
          "ko": "나 숨 못 쉬겠어, 올라가자.",
          "en": "I can't breathe. Let's go up.",
          "compound": true,
          "use": "숨 막히는 데서 '숨 못 쉬겠어, 올라가자'. 다이빙 중 위로 가자는 신호."
        },
        {
          "id": "d18_10",
          "tag": "mix",
          "ko": "나 좀 멈춰야 해.",
          "en": "I need to stop.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "I need to 자리에 stop / rest / go / sit down.",
          "use": "힘들어 '나 멈춰야겠어'. need to는 '하고 싶다'보다 강해, 꼭 해야 한다는 느낌."
        },
        {
          "id": "d18_11",
          "tag": "mix",
          "ko": "내가 도와줄게, 기다려.",
          "en": "Let me help. Wait.",
          "compound": true,
          "apply": "Let me 자리에 help / see / try / do it.",
          "use": "내가 나서서 '내가 해줄게'. Let me help는 '내가 할 테니 맡겨'."
        },
        {
          "id": "d18_12",
          "tag": "mix",
          "ko": "나 다이빙하고 싶어.",
          "en": "I want to dive.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "I want to 자리에 dive / swim / try it.",
          "use": "물에 뛰어들고 싶을 때 '다이빙하고 싶어'. 신나 들뜬 톤.",
          "enSpoken": "I wanna dive."
        },
        {
          "id": "d18_13",
          "tag": "mix",
          "ko": "너 갈 수 있어?",
          "en": "Can you go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Can you 자리에 go / come / wait / make it?",
          "use": "갈 수 있는지 '너 갈 수 있어?' 확인. 부드럽게 묻는 톤."
        },
        {
          "id": "d18_14",
          "tag": "mix",
          "ko": "나 공기 필요해.",
          "en": "I need air.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "I need 자리에 air / water / help / a break.",
          "use": "숨 막힐 때 '공기 필요해'. need는 있으면 좋다가 아니라 꼭 있어야 한다는 절박함."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "재촉하는 사람에게 '이거 좀 걸려요' 양해 구할 때. take=시간이 들다."
        },
        {
          "id": "d19_09",
          "tag": "take",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "뒤에 붙여: ~ to get downtown(시내까지) / for the package to arrive(택배).",
          "use": "이동·요리 등 '얼마나 걸려?' 소요시간 물을 때."
        },
        {
          "id": "d19_05",
          "tag": "take",
          "ko": "나 사진 찍을게.",
          "en": "I'm going to take a photo.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "경치 보고 '나 사진 한 장 찍을게' 담담히 알릴 때. take=찍다.",
          "enSpoken": "I'm gonna take a photo."
        },
        {
          "id": "d19_07",
          "tag": "take",
          "ko": "나 택시 탈 거야.",
          "en": "I'm going to take a taxi.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'나 택시 타고 갈래' 정해서 알릴 때. take a taxi=택시를 타다.",
          "enSpoken": "I'm gonna take a taxi."
        },
        {
          "id": "d19_19",
          "tag": "take",
          "ko": "나 샤워할 거야.",
          "en": "I'm going to take a shower.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "'나 샤워 좀 할게' 알릴 때. take a shower=샤워하다(통째 외우기).",
          "enSpoken": "I'm gonna take a shower."
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
          "purposeMean": "하고 싶음·원함",
          "apply": "I'll take + this one / two / the blue one.",
          "use": "가게서 고르고 '이걸로 할게요' 정할 때. take=골라서 사다."
        },
        {
          "id": "d19_04",
          "tag": "take",
          "ko": "사진 찍어 줄래요?",
          "en": "Can you take a photo?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "Can you + take a photo / call a taxi / help me?",
          "use": "지나가는 사람에게 '사진 좀 찍어줄래요?' 공손히 부탁할 때."
        },
        {
          "id": "d19_01",
          "tag": "take",
          "ko": "이거 가져.",
          "en": "Take it.",
          "scene": "상대에게 물건을 건네며.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "건네주며 '가져' 하고 쥐여줄 때. 받으라는 다정한 권유."
        },
        {
          "id": "d19_02",
          "tag": "take",
          "ko": "이거 가져가.",
          "en": "Take this.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take this + with you / home / inside.",
          "use": "물건 내밀며 '이거 가져가'. 여기 take는 '집어들다·받다'."
        },
        {
          "id": "d19_03",
          "tag": "take",
          "ko": "한번 봐.",
          "en": "Take a look.",
          "note": "take a look은 한번 보다. take가 보다로도 쓰여요.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take a look at this. 처럼 at + 대상 붙여.",
          "use": "'이거 한번 봐 봐' 하고 시선 끌 때."
        },
        {
          "id": "d19_06",
          "tag": "take",
          "ko": "버스 타.",
          "en": "Take the bus.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take the + bus / train / subway / number 7.",
          "use": "길 묻는 사람에게 '버스 타' 알려줄 때. 여기 take=교통편을 타다."
        },
        {
          "id": "d19_10",
          "tag": "take",
          "ko": "약 먹어.",
          "en": "Take your medicine.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "아픈 가족 챙기듯 다정하게 '약 먹어'. (싫어도 받아들여라는 관용도 됨)"
        },
        {
          "id": "d19_11",
          "tag": "take",
          "ko": "좀 쉬어.",
          "en": "Take a break.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "지칠 때 '잠깐 쉬어'. 같이 쉬자면 Let's take a break."
        },
        {
          "id": "d19_12",
          "tag": "take",
          "ko": "숨 깊게 쉬어.",
          "en": "Take a deep breath.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "긴장한 사람 진정시킬 때 '숨 크게 쉬어'. 화날 때 스스로에게도."
        },
        {
          "id": "d19_13",
          "tag": "take",
          "ko": "나 좀 데려가 줘.",
          "en": "Take me with you.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take me + with you / there / along.",
          "use": "같이 가자고 조르듯 '나도 데려가 줘'. take=데려가다."
        },
        {
          "id": "d19_14",
          "tag": "take",
          "ko": "공항으로 데려다주세요.",
          "en": "Take me to the airport.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take me to + the airport / this address / the hotel.",
          "use": "택시 타서 기사에게 '공항으로 가주세요' 공손히. take=데려다주다."
        },
        {
          "id": "d19_15",
          "tag": "take",
          "ko": "자리에 앉아.",
          "en": "Take a seat.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "손님에게 '앉으세요' 권할 때. Sit down보다 부드럽고 정중한 말."
        },
        {
          "id": "d19_16",
          "tag": "take",
          "ko": "천천히 해.",
          "en": "Take your time.",
          "note": "Take your ~. time이면 천천히 해, seat이면 앉아.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take your ~. time이면 천천히 해, seat이면 앉아.",
          "use": "재촉 안 하고 '천천히 해도 돼' 배려할 때. 부담 주기 싫을 때."
        },
        {
          "id": "d19_17",
          "tag": "take",
          "ko": "이 길로 가.",
          "en": "Take this road.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take + this road / the next left / the highway.",
          "use": "길 알려줄 때 '이 길로 가'. take=그 길을 택해 가다."
        },
        {
          "id": "d19_18",
          "tag": "take",
          "ko": "우산 가져가.",
          "en": "Take an umbrella.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Take + an umbrella / your jacket / some water.",
          "use": "비 올 듯하면 '우산 챙겨가' 일러줄 때. take=챙겨서 가져가다."
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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "It makes sense + now / to me / why he left(그래서 떠났구나).",
          "use": "상대 말이 척 이해될 때 '그러네, 말 되네'. make sense=말이 되다."
        },
        {
          "id": "d20_11",
          "tag": "make",
          "ko": "그거 말 안 돼.",
          "en": "That doesn't make sense.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "앞뒤 안 맞아 갸웃할 때 '이거 말이 안 되잖아'. make sense=말이 되다."
        },
        {
          "id": "d20_15",
          "tag": "make",
          "ko": "그게 날 행복하게 해.",
          "en": "It makes me happy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "note": "make는 '~되게 해'. 한국말론 '그거 하면 기분 좋아'가 자연스럽지만 영어는 make로 말해요.",
          "apply": "It makes me + sad / nervous / hungry(배고프게).",
          "use": "뭔가가 내 기분을 그렇게 만들 때 '그래서 ~해져'. make=~하게 하다."
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
          "purposeMean": "무언가를 함",
          "use": "겨우 해내고 '나 해냈어'. make를 '만들다' 말고 '해내다'로."
        },
        {
          "id": "d20_06",
          "tag": "make",
          "ko": "나 마음 정했어.",
          "en": "I made a decision.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "고민 끝에 '나 마음 정했어'. make a decision=결정을 내리다."
        },
        {
          "id": "d20_07",
          "tag": "make",
          "ko": "나 실수했어.",
          "en": "I made a mistake.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "잘못 인정할 때 '나 실수했어'. 사과 앞에 자주. make a mistake=실수하다."
        },
        {
          "id": "d20_08",
          "tag": "make",
          "ko": "나 저녁 만들 거야.",
          "en": "I'm going to make dinner.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "make + dinner / breakfast / coffee / a sandwich.",
          "use": "이따 저녁 요리하겠다고 할 때. 여기 make는 음식 '만들다=요리하다'.",
          "enSpoken": "I'm gonna make dinner."
        },
        {
          "id": "d20_12",
          "tag": "make",
          "ko": "나 친구 사귀었어.",
          "en": "I made a friend.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "여행지서 새 사람 알게 됐을 때 '나 친구 사귀었어'. make a friend=친구 사귀다."
        },
        {
          "id": "d20_14",
          "tag": "make",
          "ko": "나 예약했어.",
          "en": "I made a reservation.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "식당·호텔 미리 잡아뒀을 때 '나 예약했어'. make a reservation=예약하다."
        },
        {
          "id": "d20_18",
          "tag": "make",
          "ko": "나 소소하게 좀 벌어.",
          "en": "I make some money.",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "큰돈 아니고 부수입 좀 있다고 담담하게. 과시 아님."
        },
        {
          "id": "d20_20",
          "tag": "make",
          "ko": "너 해낼 거야.",
          "en": "You're going to make it.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "힘들어하는 사람 다독이며 '너 해낼 거야, 잘될 거야'. make it=해내다.",
          "enSpoken": "You're gonna make it."
        },
        {
          "id": "d20_02",
          "tag": "make",
          "ko": "너 해낼 수 있어.",
          "en": "You can make it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "힘들어하는 사람에게 '너 할 수 있어' 응원할 때."
        },
        {
          "id": "d20_03",
          "tag": "make",
          "ko": "우리 시간 맞춰 갈 수 있어.",
          "en": "We can make it.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "시간 빠듯할 때 '늦지 않게 갈 수 있어'. make it=시간 맞춰 도착하다."
        },
        {
          "id": "d20_09",
          "tag": "make",
          "ko": "커피 좀 타 줄래?",
          "en": "Can you make some coffee?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "Can you make + some tea / breakfast / a copy(복사)?",
          "use": "커피 한 잔 부탁할 때. Can you~?로 공손하게. make=타 주다."
        },
        {
          "id": "d20_04",
          "tag": "make",
          "ko": "확실히 해.",
          "en": "Make sure.",
          "note": "Make sure ~ 는 ~인지 꼭 확인해. 뒤에 문장을 붙여봐.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Make sure ~ 는 ~인지 꼭 확인해. 뒤에 문장을 붙여봐.",
          "use": "빠뜨리지 말라고 단호히 '꼭 확인해'. make sure=확실히 챙기다."
        },
        {
          "id": "d20_05",
          "tag": "make",
          "ko": "문 잠겼는지 확인해.",
          "en": "Make sure the door is locked.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Make sure + you eat / he knows / it's clean(깨끗한지).",
          "use": "나가기 전 '문 잠겼나 꼭 확인해'. Make sure 뒤에 챙길 일을 붙임."
        },
        {
          "id": "d20_13",
          "tag": "make",
          "ko": "빨리 끝내자.",
          "en": "Let's make it quick.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "바쁘니 '빨리 후딱 끝내자'. make it quick=짧게·빨리 하자."
        },
        {
          "id": "d20_16",
          "tag": "make",
          "ko": "시끄럽게 하지 마.",
          "en": "Don't make noise.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "조용히 하라 주의 줄 때 '시끄럽게 굴지 마'. make noise=떠들다."
        },
        {
          "id": "d20_17",
          "tag": "make",
          "ko": "계획 세우자.",
          "en": "Let's make a plan.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "막막할 때 '계획부터 세우자'. make a plan=계획을 짜다."
        },
        {
          "id": "d20_19",
          "tag": "make",
          "ko": "안전한지 확실히 해.",
          "en": "Make sure it's safe.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "위험할까 봐 '안전한지 꼭 확인해'. make sure 뒤에 걱정되는 점을 붙임."
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
          "purposeMean": "궁금해서 물음",
          "apply": "this 자리에 that(저거) / it(그거).",
          "use": "눈앞 물건·메뉴 가리키며 '이게 뭐예요?'. 처음 보는 음식·표지판에 편하게."
        },
        {
          "id": "d21_02",
          "tag": "wh",
          "ko": "너 누구야?",
          "en": "Who are you?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "you 자리에 he(쟤) / she(저 사람) / they(저 사람들).",
          "use": "낯선 사람에게 '누구세요?'. 다짜고짜면 따질 수 있으니 톤은 부드럽게."
        },
        {
          "id": "d21_03",
          "tag": "wh",
          "ko": "그거 언제야?",
          "en": "When is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "뒤에 붙여: When is the bus(버스) / the tour(투어) / breakfast(아침)?",
          "use": "행사·버스·약속 언제냐 물을 때 '그거 언제야?'. it은 이미 아는 그 일."
        },
        {
          "id": "d21_04",
          "tag": "wh",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "note": "where(어디)를 맨 앞에. 의문사 더하기 is 더하기 주어.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "the bathroom 자리에 the exit(출구) / the station(역) / the ATM.",
          "use": "여행 필수. 식당·가게서 직원에게 공손히 '화장실 어디예요?'."
        },
        {
          "id": "d21_08",
          "tag": "wh",
          "ko": "그 사람 누구야?",
          "en": "Who is he?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "he 자리에 she(저 여자) / that(저 사람).",
          "use": "저쪽 사람 가리키며 '쟤 누구야?'. 일행에게 슬쩍 물을 때."
        },
        {
          "id": "d21_12",
          "tag": "wh",
          "ko": "얼마예요?",
          "en": "How much is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "물건 짚으며 같이: How much is this?(이거) / for two?(둘이서).",
          "use": "가격 물을 때 만능 한마디 '얼마예요?'. 시장·택시·가게 어디서나."
        },
        {
          "id": "d21_13",
          "tag": "wh",
          "ko": "몇 시예요?",
          "en": "What time is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "지금 시각 물을 때 '몇 시예요?'. 길에서 누구에게나 가볍게."
        },
        {
          "id": "d21_14",
          "tag": "wh",
          "ko": "누가 알겠어.",
          "en": "Who knows?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "답을 알 수 없을 때 어깨 으쓱하며. '쟤 왜 저래?'—'누가 알겠어.'"
        },
        {
          "id": "d21_15",
          "tag": "wh",
          "ko": "이거 누구 거예요?",
          "en": "Whose is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "this 자리에 that(저거) / it(그거).",
          "use": "주인 모를 물건 보고 '이거 누구 거예요?'. 두고 간 짐·휴대폰에."
        },
        {
          "id": "d21_19",
          "tag": "wh",
          "ko": "왜 늦었어?",
          "en": "Why are you late?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "late 자리에 here(여기 온 이유) / mad(화났는지).",
          "use": "늦게 온 사람에게 '왜 늦었어?'. 톤 따라 다정도 따짐도. 웃으면 부드러워."
        },
        {
          "id": "d21_24",
          "tag": "wh",
          "ko": "3시 30분이요.",
          "en": "It's three thirty.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "숫자만 바꿔: two o'clock(2시) / five fifteen(5시 15분).",
          "use": "시간 묻는 말에 '3시 30분이요.' three thirty=3시 30분."
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
          "purposeMean": "궁금해서 물음",
          "apply": "How do you ~? 는 어떻게 ~해요? do this 자리에 say it, use it.",
          "use": "기계·앱·낯선 물건 앞에서 '이거 어떻게 해요?'. 직원에게 도움 청할 때."
        },
        {
          "id": "d21_07",
          "tag": "wh",
          "ko": "너 뭐 해?",
          "en": "What are you doing?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "지금 뭐 하나 물을 때 '너 뭐 해?'. 전화로도 써. 진행 중인 일."
        },
        {
          "id": "d21_09",
          "tag": "wh",
          "ko": "우리 언제 가?",
          "en": "When do we go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "같이 가는데 출발 시각이 궁금할 때. 배·차 기다리며 '우리 언제 가?'",
          "apply": "go 자리에 leave(출발) / eat(먹어) / start(시작해)."
        },
        {
          "id": "d21_10",
          "tag": "wh",
          "ko": "너 어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "나가는 사람에게 '어디 가?'. 궁금해서 가볍게 묻는 말."
        },
        {
          "id": "d21_16",
          "tag": "wh",
          "ko": "거기 어떻게 가요?",
          "en": "How do I get there?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "뒤에 붙여: How do I get to the beach(해변) / the airport(공항)?",
          "use": "길 물을 때 핵심 한마디 '거기 어떻게 가요?'. 지도 보여주며 직원에게."
        },
        {
          "id": "d21_17",
          "tag": "wh",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "뒤에 붙여: ~ to get there(거기까지) / to cook(요리).",
          "use": "이동·요리 등 '얼마나 걸려?' 소요시간 물을 때."
        },
        {
          "id": "d21_18",
          "tag": "wh",
          "ko": "뭐 줄까?",
          "en": "What do you want?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "상대 원하는 걸 물을 때 '뭐 줄까?/뭐 원해?'. 음료 권하거나 챙겨줄 때."
        },
        {
          "id": "d21_05",
          "tag": "wh",
          "ko": "왜?",
          "en": "Why?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "이유 한마디로 물을 때 '왜?'. 짧아서 따지듯 들릴 수 있으니 톤 조심."
        },
        {
          "id": "d21_11",
          "tag": "wh",
          "ko": "왜 안 돼?",
          "en": "Why not?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "거절·안 된다는 말에 '왜 안 돼?'. 받아치는 느낌이라 가볍게."
        },
        {
          "id": "d21_20",
          "tag": "wh",
          "ko": "어느 거예요?",
          "en": "Which one?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Which one + do you like / do you recommend / should we ~? 로 키워.",
          "use": "여러 개 중 하나 고를 때. 여행지 가게서 점원에게."
        },
        {
          "id": "d21_21",
          "tag": "wh",
          "ko": "두 명이요.",
          "en": "Two people.",
          "apply": "숫자만 바꿔: three people(셋) / four people(넷).",
          "use": "식당서 인원 물을 때 답하는 말 '두 명이요.' 손가락 두 개와 같이."
        },
        {
          "id": "d21_22",
          "tag": "wh",
          "ko": "저 혼자예요.",
          "en": "Just me.",
          "use": "몇 명이냐 물어오면 '저 혼자요'. 식당·예약·입장에서."
        },
        {
          "id": "d21_23",
          "tag": "wh",
          "ko": "7시에요.",
          "en": "At seven.",
          "note": "시간 대답은 at. at seven, at eight.",
          "apply": "seven 자리에 eight(8시) / noon(정오) / nine thirty(9시 반).",
          "use": "'언제/몇 시?'에 답할 때 '7시에요.' at + 시각이 시각 답의 기본 틀."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "만나서 가볍게 던지는 인사. 진짜 안부가 아니라 그냥 '안녕' 같은 말."
        },
        {
          "id": "d22_02",
          "tag": "mix",
          "ko": "나 잘 지내, 너는?",
          "en": "I'm good. How about you?",
          "compound": true,
          "apply": "How about you 자리에 you / your trip / your family.",
          "use": "'난 좋아, 너는?' 하고 바로 되묻기. 인사 주고받는 자연스러운 흐름."
        },
        {
          "id": "d22_03",
          "tag": "mix",
          "ko": "어디 가?",
          "en": "Where are you going?",
          "tense": "지금",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "길에서 마주쳤을 때 '어디 가?'. 캐묻는 게 아니라 가벼운 인사."
        },
        {
          "id": "d22_04",
          "tag": "mix",
          "ko": "나 일하러 가.",
          "en": "I'm going to work.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "to work 자리에 home / to school / downtown.",
          "use": "'나 일하러 가는 중' 하고 지금 가는 곳을 답할 때."
        },
        {
          "id": "d22_05",
          "tag": "mix",
          "ko": "너 시간 있어?",
          "en": "Do you have time?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "use": "잠깐 붙잡고 얘기하고플 때 '시간 돼?'. 다정하게 물어보는 톤."
        },
        {
          "id": "d22_06",
          "tag": "mix",
          "ko": "미안, 나 가야 해.",
          "en": "Sorry, I have to go.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "use": "급히 갈 때 'Sorry' 붙여 미안한 톤으로. 무례하지 않게 빠지는 말.",
          "enSpoken": "Sorry, I gotta go."
        },
        {
          "id": "d22_07",
          "tag": "mix",
          "ko": "뭐 좀 먹을래?",
          "en": "Do you want to get something to eat?",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "apply": "to eat 자리에 to drink.",
          "use": "같이 먹자 권할 때. get은 '사 먹으러 가자'는 느낌.",
          "enSpoken": "Do you wanna get something to eat?"
        },
        {
          "id": "d22_08",
          "tag": "mix",
          "ko": "그래, 배고파.",
          "en": "Yes, I'm hungry.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "권유에 '응, 좋아' 하고 받을 때. 배고프다고 이유까지 얹는 말."
        },
        {
          "id": "d22_09",
          "tag": "mix",
          "ko": "뭐 먹고 싶어?",
          "en": "What do you want to eat?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "상대 입맛 물을 때 '뭐 먹고 싶어?'. 메뉴 정하기 전 다정하게.",
          "enSpoken": "What do you wanna eat?"
        },
        {
          "id": "d22_10",
          "tag": "mix",
          "ko": "아무거나 괜찮아.",
          "en": "Anything is okay.",
          "scene": "뭐 먹을지 물어오면.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "고르라고 할 때 '난 다 좋아, 알아서 해'. 편하게 맡기는 느낌."
        },
        {
          "id": "d22_11",
          "tag": "mix",
          "ko": "이거 얼마예요?",
          "en": "How much is this?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "this 자리에 that / it.",
          "use": "가게서 가격 물을 때. 물건 가리키며 점원에게."
        },
        {
          "id": "d22_12",
          "tag": "mix",
          "ko": "카드 돼요?",
          "en": "Can I use a card?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?",
          "use": "계산할 때 '카드 받아요?' 묻기. use는 '쓰다'—카드 써도 되냐는 뜻."
        },
        {
          "id": "d22_13",
          "tag": "mix",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "the bathroom 자리에 the exit / the bus stop.",
          "use": "급할 때 화장실 위치 묻기. 식당·가게서 점원에게 바로."
        },
        {
          "id": "d22_14",
          "tag": "mix",
          "ko": "천천히 말해 줄래요?",
          "en": "Can you speak slowly?",
          "eq": "Please speak slowly 라고도 해요. 같은 뜻, 바꿔 써도 돼요.",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "use": "못 알아들을 때 '천천히 말해 줘요'. 부탁이라 부드럽게."
        },
        {
          "id": "d22_15",
          "tag": "mix",
          "ko": "다시 말해 줄래요?",
          "en": "Can you say that again?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "use": "못 들었을 때 '다시 말해 줘요'. 공손한 되묻기, 무례하지 않음."
        },
        {
          "id": "d22_16",
          "tag": "mix",
          "ko": "나 영어 잘 못해.",
          "en": "I can't speak English well.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "말 막힐 때 미리 '영어 서툴러요' 양해 구하기. 솔직하게 낮추는 말."
        },
        {
          "id": "d22_17",
          "tag": "mix",
          "ko": "도와주실 수 있어요?",
          "en": "Can you help me?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "help me 자리에 show me / tell me.",
          "use": "곤란할 때 '좀 도와주실래요?' 부탁. 낯선 사람에게도 공손히."
        },
        {
          "id": "d22_18",
          "tag": "mix",
          "ko": "고마워요.",
          "en": "Thank you.",
          "use": "고마울 때 가장 기본. 가볍게라도 꼭 붙이면 분위기 좋아짐."
        },
        {
          "id": "d22_19",
          "tag": "mix",
          "ko": "천만에요.",
          "en": "You're welcome.",
          "use": "고맙다는 말에 '별말씀을' 하고 받아줄 때. 가장 무난한 답."
        },
        {
          "id": "d22_20",
          "tag": "mix",
          "ko": "또 봐.",
          "en": "See you.",
          "eq": "Take care 라고도 해요. See you는 또 봐, Take care는 잘 지내.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "See you 뒤에 later / tomorrow / soon.",
          "use": "헤어질 때 가볍게 '또 봐'. Goodbye보다 편한 작별 인사."
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
          "en": "Hello.",
          "use": "공항 직원·심사관에게 첫인사. 웃으며 가볍게. 격식 안 차려도 돼."
        },
        {
          "id": "d23_02",
          "tag": "trip",
          "ko": "여기 여권 있어요.",
          "en": "Here is my passport.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "Here is + my passport / my ticket / the address(주소).",
          "use": "입국심사대에서 여권 내밀며 '여기요' 건네는 한마디."
        },
        {
          "id": "d23_03",
          "tag": "trip",
          "ko": "저 다이빙하러 왔어요.",
          "en": "I'm here for diving.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "for + diving / vacation(휴가) / work(일) / a wedding(결혼식).",
          "use": "심사관이 '왜 왔냐' 물을 때. '저 다이빙하러요'."
        },
        {
          "id": "d23_04",
          "tag": "trip",
          "ko": "저 휴가로 왔어요.",
          "en": "I'm here on vacation.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "심사관 '방문 목적?'에 가장 무난한 답. '놀러 왔어요'. 일 아니라 휴가라고."
        },
        {
          "id": "d23_05",
          "tag": "trip",
          "ko": "2주 있을 거예요.",
          "en": "I'm going to stay for two weeks.",
          "tense": "미래",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "for + two weeks / ten days(열흘) / a month(한 달).",
          "use": "'얼마나 머무냐' 물으면 자신 있게 '2주요'.",
          "enSpoken": "I'm gonna stay for two weeks."
        },
        {
          "id": "d23_06",
          "tag": "trip",
          "ko": "호텔 예약했어요.",
          "en": "I have a hotel reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "use": "'어디 묵냐' 물으면. '호텔 잡아놨어요' 하고 답."
        },
        {
          "id": "d23_07",
          "tag": "trip",
          "ko": "짐 찾는 곳 어디예요?",
          "en": "Where is baggage claim?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Where is + the exit(출구) / the bathroom(화장실) / the gate(탑승구)?",
          "use": "짐 찾으러 갈 때 직원에게. baggage claim=캐리어 나오는 컨베이어."
        },
        {
          "id": "d23_08",
          "tag": "trip",
          "ko": "제 가방을 못 찾겠어요.",
          "en": "I can't find my bag.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "벨트 다 돌았는데 내 가방만 안 나올 때. 난감한 톤으로 직원에게."
        },
        {
          "id": "d23_09",
          "tag": "trip",
          "ko": "택시 어디서 타요?",
          "en": "Where can I get a taxi?",
          "note": "Where can I get ~? 는 ~ 어디서 구해요/타요? taxi 자리에 cash, water.",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "Where can I get ~? 는 ~ 어디서 구해요/타요? taxi 자리에 cash, water.",
          "use": "공항 나와 택시 어디서 잡나 물을 때. get a taxi=택시 잡다."
        },
        {
          "id": "d23_10",
          "tag": "trip",
          "ko": "시내까지 얼마예요?",
          "en": "How much is it to downtown?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "How much is it to + downtown(시내) / the hotel(호텔) / the airport(공항)?",
          "use": "택시 타기 전 기사에게 값부터 묻기. 바가지 막으려고."
        },
        {
          "id": "d23_11",
          "tag": "trip",
          "ko": "이거 호텔 주소예요.",
          "en": "Here is the hotel address.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "기사에게 종이·폰 화면 내밀며 '여기로요'. 말 안 통해도 주소로 해결."
        },
        {
          "id": "d23_12",
          "tag": "trip",
          "ko": "와이파이 있어요?",
          "en": "Do you have wifi?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "use": "호텔·카페에서 '와이파이 돼요?' 물을 때. 인터넷 쓰려고."
        },
        {
          "id": "d23_13",
          "tag": "trip",
          "ko": "환전 어디서 해요?",
          "en": "Where can I get cash?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "환전·현금 뽑을 데 물을 때. 공항에서 현지 돈 필요할 때."
        },
        {
          "id": "d23_14",
          "tag": "trip",
          "ko": "도와주실 수 있어요?",
          "en": "Can you help me?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "use": "길 잃고 막막할 때 지나가는 사람에게. 공손하게 '좀 도와주실래요?'"
        },
        {
          "id": "d23_15",
          "tag": "trip",
          "ko": "영어 하세요?",
          "en": "Do you speak English?",
          "tense": "평소",
          "purpose": "action",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "말 통할지 모를 때 먼저 확인. 안 되면 손짓·번역기로 넘어가면 돼."
        },
        {
          "id": "d23_16",
          "tag": "trip",
          "ko": "천천히 말해 주세요.",
          "en": "Please speak slowly.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "rel": "↔ 둘 다 '천천히 말해 주세요'. 바꿔 써도 됨. Can you ~?는 '~해줄래요?'(질문형 부탁), Please ~는 '~해 주세요'(명령형+please). 둘 다 공손하니 편한 거 써라.",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "Please + speak slowly / say it again(다시) / wait(기다려).",
          "use": "상대가 너무 빨라 못 알아들을 때. 부드럽게 Please 붙여 부탁."
        },
        {
          "id": "d23_17",
          "tag": "trip",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "어디서든 화장실 찾을 때. 가장 자주 쓸 한마디. 급하면 이거부터."
        },
        {
          "id": "d23_18",
          "tag": "trip",
          "ko": "제 비행기 늦었어요.",
          "en": "My flight is late.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "마중 나온 사람에게 비행기 늦었다고. 연착 알릴 때."
        },
        {
          "id": "d23_19",
          "tag": "trip",
          "ko": "출구 어디예요?",
          "en": "Where is the exit?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "짐 찾고 밖으로 나갈 때. 나가는 문 어디냐 물을 때."
        },
        {
          "id": "d23_20",
          "tag": "trip",
          "ko": "고맙습니다.",
          "en": "Thank you.",
          "use": "도움받고 끝맺는 인사. 웃으며. 멕시코선 Gracias도 같이 쓰면 좋아."
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
          "purposeMean": "그냥 그러함·~이다",
          "apply": "dive 자리에 rent gear, pick up my tank.",
          "use": "다이빙샵 들어서며 첫마디. 구경 온 게 아니라 다이빙하러 온 손님이라고 밝히기."
        },
        {
          "id": "d24_02",
          "tag": "trip",
          "ko": "저 자격증 있어요.",
          "en": "I'm a certified diver.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "자격증 있다고 알릴 때. 초보 취급 말고 받아달라는 뜻."
        },
        {
          "id": "d24_03",
          "tag": "trip",
          "ko": "예약했어요.",
          "en": "I have a reservation.",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "뒤에 붙여: a reservation for two, under Kim(김으로).",
          "use": "이름 대기 전 '예약하고 왔어요' 먼저. have는 '가지다'가 아니라 '예약돼 있다'."
        },
        {
          "id": "d24_04",
          "tag": "trip",
          "ko": "공기통 필요해요.",
          "en": "I need a tank.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "a tank 자리에 a wetsuit, fins, a mask, weights.",
          "use": "장비 빌릴 때 '공기통 하나 있어야 해요'. need는 꼭 필요한 거라 당당히."
        },
        {
          "id": "d24_05",
          "tag": "trip",
          "ko": "장비 빌릴 수 있어요?",
          "en": "Can I rent some gear?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?",
          "apply": "rent some gear 자리에 rent fins, borrow a towel.",
          "use": "장비 대여 정중히 물을 때. Can I~?라 '빌려도 될까요?'처럼 부드럽게."
        },
        {
          "id": "d24_06",
          "tag": "trip",
          "ko": "이거 제 사이즈예요?",
          "en": "Is this my size?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "웻수트·핀 들고 '이거 제 사이즈 맞아요?' 점원에게 확인할 때."
        },
        {
          "id": "d24_07",
          "tag": "trip",
          "ko": "웻수트 필요해요.",
          "en": "I need a wetsuit.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "a wetsuit 자리에 a tank, a mask, a guide.",
          "use": "물 차가울 때 '웻수트 필요해요'. 당당히 요청하면 됨."
        },
        {
          "id": "d24_08",
          "tag": "trip",
          "ko": "이거 어떻게 써요?",
          "en": "How do you use this?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "this 자리에 the regulator, the BCD, this strap.",
          "use": "장비 보고 '이거 어떻게 써요?' 작동법 물을 때. 모르는 거 부끄럽지 않게."
        },
        {
          "id": "d24_09",
          "tag": "trip",
          "ko": "물 차가워요?",
          "en": "Is the water cold?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "cold 자리에 deep, clear, rough(거칠어요).",
          "use": "입수 전 '물 차가워요?' 수온 물을 때. 웻수트 두께 정하려고."
        },
        {
          "id": "d24_10",
          "tag": "trip",
          "ko": "얼마나 깊어요?",
          "en": "How deep is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "deep 자리에 far, long, cold → How far/long is it?",
          "use": "포인트 깊이 물을 때 '얼마나 깊어요?'. 내 수준에 맞나 가늠."
        },
        {
          "id": "d24_11",
          "tag": "trip",
          "ko": "가이드 있어요?",
          "en": "Do you have a guide?",
          "purpose": "have",
          "purposeLabel": "소유",
          "purposeMean": "가지고 있다·없다",
          "apply": "a guide 자리에 a buddy, lockers, a boat.",
          "use": "혼자 불안할 때 '가이드 붙어요?' 동행 여부 확인."
        },
        {
          "id": "d24_12",
          "tag": "trip",
          "ko": "저 동굴 다이빙해요.",
          "en": "I'm doing cave diving.",
          "tense": "지금",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "apply": "cave diving 자리에 a night dive, a boat dive.",
          "use": "무슨 다이빙인지 말할 때 '저 동굴 다이빙해요'. 멕시코 세노테 맥락."
        },
        {
          "id": "d24_13",
          "tag": "trip",
          "ko": "몇 시에 가요?",
          "en": "What time do we go?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "go 자리에 leave, start, come back → What time do we leave?",
          "use": "출발 시간 물을 때 '몇 시에 가요?'. go가 '가다'보다 '떠나다' 뉘앙스."
        },
        {
          "id": "d24_14",
          "tag": "trip",
          "ko": "얼마나 걸려요?",
          "en": "How long does it take?",
          "tense": "평소",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "투어·이동 시간 '얼마나 걸려요?' 현지서 자주.",
          "apply": "앞에 끼워: How long does the boat ride / the dive take?"
        },
        {
          "id": "d24_15",
          "tag": "trip",
          "ko": "이거 안전해요?",
          "en": "Is it safe?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "safe 자리에 deep, hard, okay → Is it deep/okay?",
          "use": "겁날 때 '이거 안전해요?' 솔직히 물을 때. 초보가 꼭 챙길 한마디."
        },
        {
          "id": "d24_16",
          "tag": "trip",
          "ko": "제 공기통 확인해 주세요.",
          "en": "Can you check my tank?",
          "purpose": "ask",
          "purposeLabel": "부탁",
          "purposeMean": "네가 해줘",
          "apply": "check my tank 자리에 check my gear, hold this, take a photo.",
          "use": "입수 전 '제 공기통 좀 봐주세요' 부탁. 안전 점검이라 당연한 요청."
        },
        {
          "id": "d24_17",
          "tag": "trip",
          "ko": "저 좀 천천히 가야 해요.",
          "en": "I need to go slow.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "go slow 자리에 rest, stop, stay close → I need to rest.",
          "use": "가이드·짝에게 '저 천천히 갈게요' 미리 일러둘 때. 무리 안 한다는 신호."
        },
        {
          "id": "d24_18",
          "tag": "trip",
          "ko": "제 짝이 누구예요?",
          "en": "Who is my buddy?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "짝지어 다이빙할 때 '제 짝이 누구예요?' 물을 때. buddy는 다이빙 짝꿍."
        },
        {
          "id": "d24_19",
          "tag": "trip",
          "ko": "준비됐어요.",
          "en": "I'm ready.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "입수 직전 '저 준비됐어요' 신호. 출발해도 좋다는 뜻."
        },
        {
          "id": "d24_20",
          "tag": "trip",
          "ko": "가요.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "'가요/시작하죠' 다 같이 출발하자고 가볍게. 명령 아니라 권유."
        },
        {
          "id": "d24_21",
          "tag": "trip",
          "ko": "한 시간 걸려요.",
          "en": "It takes about an hour.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "an hour 자리에 thirty minutes, two hours.",
          "use": "걸리는 시간 답할 때 '한 시간쯤 걸려요'. about은 '대략'이라 딱 안 맞아도 OK."
        },
        {
          "id": "d24_22",
          "tag": "trip",
          "ko": "공기통 두 개요.",
          "en": "Two tanks, please.",
          "purpose": "ask",
          "purposeLabel": "요청",
          "purposeMean": "부탁",
          "apply": "Two tanks 자리에 Two wetsuits, One guide, Three masks + please.",
          "use": "탱크 주문할 때 '공기통 두 개 주세요'. please 붙여 짧고 공손하게."
        },
        {
          "id": "d24_23",
          "tag": "trip",
          "ko": "8시쯤에요.",
          "en": "Around eight.",
          "apply": "eight 자리에 nine, noon(정오), seven thirty.",
          "use": "출발 시간 답할 때 '8시쯤요'. around은 '쯤·언저리'라 정시 아니어도 됨."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "손가락으로 OK 만들어 '나 괜찮아'. 물속에서 가장 많이 쓰는 신호."
        },
        {
          "id": "d25_02",
          "tag": "trip",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "짝꿍한테 OK 신호 보내며 '너 괜찮아?'. 같은 신호로 답 받으면 안심."
        },
        {
          "id": "d25_03",
          "tag": "trip",
          "ko": "내려가.",
          "en": "Go down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "방향만 바꿔: Go up(올라가) / Go left(왼쪽) / Go that way(저쪽).",
          "use": "엄지 아래로 내리며 '내려가자'. 더 깊이 가자는 신호."
        },
        {
          "id": "d25_04",
          "tag": "trip",
          "ko": "올라가.",
          "en": "Go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "엄지 위로 올리며 '올라가자'. 다이빙에선 올라가면 곧 끝이라는 신호."
        },
        {
          "id": "d25_05",
          "tag": "trip",
          "ko": "속도 줄여.",
          "en": "Slow down.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "down 자리만 바꿔: Calm down(진정해) / Sit down(앉아).",
          "use": "너무 빨리 가는 짝꿍한테 '천천히'. 재촉이 아니라 진정시키는 톤."
        },
        {
          "id": "d25_06",
          "tag": "trip",
          "ko": "멈춰.",
          "en": "Stop.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "손바닥 펴 보이며 '멈춰'. 위험할 때 짧고 단호하게."
        },
        {
          "id": "d25_07",
          "tag": "trip",
          "ko": "가자.",
          "en": "Let's go.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "go 자리만 바꿔: Let's eat(먹자) / Let's rest(쉬자) / Let's wait(기다리자).",
          "use": "'자, 가자' 하고 출발. me 없이 같이 움직이자는 가벼운 톤."
        },
        {
          "id": "d25_08",
          "tag": "trip",
          "ko": "따라와.",
          "en": "Follow me.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "me 자리만 바꿔: Follow him(저 사람) / Follow the line(줄 따라).",
          "use": "나를 가리키고 '따라와'. 앞장서는 사람이 단호하게."
        },
        {
          "id": "d25_09",
          "tag": "trip",
          "ko": "가까이 붙어.",
          "en": "Stay close.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "멀어지는 짝꿍한테 '바짝 붙어'. 걱정돼서 챙기는 톤."
        },
        {
          "id": "d25_10",
          "tag": "trip",
          "ko": "내 손 잡아.",
          "en": "Take my hand.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "my hand 자리만: Take this(이거 받아) / Take it(가져가).",
          "use": "겁먹은 짝꿍한테 '내 손 잡아'. 안심시키는 다정한 톤."
        },
        {
          "id": "d25_11",
          "tag": "trip",
          "ko": "나 공기 부족해.",
          "en": "I'm low on air.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "low on 뒤만 바꿔: low on battery(배터리) / low on gas(기름) / low on time(시간).",
          "use": "공기 얼마 안 남았을 때 '공기 부족해'. 바로 올라가자는 신호로 이어짐."
        },
        {
          "id": "d25_12",
          "tag": "trip",
          "ko": "나 숨 못 쉬겠어.",
          "en": "I can't breathe.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "숨이 안 쉬어지는 비상 신호. 밖에선 답답하다는 뜻으로도."
        },
        {
          "id": "d25_13",
          "tag": "trip",
          "ko": "나 너 보여.",
          "en": "I can see you.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "apply": "you 자리만: I can see the boat(배) / the bottom(바닥) / the light(불빛).",
          "use": "흐린 물속에서 '너 보여' 하고 안심시킬 때."
        },
        {
          "id": "d25_14",
          "tag": "trip",
          "ko": "나 안 보여.",
          "en": "I can't see.",
          "purpose": "ask",
          "purposeLabel": "능력",
          "purposeMean": "할 수 있다·없다",
          "use": "물 흐려 아무것도 안 보일 때 '안 보여'. 눈 가리키며 다급하게."
        },
        {
          "id": "d25_15",
          "tag": "trip",
          "ko": "위로 올라가자.",
          "en": "Let's go up.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "다 같이 '올라가자' 제안. 엄지 위로 + 같이 가자는 톤."
        },
        {
          "id": "d25_16",
          "tag": "trip",
          "ko": "여기서 기다려.",
          "en": "Wait here.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "here 자리만: Wait there(거기서) / Wait outside(밖에서) / Wait for me(날).",
          "use": "'여기서 기다려', 자리 뜨지 말라고. 잠깐 갔다 올 때."
        },
        {
          "id": "d25_17",
          "tag": "trip",
          "ko": "안 괜찮아.",
          "en": "I'm not okay.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "손 좌우로 흔들며 '나 안 괜찮아'. 도움 필요하다는 신호."
        },
        {
          "id": "d25_18",
          "tag": "trip",
          "ko": "도와줘.",
          "en": "Help me.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "rel": "↔ 'Help me'는 급한 명령, 'Can you help me?'는 부탁. Can you 빠지면 명령처럼 들려요.",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "me 자리만: Help him(저 사람) / Help us(우리).",
          "use": "정말 위급할 때 '도와줘'. 어디서나 통하는 구조 요청."
        },
        {
          "id": "d25_19",
          "tag": "trip",
          "ko": "이쪽으로.",
          "en": "This way.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "apply": "this 자리만: That way(저쪽으로) / Which way?(어느 쪽?).",
          "use": "방향 가리키며 '이쪽으로'. 길·식당에서도 똑같이."
        },
        {
          "id": "d25_20",
          "tag": "trip",
          "ko": "다 됐어, 돌아가자.",
          "en": "We're done. Let's go back.",
          "compound": true,
          "use": "볼 거 다 봤고 '끝났어, 돌아가자'. done은 '다 끝났다'."
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
          "purposeMean": "~ 주세요(가게서)",
          "apply": "a menu 자리에 the check, some water, one more.",
          "use": "앉자마자 점원에게. Can I get은 '주세요'지 '내가 가질까'가 아님."
        },
        {
          "id": "d26_02",
          "tag": "trip",
          "ko": "이거 주세요.",
          "en": "Can I get this?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "this 자리에 a menu, the check, two beers.",
          "use": "메뉴 가리키며 '이거 주세요'. 손가락으로 짚으며 말하면 통함."
        },
        {
          "id": "d26_03",
          "tag": "trip",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "some water 자리에 a fork, napkins, more bread.",
          "use": "물 부탁할 때. some은 '좀'의 느낌, 양 안 정하고 편하게."
        },
        {
          "id": "d26_04",
          "tag": "trip",
          "ko": "이거 맛있어요.",
          "en": "This is good.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "먹다 맛있어서 '이거 좋네'. 주인 들으라고 칭찬해도 좋음."
        },
        {
          "id": "d26_05",
          "tag": "trip",
          "ko": "계산서 주세요.",
          "en": "Can I get the check?",
          "note": "정해진 그것엔 the. the check는 그 계산서.",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "Can I get the ~? 식당에서. check면 계산서, bill도 같은 뜻.",
          "use": "다 먹고 '계산할게요'. check이 계산서. 사인하는 시늉도 같이."
        },
        {
          "id": "d26_06",
          "tag": "trip",
          "ko": "카드 돼요?",
          "en": "Can I use a card?",
          "purpose": "ask",
          "purposeLabel": "허락",
          "purposeMean": "내가 해도 돼?",
          "apply": "a card 자리에 your phone, the bathroom.",
          "use": "계산 전에 '카드 되나요?' 현금만 받는 데 많으니 꼭."
        },
        {
          "id": "d26_07",
          "tag": "trip",
          "ko": "화장실 어디예요?",
          "en": "Where is the bathroom?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "apply": "the bathroom 자리에 the exit, the bus stop.",
          "use": "화장실 찾을 때. 손가락으로 어디냐 묻는 느낌이면 충분."
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
          "purposeMean": "그냥 그러함·~이다",
          "use": "어지럽거나 속 안 좋을 때. feel good은 기분 아니라 몸 상태."
        },
        {
          "id": "d26_09",
          "tag": "trip",
          "ko": "의사 필요해요.",
          "en": "I need a doctor.",
          "purpose": "need",
          "purposeLabel": "의무",
          "purposeMean": "어쩔 수 없이 해야 함",
          "apply": "a doctor 자리에 some water, a taxi, help.",
          "use": "아파서 도움 청할 때 단호하게. 급하면 주위에 크게."
        },
        {
          "id": "d26_10",
          "tag": "trip",
          "ko": "도와주세요.",
          "en": "Help me, please.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "급할 때 '도와주세요'. please 붙이면 덜 다급한 부탁 톤."
        },
        {
          "id": "d26_11",
          "tag": "trip",
          "ko": "이거 안 시켰어요.",
          "en": "I didn't order this.",
          "tense": "과거",
          "purpose": "action",
          "purposeLabel": "행동",
          "purposeMean": "무언가를 함",
          "use": "엉뚱한 게 나왔을 때. 따지지 말고 담담히 말하면 됨."
        },
        {
          "id": "d26_12",
          "tag": "trip",
          "ko": "얼마예요?",
          "en": "How much is it?",
          "purpose": "ask",
          "purposeLabel": "질문",
          "purposeMean": "궁금해서 물음",
          "use": "값 물을 때. 시장·가게서 물건 가리키며 같이 쓰면 좋음."
        },
        {
          "id": "d26_13",
          "tag": "trip",
          "ko": "정말 맛있었어요.",
          "en": "It was really good.",
          "tense": "과거",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "식사 끝나고 주인에게. 지난 일이라 was로 과거."
        },
        {
          "id": "d26_14",
          "tag": "trip",
          "ko": "너무 매워요.",
          "en": "It's too spicy.",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "apply": "too spicy 자리에 too cold, too salty, too much.",
          "use": "매워서 솔직한 반응. 불평 아님, 멕시코선 자주 쓸 말."
        },
        {
          "id": "d26_15",
          "tag": "trip",
          "ko": "하나 더 주세요.",
          "en": "Can I get one more?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "apply": "one more 자리에 the check, some water.",
          "use": "더 시킬 때. 빈 잔·접시 가리키며 말하면 확실."
        },
        {
          "id": "d26_16",
          "tag": "trip",
          "ko": "포장돼요?",
          "en": "Can I get this to go?",
          "purpose": "ask",
          "purposeLabel": "주문",
          "purposeMean": "~ 주세요(가게서)",
          "use": "남은 거 싸 갈 때. to go가 '가져가는'. 멕시코선 para llevar."
        },
        {
          "id": "d26_17",
          "tag": "trip",
          "ko": "고마워요.",
          "en": "Thank you.",
          "use": "고마울 때. 멕시코선 그라시아스, 영어로도 다 통함."
        },
        {
          "id": "d26_18",
          "tag": "trip",
          "ko": "정말 좋았어요.",
          "en": "It was great.",
          "tense": "과거",
          "purpose": "state",
          "purposeLabel": "상태",
          "purposeMean": "그냥 그러함·~이다",
          "use": "헤어지며 한마디. 음식·시간 다 묶어 통째 칭찬, was로 과거."
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
          "purposeMean": "무언가를 함",
          "use": "마음에 든 가게 떠나며. I'll은 그 자리서 정한 약속 느낌."
        },
        {
          "id": "d26_20",
          "tag": "trip",
          "ko": "잘 지내요.",
          "en": "Take care.",
          "purpose": "tell",
          "purposeLabel": "명령",
          "purposeMean": "상대에게 시킴·하자",
          "use": "작별 인사. Take care는 '조심해'보다 '몸 챙겨'에 가까운 끝인사."
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
          "purposeMean": "무언가를 함",
          "apply": "two 자리에 this one, that one, three.",
          "use": "물건 살 때. take를 '사겠다'로, I'll은 즉석 결정."
        },
        {
          "id": "d26_22",
          "tag": "trip",
          "ko": "맥주 두 잔 주세요.",
          "en": "Two beers, please.",
          "purpose": "ask",
          "purposeLabel": "요청",
          "purposeMean": "부탁",
          "apply": "Two beers 자리에 Two coffees, Two waters.",
          "use": "술집서 주문. please만 붙이면 충분히 정중, 문장 안 만들어도 됨."
        },
        {
          "id": "d26_23",
          "tag": "trip",
          "ko": "하나면 돼요.",
          "en": "Just one.",
          "purpose": "want",
          "purposeLabel": "욕구",
          "purposeMean": "하고 싶음·원함",
          "use": "더 권할 때 사양하며. 딱 잘라 '됐어요'의 부드러운 거절."
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
          "note": "마셔? 운전해? 처럼 무슨 행동을 하는지 물으면 Do you.",
          "use": "상대 습관 물어볼 때. '너 커피 마시는 사람이야?' 가볍게.",
          "apply": "Do you + drink coffee / smoke / drive."
        },
        {
          "id": "d29_02",
          "tag": "사실",
          "ko": "너 운전해?",
          "en": "Do you drive?",
          "use": "평소 운전하나 물을 때. 렌터카 얘기 나오면 딱.",
          "apply": "Do you + drive / cook / swim 으로 '평소 ~해?'"
        },
        {
          "id": "d29_03",
          "tag": "사실",
          "ko": "너 영어 해?",
          "en": "Do you speak English?",
          "use": "현지서 영어 통하나 볼 때. 점원·직원에게 먼저 '영어 돼요?'",
          "apply": "Do you speak + English / Spanish / Korean."
        },
        {
          "id": "d29_04",
          "tag": "사실",
          "ko": "너 그거 알아?",
          "en": "Do you know it?",
          "note": "알아? 는 아? 로 끝나도 Do you 예요. 두유노잇 통째로 외워요.",
          "use": "상대가 그걸 아는지 확인. '이 식당 알아?'처럼.",
          "apply": "Do you know + this / the way / him."
        },
        {
          "id": "d29_05",
          "tag": "상태",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "note": "괜찮아? 배고파? 준비됐어? 처럼 상태를 물으면 Are you. 어유오케이는 통째로.",
          "use": "넘어졌거나 안색 안 좋은 사람한테 걱정하며 '괜찮아요?'",
          "apply": "Are you + okay / ready / hurt."
        },
        {
          "id": "d29_06",
          "tag": "상태",
          "ko": "너 준비됐어?",
          "en": "Are you ready?",
          "note": "어유레디. 통째로.",
          "use": "출발·시작 직전 '다 됐어?' 챙길 때. 재촉 아니고 확인."
        },
        {
          "id": "d29_07",
          "tag": "상태",
          "ko": "너 배고파?",
          "en": "Are you hungry?",
          "use": "밥 권하기 전 '배고파요?' 상대 상태 살피며.",
          "apply": "Are you + hungry / tired / cold 로 상태 묻기."
        },
        {
          "id": "d29_08",
          "tag": "상태",
          "ko": "너 거기 있어?",
          "en": "Are you there?",
          "note": "거기 있어? 는 어디 있나(상태)라 Are you. ('시간 있어?'는 가짐이라 Do you.)",
          "use": "전화·문자로 '거기 있어?' 상대 있나 확인할 때. 노크하듯."
        },
        {
          "id": "d29_09",
          "tag": "부탁",
          "ko": "도와줄래?",
          "en": "Can you help me?",
          "note": "Can you ~? = 해줄래?(상대가 해줌).",
          "use": "남한테 도움 청할 때. '저 좀 도와주실래요?' 공손한 부탁.",
          "apply": "Can you + help me / fix this / wait 로 부탁 늘리기."
        },
        {
          "id": "d29_10",
          "tag": "부탁",
          "ko": "천천히 말해 줄래?",
          "en": "Can you speak slowly?",
          "use": "영어 빨라 못 알아들을 때. '천천히요?' 여행 필수.",
          "apply": "Can you speak + slowly / louder / again."
        },
        {
          "id": "d29_11",
          "tag": "부탁",
          "ko": "이거 고쳐 줄래?",
          "en": "Can you fix this?",
          "use": "고장난 거 보여주며 '이거 고쳐 줄래요?' 직원·기사에게.",
          "apply": "Can you fix + this / my phone / the door."
        },
        {
          "id": "d29_12",
          "tag": "부탁",
          "ko": "사진 찍어 줄래?",
          "en": "Can you take a photo?",
          "use": "지나가는 사람한테 폰 내밀며 '사진 좀 찍어 줄래요?' 여행 단골.",
          "apply": "Can you take + a photo / a picture of us."
        },
        {
          "id": "d29_13",
          "tag": "허락",
          "ko": "화장실 써도 돼?",
          "en": "Can I use the bathroom?",
          "note": "Can I + 동사 = 내가 해도 돼?(허락).",
          "use": "가게·남의 집서 '화장실 써도 돼요?' 허락 구할 때.",
          "apply": "Can I use + the bathroom / your phone / the wifi."
        },
        {
          "id": "d29_14",
          "tag": "허락",
          "ko": "나 들어가도 돼?",
          "en": "Can I come in?",
          "use": "문 앞에서 '들어가도 돼요?' 노크하고 허락 받을 때. 공손."
        },
        {
          "id": "d29_15",
          "tag": "허락",
          "ko": "나 여기 앉아도 돼?",
          "en": "Can I sit here?",
          "use": "빈자리 앞에서 옆사람에게 '여기 앉아도 돼요?' 양해 구할 때.",
          "apply": "Can I + sit here / park here / stay here."
        },
        {
          "id": "d29_16",
          "tag": "허락",
          "ko": "나 네 펜 써도 돼?",
          "en": "Can I use your pen?",
          "use": "남의 물건 잠깐 빌릴 때 '펜 좀 써도 돼요?' 먼저 허락받고.",
          "apply": "Can I use your + pen / phone / charger."
        },
        {
          "id": "d29_17",
          "tag": "주문",
          "ko": "커피 하나 주세요.",
          "en": "Can I get a coffee?",
          "note": "Can I get + 물건 = ~ 주세요(가게 주문).",
          "use": "카페·식당서 주문할 때. '주세요'란 뜻, 무례 아닌 정상 주문어.",
          "apply": "Can I get + a coffee / the bill / two of these."
        },
        {
          "id": "d29_18",
          "tag": "주문",
          "ko": "물 좀 주세요.",
          "en": "Can I get some water?",
          "use": "식당서 물 청할 때 '물 좀 주세요'. 손짓 더하면 더 잘 통함.",
          "apply": "Can I get some + water / ice / napkins."
        },
        {
          "id": "d29_19",
          "tag": "주문",
          "ko": "메뉴판 주세요.",
          "en": "Can I get a menu?",
          "use": "자리 앉아 '메뉴판 좀 주세요'. 주문 시작 신호."
        },
        {
          "id": "d29_20",
          "tag": "주문",
          "ko": "하나 더 주세요.",
          "en": "Can I get one more?",
          "note": "'주세요'는 Can I get. '~해도 돼?'(허락)랑 달라요.",
          "use": "맛있어서 '하나 더 주세요' 추가 주문. 음료·접시 가리키며.",
          "apply": "Can I get + one more / another / the same."
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
    },
    {
      "day": 33,
      "verb": "아임/아이",
      "phase": "시작어 스프린트 · 첫 단어 0.1초",
      "ready": true,
      "sprint": true,
      "title": "시작어 스프린트 · 아임 vs 아이",
      "concept": "오늘은 나 얘기예요. 나로 시작할 때 아임이냐 아이냐. 이게 어유 두유랑 똑같은 갈림이에요. 기분이나 상태, 어디 있는지면 아임. 나 괜찮아 I'm okay, 나 여기 있어 I'm here. 뭘 가졌거나 하거나 필요하면 아이 더하기 동사. 나 차 있어 I have, 나 필요해 I need, 나 할 수 있어 I can. 조심할 거 하나. 같은 있어인데 갈려요. 여기 있어는 자리라서 아임, 차 있어는 가졌다라서 아이. 들으면 바로 아임이냐 아이냐 한 마디. 굳히고, 번갈아, 섞어요.",
      "items": [
        {
          "id": "s33_01",
          "sprint": true,
          "onset": "I'm",
          "round": 1,
          "koRef": "d1_01",
          "ko": "나 괜찮아.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_02",
          "sprint": true,
          "onset": "I'm",
          "round": 1,
          "koRef": "d1_05",
          "ko": "나 배고파.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_03",
          "sprint": true,
          "onset": "I'm",
          "round": 1,
          "koRef": "d1_03",
          "ko": "나 준비됐어.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_04",
          "sprint": true,
          "onset": "I",
          "round": 1,
          "koRef": "d3_01",
          "ko": "나 차 있어.",
          "en": "I have",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        },
        {
          "id": "s33_05",
          "sprint": true,
          "onset": "I",
          "round": 1,
          "koRef": "d16_08",
          "ko": "나 이거 필요해.",
          "en": "I need",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        },
        {
          "id": "s33_06",
          "sprint": true,
          "onset": "I",
          "round": 1,
          "koRef": "d15_01",
          "ko": "나 할 수 있어.",
          "en": "I can",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        },
        {
          "id": "s33_07",
          "sprint": true,
          "onset": "I'm",
          "round": 2,
          "koRef": "d1_07",
          "ko": "나 여기 있어.",
          "en": "I'm",
          "note": "여기 있어 = 자리(상태) → 아임 (I'm here). '차 있어'(I have)랑 갈려."
        },
        {
          "id": "s33_08",
          "sprint": true,
          "onset": "I",
          "round": 2,
          "koRef": "d3_01",
          "ko": "나 차 있어.",
          "en": "I have",
          "note": "차 있어 = 가졌다 → 아이 (I have). '여기 있어'(I'm)랑 갈려."
        },
        {
          "id": "s33_09",
          "sprint": true,
          "onset": "I'm",
          "round": 2,
          "koRef": "d1_06",
          "ko": "나 피곤해.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_10",
          "sprint": true,
          "onset": "I",
          "round": 2,
          "koRef": "d4_07",
          "ko": "나 가야 해.",
          "en": "I have to",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        },
        {
          "id": "s33_11",
          "sprint": true,
          "onset": "I'm",
          "round": 2,
          "koRef": "d13_07",
          "ko": "나 거의 다 왔어.",
          "en": "I'm",
          "note": "거의 다 왔어 = 상태 → 아임 (I'm almost there)."
        },
        {
          "id": "s33_12",
          "sprint": true,
          "onset": "I",
          "round": 2,
          "koRef": "d14_04",
          "ko": "나 가고 싶어.",
          "en": "I want to",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        },
        {
          "id": "s33_13",
          "sprint": true,
          "onset": "I'm",
          "round": 3,
          "koRef": "d1_05",
          "ko": "나 배고파.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_14",
          "sprint": true,
          "onset": "I",
          "round": 3,
          "koRef": "d3_03",
          "ko": "나 시간 없어.",
          "en": "I don't have",
          "note": "시간 없어 = 가짐(없음) → 아이 (I don't have)."
        },
        {
          "id": "s33_15",
          "sprint": true,
          "onset": "I'm",
          "round": 3,
          "koRef": "d1_01",
          "ko": "나 괜찮아.",
          "en": "I'm",
          "note": "기분·상태·자리 → 아임 (I'm)."
        },
        {
          "id": "s33_16",
          "sprint": true,
          "onset": "I",
          "round": 3,
          "koRef": "d16_08",
          "ko": "나 이거 필요해.",
          "en": "I need",
          "note": "가짐·함·필요 → 아이 + 동사 (I + 동사, 'm 없음)."
        }
      ]
    },
    {
      "day": 34,
      "verb": "변신",
      "phase": "한 문장 변신 · 손잡이 돌리기",
      "ready": true,
      "dlabel": "변신",
      "title": "한 문장 변신 · 시간·부정·질문",
      "concept": "오늘은 좀 특별해요. 새 문장 안 배워요. 아는 문장 하나를 붙잡고 손잡이만 돌려볼 거예요. 나 집에 가, I go home. 이 문장 그대로 두고 시간 손잡이를 돌리면, 어제는 I went home, 내일은 I'll go home, 지금은 I'm going home. 보세요, 집에 가는 건 그대론데 동사만 변하죠. 아니라고 하려면 don't 한 칸 끼워서 I don't go home. 물어보려면 앞에 Do you 붙여서 Do you go home. 같은 문장에 손잡이 여섯 개. 이걸 네 문장으로 계속 돌려볼 거예요. 외우는 게 아니라, 구조가 이만큼 바뀌면 뜻이 이만큼 바뀐다, 그 느낌만 손에 익히면 어떤 문장이든 스스로 바꿔 말할 수 있어요.",
      "items": [
        {
          "id": "d34_01",
          "tag": "평소",
          "ko": "나 집에 가.",
          "en": "I go home.",
          "note": "평소·늘 하는 일은 그냥 원형. I go."
        },
        {
          "id": "d34_02",
          "tag": "과거",
          "ko": "나 집에 갔어.",
          "en": "I went home.",
          "note": "go의 과거는 went — 통째로 바뀌어(ed 아님). home은 그대로."
        },
        {
          "id": "d34_03",
          "tag": "미래",
          "ko": "나 집에 갈 거야.",
          "en": "I'll go home.",
          "note": "미래는 앞에 I'll. 동사는 원형 go 그대로."
        },
        {
          "id": "d34_04",
          "tag": "지금",
          "ko": "나 집에 가는 중이야.",
          "en": "I'm going home.",
          "note": "지금 하는 중은 I'm + 동사ing(going)."
        },
        {
          "id": "d34_05",
          "tag": "부정",
          "ko": "나 집에 안 가.",
          "en": "I don't go home.",
          "note": "아니라고 할 땐 don't 한 칸 끼우기. go는 그대로."
        },
        {
          "id": "d34_06",
          "tag": "질문",
          "ko": "너 집에 가?",
          "en": "Do you go home?",
          "note": "물어보면 앞에 Do you 붙이기. go는 그대로."
        },
        {
          "id": "d34_07",
          "tag": "평소",
          "ko": "나 점심 먹어.",
          "en": "I eat lunch."
        },
        {
          "id": "d34_08",
          "tag": "과거",
          "ko": "나 점심 먹었어.",
          "en": "I ate lunch.",
          "note": "eat의 과거는 ate — 또 통째로 바뀜."
        },
        {
          "id": "d34_09",
          "tag": "미래",
          "ko": "나 점심 먹을 거야.",
          "en": "I'll eat lunch."
        },
        {
          "id": "d34_10",
          "tag": "지금",
          "ko": "나 점심 먹는 중이야.",
          "en": "I'm eating lunch."
        },
        {
          "id": "d34_11",
          "tag": "부정",
          "ko": "나 점심 안 먹어.",
          "en": "I don't eat lunch."
        },
        {
          "id": "d34_12",
          "tag": "질문",
          "ko": "너 점심 먹어?",
          "en": "Do you eat lunch?"
        },
        {
          "id": "d34_13",
          "tag": "평소",
          "ko": "나 커피 마셔.",
          "en": "I drink coffee."
        },
        {
          "id": "d34_14",
          "tag": "과거",
          "ko": "나 커피 마셨어.",
          "en": "I drank coffee.",
          "note": "drink의 과거는 drank — 또 통째로."
        },
        {
          "id": "d34_15",
          "tag": "미래",
          "ko": "나 커피 마실 거야.",
          "en": "I'll drink coffee."
        },
        {
          "id": "d34_16",
          "tag": "지금",
          "ko": "나 커피 마시는 중이야.",
          "en": "I'm drinking coffee."
        },
        {
          "id": "d34_17",
          "tag": "부정",
          "ko": "나 커피 안 마셔.",
          "en": "I don't drink coffee."
        },
        {
          "id": "d34_18",
          "tag": "질문",
          "ko": "너 커피 마셔?",
          "en": "Do you drink coffee?"
        },
        {
          "id": "d34_19",
          "tag": "평소",
          "ko": "나 일해.",
          "en": "I work."
        },
        {
          "id": "d34_20",
          "tag": "과거",
          "ko": "나 일했어.",
          "en": "I worked.",
          "note": "work는 규칙! 뒤에 ed 붙여 worked. went·ate·drank처럼 안 바뀌는 것도 있어요."
        },
        {
          "id": "d34_21",
          "tag": "미래",
          "ko": "나 일할 거야.",
          "en": "I'll work."
        },
        {
          "id": "d34_22",
          "tag": "지금",
          "ko": "나 일하는 중이야.",
          "en": "I'm working."
        },
        {
          "id": "d34_23",
          "tag": "부정",
          "ko": "나 일 안 해.",
          "en": "I don't work."
        },
        {
          "id": "d34_24",
          "tag": "질문",
          "ko": "너 일해?",
          "en": "Do you work?"
        }
      ]
    },
    {
      "day": 35,
      "verb": "변신",
      "phase": "한 문장 변신 · 손잡이 돌리기",
      "ready": true,
      "dlabel": "변신 ②",
      "title": "한 문장 변신 ② · 평문↔질문↔부정",
      "concept": "오늘은 평문을 질문이랑 부정으로 돌려요. 제일 중요한 거 하나. 물어볼 때 앞에 붙는 말이 문장마다 달라요. 기분이나 상태면 어유, Are you okay. 가졌냐고 물으면 두유 해브, Do you have time. 행동이나 원하는 거면 두유, Do you drink coffee. 할 수 있냐면 캔유, Can you swim. 같은 너 ~? 인데 앞말이 갈리죠. 아니라고 할 땐, be 문장은 not, 나머지는 don't, 할 수 있다는 can't. 다 아는 문장으로 돌려볼 거예요. 평문 하나만 알면 질문도 부정도 따라와요.",
      "items": [
        {
          "id": "d35_01",
          "tag": "평문",
          "ko": "나 괜찮아.",
          "en": "I'm okay.",
          "note": "기분·상태 문장."
        },
        {
          "id": "d35_02",
          "tag": "질문",
          "ko": "너 괜찮아?",
          "en": "Are you okay?",
          "note": "상태를 물으면 앞에 Are you (두유 아님)."
        },
        {
          "id": "d35_03",
          "tag": "부정",
          "ko": "나 안 괜찮아.",
          "en": "I'm not okay.",
          "note": "be 문장 부정은 not."
        },
        {
          "id": "d35_04",
          "tag": "평문",
          "ko": "나 준비됐어.",
          "en": "I'm ready."
        },
        {
          "id": "d35_05",
          "tag": "질문",
          "ko": "너 준비됐어?",
          "en": "Are you ready?",
          "note": "이것도 상태라 Are you."
        },
        {
          "id": "d35_06",
          "tag": "부정",
          "ko": "나 준비 안 됐어.",
          "en": "I'm not ready."
        },
        {
          "id": "d35_07",
          "tag": "평문",
          "ko": "나 시간 있어.",
          "en": "I have time.",
          "note": "가지고 있다는 문장."
        },
        {
          "id": "d35_08",
          "tag": "질문",
          "ko": "너 시간 있어?",
          "en": "Do you have time?",
          "note": "가졌냐고 물으면 Do you have."
        },
        {
          "id": "d35_09",
          "tag": "부정",
          "ko": "나 시간 없어.",
          "en": "I don't have time.",
          "note": "가짐 부정은 don't have."
        },
        {
          "id": "d35_10",
          "tag": "평문",
          "ko": "나 물 마시고 싶어.",
          "en": "I want water.",
          "note": "원함·욕구 문장."
        },
        {
          "id": "d35_11",
          "tag": "질문",
          "ko": "너 물 마실래?",
          "en": "Do you want water?",
          "note": "원하냐고 물으면 Do you."
        },
        {
          "id": "d35_12",
          "tag": "부정",
          "ko": "나 물 안 마실래.",
          "en": "I don't want water."
        },
        {
          "id": "d35_13",
          "tag": "평문",
          "ko": "나 수영할 수 있어.",
          "en": "I can swim.",
          "note": "할 수 있다는 문장."
        },
        {
          "id": "d35_14",
          "tag": "질문",
          "ko": "너 수영할 수 있어?",
          "en": "Can you swim?",
          "note": "할 수 있냐고 물으면 Can you."
        },
        {
          "id": "d35_15",
          "tag": "부정",
          "ko": "나 수영 못 해.",
          "en": "I can't swim.",
          "note": "can 부정은 can't."
        },
        {
          "id": "d35_16",
          "tag": "평문",
          "ko": "나 커피 마셔.",
          "en": "I drink coffee.",
          "note": "평소 하는 행동 문장."
        },
        {
          "id": "d35_17",
          "tag": "질문",
          "ko": "너 커피 마셔?",
          "en": "Do you drink coffee?",
          "note": "행동을 물으면 Do you."
        },
        {
          "id": "d35_18",
          "tag": "부정",
          "ko": "나 커피 안 마셔.",
          "en": "I don't drink coffee."
        }
      ]
    },
    {
      "day": 36,
      "verb": "변신",
      "phase": "한 문장 변신 · 손잡이 돌리기",
      "ready": true,
      "dlabel": "변신 ③",
      "title": "한 문장 변신 ③ · 상태·필요",
      "concept": "오늘도 평문을 질문이랑 부정으로 돌려요. 내 상태랑 필요한 걸로요. 기분이나 몸 상태는 be 문장이라 물을 때 어유, Are you hungry. 필요한 건 need 문장이라 두유, Do you need help. 둘 다 내 얘기지만 묻는 앞말이 갈리죠. 아니라고 할 땐, 상태는 I'm not, 필요는 I don't need. 다 아는 문장이에요. 평문만 잡으면 질문도 부정도 따라와요.",
      "items": [
        {
          "id": "d36_01",
          "tag": "평문",
          "ko": "나 배고파.",
          "en": "I'm hungry.",
          "note": "몸 상태 문장."
        },
        {
          "id": "d36_02",
          "tag": "질문",
          "ko": "너 배고파?",
          "en": "Are you hungry?",
          "note": "상태 물으면 Are you."
        },
        {
          "id": "d36_03",
          "tag": "부정",
          "ko": "나 안 배고파.",
          "en": "I'm not hungry.",
          "note": "be 부정은 not."
        },
        {
          "id": "d36_04",
          "tag": "평문",
          "ko": "나 피곤해.",
          "en": "I'm tired."
        },
        {
          "id": "d36_05",
          "tag": "질문",
          "ko": "너 피곤해?",
          "en": "Are you tired?"
        },
        {
          "id": "d36_06",
          "tag": "부정",
          "ko": "나 안 피곤해.",
          "en": "I'm not tired."
        },
        {
          "id": "d36_07",
          "tag": "평문",
          "ko": "나 행복해.",
          "en": "I'm happy."
        },
        {
          "id": "d36_08",
          "tag": "질문",
          "ko": "너 행복해?",
          "en": "Are you happy?"
        },
        {
          "id": "d36_09",
          "tag": "부정",
          "ko": "나 안 행복해.",
          "en": "I'm not happy."
        },
        {
          "id": "d36_10",
          "tag": "평문",
          "ko": "나 도움 필요해.",
          "en": "I need help.",
          "note": "필요한 거 문장."
        },
        {
          "id": "d36_11",
          "tag": "질문",
          "ko": "너 도움 필요해?",
          "en": "Do you need help?",
          "note": "필요는 Do you need."
        },
        {
          "id": "d36_12",
          "tag": "부정",
          "ko": "나 도움 필요 없어.",
          "en": "I don't need help.",
          "note": "필요 부정은 don't need."
        },
        {
          "id": "d36_13",
          "tag": "평문",
          "ko": "나 물 필요해.",
          "en": "I need water."
        },
        {
          "id": "d36_14",
          "tag": "질문",
          "ko": "너 물 필요해?",
          "en": "Do you need water?"
        },
        {
          "id": "d36_15",
          "tag": "부정",
          "ko": "나 물 필요 없어.",
          "en": "I don't need water."
        },
        {
          "id": "d36_16",
          "tag": "평문",
          "ko": "나 의사 필요해.",
          "en": "I need a doctor."
        },
        {
          "id": "d36_17",
          "tag": "질문",
          "ko": "너 의사 필요해?",
          "en": "Do you need a doctor?",
          "note": "아픈 사람 챙길 때도."
        },
        {
          "id": "d36_18",
          "tag": "부정",
          "ko": "나 의사 필요 없어.",
          "en": "I don't need a doctor."
        }
      ]
    },
    {
      "day": 37,
      "verb": "변신",
      "phase": "한 문장 변신 · 손잡이 돌리기",
      "ready": true,
      "dlabel": "변신 ④",
      "title": "한 문장 변신 ④ · 가짐·능력",
      "concept": "오늘은 가진 거랑 할 수 있는 걸 돌려요. 가졌냐고 물으면 두유 해브, Do you have a car. 할 수 있냐면 캔유, Can you drive. 아니라고 할 땐, 가짐은 I don't have, 능력은 I can't. 여행에서 많이 써요. Do you have a reservation, 예약 있어요? 같은 거요. 다 아는 문장으로 돌려봐요.",
      "items": [
        {
          "id": "d37_01",
          "tag": "평문",
          "ko": "나 차 있어.",
          "en": "I have a car.",
          "note": "가짐 문장."
        },
        {
          "id": "d37_02",
          "tag": "질문",
          "ko": "너 차 있어?",
          "en": "Do you have a car?",
          "note": "가졌냐는 Do you have."
        },
        {
          "id": "d37_03",
          "tag": "부정",
          "ko": "나 차 없어.",
          "en": "I don't have a car.",
          "note": "가짐 부정은 don't have."
        },
        {
          "id": "d37_04",
          "tag": "평문",
          "ko": "나 질문 있어.",
          "en": "I have a question."
        },
        {
          "id": "d37_05",
          "tag": "질문",
          "ko": "너 질문 있어?",
          "en": "Do you have a question?"
        },
        {
          "id": "d37_06",
          "tag": "부정",
          "ko": "나 질문 없어.",
          "en": "I don't have any questions.",
          "note": "질문 없다는 보통 any questions(복수)로 말해."
        },
        {
          "id": "d37_07",
          "tag": "평문",
          "ko": "나 예약 있어.",
          "en": "I have a reservation."
        },
        {
          "id": "d37_08",
          "tag": "질문",
          "ko": "예약 있어요?",
          "en": "Do you have a reservation?",
          "note": "호텔·식당서 많이 들어."
        },
        {
          "id": "d37_09",
          "tag": "부정",
          "ko": "나 예약 없어.",
          "en": "I don't have a reservation."
        },
        {
          "id": "d37_10",
          "tag": "평문",
          "ko": "나 운전할 수 있어.",
          "en": "I can drive.",
          "note": "능력 문장."
        },
        {
          "id": "d37_11",
          "tag": "질문",
          "ko": "너 운전할 수 있어?",
          "en": "Can you drive?",
          "note": "할 수 있냐는 Can you."
        },
        {
          "id": "d37_12",
          "tag": "부정",
          "ko": "나 운전 못 해.",
          "en": "I can't drive.",
          "note": "can 부정은 can't."
        },
        {
          "id": "d37_13",
          "tag": "평문",
          "ko": "나 도와줄 수 있어.",
          "en": "I can help you."
        },
        {
          "id": "d37_14",
          "tag": "질문",
          "ko": "도와줄 수 있어요?",
          "en": "Can you help me?",
          "note": "물을 땐 you→me. 도와달라는 부탁."
        },
        {
          "id": "d37_15",
          "tag": "부정",
          "ko": "나 못 도와줘.",
          "en": "I can't help you."
        },
        {
          "id": "d37_16",
          "tag": "평문",
          "ko": "나 영어 할 줄 알아.",
          "en": "I can speak English."
        },
        {
          "id": "d37_17",
          "tag": "질문",
          "ko": "영어 할 줄 알아요?",
          "en": "Can you speak English?",
          "note": "여행서 많이 써."
        },
        {
          "id": "d37_18",
          "tag": "부정",
          "ko": "나 영어 잘 못해.",
          "en": "I can't speak English."
        }
      ]
    },
    {
      "day": 38,
      "verb": "변신",
      "phase": "한 문장 변신 · 손잡이 돌리기",
      "ready": true,
      "dlabel": "변신 ⑤",
      "title": "한 문장 변신 ⑤ · 원함·일상",
      "concept": "오늘은 원하는 거랑 평소 하는 걸 돌려요. 하고 싶냐고 물으면 두유 원투, Do you want to go. 평소 그러냐고 물어도 두유, Do you like this. 둘 다 두유로 물어요. 아니라고 할 땐 don't. 가고 싶어 I want to go, 가고 싶어? Do you want to go, 가기 싫어 I don't want to go. want 뒤에 to 동사가 붙으면 하고 싶다예요. 다 아는 문장이에요.",
      "items": [
        {
          "id": "d38_01",
          "tag": "평문",
          "ko": "나 가고 싶어.",
          "en": "I want to go.",
          "note": "하고 싶다 = want to + 동사.",
          "enSpoken": "I wanna go."
        },
        {
          "id": "d38_02",
          "tag": "질문",
          "ko": "너 가고 싶어?",
          "en": "Do you want to go?",
          "note": "하고 싶냐는 Do you want to.",
          "enSpoken": "Do you wanna go?"
        },
        {
          "id": "d38_03",
          "tag": "부정",
          "ko": "나 가기 싫어.",
          "en": "I don't want to go.",
          "note": "하기 싫다 = don't want to.",
          "enSpoken": "I don't wanna go."
        },
        {
          "id": "d38_04",
          "tag": "평문",
          "ko": "나 자고 싶어.",
          "en": "I want to sleep.",
          "enSpoken": "I wanna sleep."
        },
        {
          "id": "d38_05",
          "tag": "질문",
          "ko": "너 자고 싶어?",
          "en": "Do you want to sleep?",
          "enSpoken": "Do you wanna sleep?"
        },
        {
          "id": "d38_06",
          "tag": "부정",
          "ko": "나 자기 싫어.",
          "en": "I don't want to sleep.",
          "enSpoken": "I don't wanna sleep."
        },
        {
          "id": "d38_07",
          "tag": "평문",
          "ko": "나 쉬고 싶어.",
          "en": "I want to rest.",
          "enSpoken": "I wanna rest."
        },
        {
          "id": "d38_08",
          "tag": "질문",
          "ko": "너 쉬고 싶어?",
          "en": "Do you want to rest?",
          "enSpoken": "Do you wanna rest?"
        },
        {
          "id": "d38_09",
          "tag": "부정",
          "ko": "나 쉬기 싫어.",
          "en": "I don't want to rest.",
          "enSpoken": "I don't wanna rest."
        },
        {
          "id": "d38_10",
          "tag": "평문",
          "ko": "나 집에 가고 싶어.",
          "en": "I want to go home.",
          "enSpoken": "I wanna go home."
        },
        {
          "id": "d38_11",
          "tag": "질문",
          "ko": "너 집에 가고 싶어?",
          "en": "Do you want to go home?",
          "enSpoken": "Do you wanna go home?"
        },
        {
          "id": "d38_12",
          "tag": "부정",
          "ko": "나 집에 가기 싫어.",
          "en": "I don't want to go home.",
          "enSpoken": "I don't wanna go home."
        },
        {
          "id": "d38_13",
          "tag": "평문",
          "ko": "나 이거 좋아.",
          "en": "I like this.",
          "note": "취향 문장."
        },
        {
          "id": "d38_14",
          "tag": "질문",
          "ko": "너 이거 좋아?",
          "en": "Do you like this?",
          "note": "좋아하냐는 Do you."
        },
        {
          "id": "d38_15",
          "tag": "부정",
          "ko": "나 이거 별로야.",
          "en": "I don't like this."
        },
        {
          "id": "d38_16",
          "tag": "평문",
          "ko": "나 일찍 일어나.",
          "en": "I get up early.",
          "note": "평소 하는 일 문장."
        },
        {
          "id": "d38_17",
          "tag": "질문",
          "ko": "너 일찍 일어나?",
          "en": "Do you get up early?",
          "note": "평소 그러냐는 Do you."
        },
        {
          "id": "d38_18",
          "tag": "부정",
          "ko": "나 일찍 안 일어나.",
          "en": "I don't get up early."
        }
      ]
    }
  ]
};
