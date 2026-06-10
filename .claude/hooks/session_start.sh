#!/usr/bin/env bash
# 범용 SessionStart hook — 세션 연속성 자동 주입 (harness 강제, 모델 재량 아님).
# 어느 프로젝트든 .claude/ 아래 두면 동작한다. 프로젝트 특화는 아래 [커스터마이즈] 5줄 +
# 선택적 .claude/RULES.md 만 고치면 된다.
#
# 검증 스펙(Claude Code 공식): SessionStart hook은 stdout의 JSON
#   {"hookSpecificOutput":{"hookEventName":"SessionStart","additionalContext":"..."}}
# 으로 컨텍스트를 *모델 프롬프트에 주입*한다. .claude/ 아래라 trust 자동.
# 설계 원칙: ① git 사실은 매번 live 계산(stale 상태파일 함정 회피) ② 모델은 *서사 맥락*만
# SESSION_STATE에 남김(역할 분리) ③ 실패해도 세션 안 막히게 항상 exit 0 ④ 출력 타이트하게.

set +e  # 어떤 명령이 실패해도 멈추지 않음

# ── [커스터마이즈] 영어 엔진 프로젝트 ─────────────────────────────────────────
ENTRY_DOCS="진입: CURRICULUM.md(설계·Day 계획)와 enhance.py(콘텐츠 보강 빌드)를 본다. 문장은 curriculum.js(Day27~29는 enhance.py mk()), 보강필드(concept/note/tense/purpose)는 enhance.py에서"
PLAN_FILE="CURRICULUM.md"              # roadmap 없어 설계문서의 Day 표를 계획으로 재활용
PLAN_MARKERS="^### Phase|^\| *[0-9]+ |^\| Day"  # Phase 헤딩 + Day 표 행만(인트로 헤딩 제외)
PROJECT_NAME="영어 엔진"               # 앱 이름(폴더명 '영어선생님'과 달라 고정)
GITLOG_N=8                             # 최근 커밋 몇 줄
# 불변 규율: .claude/RULES.md 가 있으면 그 내용을, 없으면 아래 범용 기본을 주입한다.
# ─────────────────────────────────────────────────────────────────────────

# 프로젝트 루트: 하네스가 주는 CLAUDE_PROJECT_DIR 우선, 없으면 이 스크립트 위치 기준(.claude/hooks/ → 루트).
PD="${CLAUDE_PROJECT_DIR:-$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)}"
cd "$PD" 2>/dev/null

# python 자동 탐지(JSON escape 안전). 없으면 평문 fallback(SessionStart는 평문 stdout도 주입함).
PY="$(command -v python3 || command -v python)"

TXT=$(
{
  echo "# 🔁 세션 연속성 (SessionStart hook 자동 주입 — 이 블록은 매 세션 강제 로드됨)"
  echo ""
  echo "이 블록은 *직전 세션의 상태*다. 노이즈가 아니라 네 출발점이다. ${ENTRY_DOCS}(이 블록은 요약일 뿐, 권위는 디스크 문서)."
  echo ""
  echo "## 📍 Live git 사실 (이 세션 시작 시점 실측 — 항상 정확)"
  echo '```'
  if git rev-parse --git-dir >/dev/null 2>&1; then
    echo "branch: $(git branch --show-current 2>/dev/null)  |  HEAD: $(git rev-parse --short HEAD 2>/dev/null)  |  commits: $(git rev-list --count HEAD 2>/dev/null)  |  dirty: $(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')"
    echo "최근 커밋:"
    git log --oneline -"$GITLOG_N" 2>/dev/null
    D=$(git status --porcelain 2>/dev/null)
    if [ -n "$D" ]; then echo "⚠️ 미커밋 변경(다른 세션 작업 중일 수 있음 — 건드리기 전 확인):"; echo "$D"; fi
  else
    echo "(git 저장소 아님)"
  fi
  echo '```'
  echo ""
  if [ -n "$PLAN_FILE" ] && [ -f "$PLAN_FILE" ]; then
    echo "## 🗺️ Day 골격 (${PLAN_FILE}의 Phase/Day 표 — 진행은 SESSION_STATE 참조)"
    # '전체 26일 지도' 섹션 이후만 grep해 Phase 헤딩+Day 표 행을 뽑는다(인트로 헤딩 제외).
    awk '/전체 26일 지도|전체.*지도|## 전체/{f=1} f' "$PLAN_FILE" 2>/dev/null \
      | grep -nE "$PLAN_MARKERS" 2>/dev/null | head -12 \
      || echo "(Day 표 못 찾음 — ${PLAN_FILE} 직접 읽어라)"
    echo ""
  fi
  echo "## 📋 롤링 상태 (.claude/SESSION_STATE.md — 직전 세션이 /handoff로 남김)"
  if [ -f .claude/SESSION_STATE.md ]; then
    cat .claude/SESSION_STATE.md
  else
    echo "(아직 없음 — 첫 세션이면 작업을 좀 한 뒤 /handoff 로 생성하라)"
  fi
  echo ""
  echo "## ⚠️ 이 프로젝트의 불변 규율"
  if [ -f .claude/RULES.md ]; then
    cat .claude/RULES.md
  else
    echo "1. **검증 전 결과 선언 금지** — 테스트 수·exit code·체크섬은 *실행한 뒤* 적는다. 미리 적으면 흉내."
    echo "2. **자율 진행** — 계획에 단계가 있으면 묻지 말고 진행+보고. 멈춤은 진짜 분기점(되돌리기 어려움·외부통신·비용/계약·정책 변경)에서만."
    echo "3. **다른 세션 충돌 주의** — 위 dirty 목록의 파일은 다른 세션이 작업 중일 수 있다. 건드리기 전 확인."
    echo "   (프로젝트 고유 규율은 .claude/RULES.md 에 적어라. 그러면 이 기본 대신 그게 주입된다.)"
  fi
  echo ""
  echo "## 🔧 빌드·배포 순서 (콘텐츠/코드 바꿀 때 — 한 단계라도 빠뜨리면 폰에 반영 안 됨)"
  echo '```'
  echo "1. 보강필드는 enhance.py → python3 enhance.py (curriculum.js 보강·재생성)"
  echo "2. 음성 바뀐 id: rm audio/<id>_ko.mp3 _en.mp3 (_scene/_intro도) → python3 generate_audio.py"
  echo "3. 코드 바꿨으면 sw.js 버전 +1   ← 현재: $(grep -oE 'eng-engine-v[0-9]+' sw.js 2>/dev/null | head -1)"
  echo "4. git push → Pages 재빌드(~1분) → 라이브 폴링 확인 후에만 '됐다' 선언"
  echo "   (자세한 이유·금지는 위 RULES 참조)"
  echo '```'
} 2>/dev/null
)

# 유효 JSON으로 직렬화. python 실패/부재 시 평문 stdout fallback.
if [ -n "$PY" ]; then
  printf '%s' "$TXT" | "$PY" -c 'import sys, json
print(json.dumps({"hookSpecificOutput": {"hookEventName": "SessionStart", "additionalContext": sys.stdin.read()}}))' 2>/dev/null || printf '%s' "$TXT"
else
  printf '%s' "$TXT"
fi

exit 0
