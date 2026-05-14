# 🧬 1인 기업 OS — 자가 매뉴얼

## 이 폴더는 무엇인가요?
당신의 1인 기업의 두뇌입니다. 7명의 AI 에이전트가 여기서 일합니다.

## 폴더 구조
- `_shared/` — 모든 에이전트가 매번 읽는 공동 메모리
  - `identity.md` — 회사 정체성 (이름, 톤, 가치)
  - `goals.md` — 목표
  - `decisions.md` — 의사결정 로그 (자가학습이 자동 누적)
  - `_system.md` — 이 파일
- `_agents/<id>/` — 각 에이전트 개인 공간
  - `memory.md` — 자가학습 (자동, append-only)
  - `prompt.md` — 페르소나 디테일 (사용자가 편집)
  - `config.md` — API 키·시크릿 (`.gitignore`로 보호)
- `sessions/<ts>/` — 세션별 산출물 (자동)
- `_cache/` — API 응답 캐시 (sync 제외)

## 메모리 위계 (충돌 시 우선순위)
1. `decisions.md` — 가장 강한 신뢰
2. `identity.md`
3. `goals.md`
4. 개인 메모리
5. 지식 베이스 (`10_Wiki/`)

## 다른 PC로 옮길 때
1. 새 PC에 Connect AI 설치
2. 👔 모드 ON → "📥 다른 PC에서 가져오기" 선택
3. GitHub URL 입력 → 자동 clone
4. 끝.

## 동기화 정책
- `_shared/`, `_agents/*/memory.md`, `_agents/*/prompt.md`, `sessions/` → git sync ✅
- `_agents/*/config.md`, `_cache/` → git sync ❌ (시크릿·캐시)

## 7명의 에이전트
- 👑 **DUKE 총사령관** (Chief Executive — DUKE PROJECT): 블로그 수익화 전략 총괄, 에이전트 작업 분배, 일일 목표 설정, 의사결정, DUKE PROJECT 방향성 수호
- ✍️ **코다리 부장** (블로그 콘텐츠 작가 · Head of Content): SEO 최적화 블로그 포스팅(연예/부동산/정부지원금/쇼핑), 인간다운 문체, 소제목 고도화, 클릭 유발형 제목 3종, 독창적 시각·경험 추가, 태그 최적화, 색인률 향상
- 🔍 **트렌드 헌터** (Trend & News Researcher): Google Trends 실시간 급상승 검색어 분석, 24시간 이내 최신 뉴스 엄선, 연예·부동산·정부지원금·쇼핑 카테고리별 핵심 이슈 발굴, 클릭률 높은 주제 선별, 중복 콘텐츠 방지
- 💰 **수익 마스터** (수익화 전략가 · Head of Monetization): Google AdSense 고단가 키워드 전략, 쿠팡파트너스 제품 선정(50만원↑ 고가), 제휴마케팅 최적화, CPM/CPC 극대화, 체류시간 증가 전략, 내부 링크 수익화, Lead Magnet 설계
- 📈 **SEO 마법사** (SEO & 색인 최적화 전문가): 구글 색인 최적화, 네이버 검색 노출 전략, 키워드 밀도 조정(5~7회), canonical 태그 관리, 모바일 리디렉션 이슈 해결, 구조화된 데이터(Schema), 메타 태그 최적화, 블로그스팟 SEO 특화
- 💻 **코다리 개발자** (시니어 풀스택 엔지니어 · DUKE 시스템 관리자): DUKE PROJECT 시스템 유지보수(daily-content-factory / kodari-web), FastAPI 백엔드, React 프론트엔드, Python 자동화 스크립트, Google Trends RSS 연동, Blogger API, 프롬프트 엔지니어링, git 워크플로
- 📱 **영숙** (비서 · Personal Assistant): 데일리 리포트 요약 정리, 텔레그램 브리핑 발송, 일정·할 일 관리, 에이전트 작업 결과 종합 보고, DUKE PROJECT KPI 추적(포스팅 수·수익·색인 현황)
- 🛒 **쇼핑 큐레이터** (쇼핑 블로그 & 제품 큐레이션 전문가): 50만원 이상 고가 제품 큐레이션(가전/IT, 가구/인테리어, 명품/패션, 뷰티기기), 현재 인기 이유·추천 이유·판매 트렌드 분석, 쿠팡파트너스 최적 상품 선정, 제품별 블로그 작성 가이드 제공
- 🎨 **비주얼 디렉터** (Visual Design Director): 블로그 썸네일 컨셉, 이미지 Alt 태그 추천, 포스팅 비주얼 가이드, DUKE PROJECT 브랜드 컬러·타이포그래피 관리, 카드뉴스형 콘텐츠 기획
