# RULES — 영어 엔진 (매 세션 잊지 말 것)

1. **검증 전 선언 금지.** "됐다/반영됐다"는 라이브 폴링(https://oxokr.github.io/english-engine/)으로 확인한 뒤에만. 테스트·exit code·라벨 수는 실행한 뒤 적는다.
2. **자율 진행.** 어차피 다 해야 할 단계는 묻지 말고 진행+보고. 멈춤은 되돌리기 어려움·외부 publishing·money에서만.
3. **콘텐츠 수정 위치를 정확히 구분** (제일 자주 헷갈림):
   - 기본 문장(ko/en) 추가·수정 → **curriculum.js 직접 OK** (Day27~29는 enhance.py의 mk()/TENSE_DAYS 정의부).
   - 보강 필드(concept/note/tense/purpose/scene/eq/rel/compound) → **enhance.py에서만.** curriculum.js에서 고치면 다음 `python3 enhance.py`가 덮어쓴다.
   - enhance.py는 curriculum.js를 *지우고 새로 만드는 게 아니라* read→보강→같은 파일 write-back(in-place)이다.
4. **음성 갱신은 rm 후 재생성.** 내용 바뀐 id의 `audio/<id>_ko.mp3`·`_en.mp3`(+장면 `_scene.mp3`)를 rm. **개념(concept) 바꾸면 `audio/d<day>_intro.mp3`도 rm.** 안 지우면 generate_audio.py가 "있음"으로 건너뛰어 옛 음성 유지.
5. **코드(html/js) 바꾸면 sw.js의 CACHE 버전 +1.** 안 올리면 폰 미반영. 코드=네트워크우선/mp3=캐시우선 전략(v28)은 되돌리지 말 것.
6. **tts_api.txt 절대 커밋 금지.** OpenAI 키. .gitignore로 차단됨 — 유지.
7. **라벨/분류는 적대검증 필수.** 시제·목적 태그는 모양만 보면 자주 틀림("Do you~"를 행동으로 오분류, 첫 분류 41개+ 틀림). 뜻 기반 + 반대편 검증, 첫 라벨 불신.
8. **nin 학습철학 우선.** 쉽게/적게, 문법용어 회피(동작/상태 대신 한국어 끝소리·통문장), 차 안 오디오 위주. 복잡하면 실패 — 단순함이 정답.
