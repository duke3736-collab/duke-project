<p align="center">
  <img src="assets/icon.png" width="120" alt="DUKE PROJECT Logo" />
</p>

<h1 align="center">DUKE PROJECT (AI 1인 기업 블로그 자동화)</h1>

<p align="center">
  <strong>100% Local · 100% Offline · Autonomous Blog Factory</strong><br/>
  성래박 사장님의 AI 1인 기업 DUKE PROJECT 전용 에이전트 팀. 낡은 IDE를 수익 창출의 심장으로 진화시킵니다.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="version" />
  <img src="https://img.shields.io/badge/license-MIT-green" alt="license" />
  <img src="https://img.shields.io/badge/owner-DUKE_PROJECT-purple" alt="owner" />
  <img src="https://img.shields.io/badge/engine-Ollama%20%7C%20LM%20Studio-orange" alt="engine" />
</p>

---

## 🌟 Overview: The DUKE P-Reinforce Architecture

DUKE PROJECT는 단순한 코딩 에이전트를 넘어섭니다. **P-Reinforce 아키텍처**를 기반으로 설계된 이 시스템은 최신 트렌드를 분석하고, 블로그 포스팅을 작성하며, SEO 최적화와 수익화 전략을 스스로 실행하는 자율 지식 기업(Autonomous Enterprise)입니다.

---

## ⚡ Core Features

### 1. 🧠 AI 에이전트 팀 (DUKE Team)
코다리 부장(작가), 트렌드 헌터, 수익 마스터, SEO 마법사, 쇼핑 큐레이터 등 전문 에이전트들이 협업하여 매일 9개의 고품질 포스팅을 생성합니다.

### 2. 📂 자율 지식 구조화 (Zero-Interaction Styling)
유저가 던져주는 원시 데이터(Raw Data)를 에이전트가 스스로 판단해 `10_Wiki`, `00_Raw`, `🚀 Skills` 와 같은 완벽한 P-Reinforce 템플릿 규격의 Markdown 파일로 분할-조립하여 저장합니다.

### 3. ☁️ 클라우드 동기화 (Auto-Git Sync 100%)
로컬 PC에서 파일 생성이 일어나는 순간, 에이전트가 스스로 GitHub 저장소에 `git add`, `commit`, `push`를 수행합니다. 마스터는 지루한 푸시 커맨드를 입력할 필요가 없습니다.

### 4. 🔗 설치형 모델 자동 감지 (Dynamic Model Detection)
Ollama 또는 LM Studio에 설치된 모델을 내부 API를 호출하여 자동 감지하고, 최적의 에이전트에게 모델을 자동 배정(Orchestration)합니다.

---

## ⚒️ Agent Capabilities (에이전트 권한)

로컬 머신의 파일 시스템과 터미널에 대한 통제권을 인공지능에게 부여합니다. (100% 안전한 권한 승인 기반)

| Action | Description |
|:--|:--|
| **📄 Create Files** | 새로운 포스팅과 폴더를 생성합니다 |
| **✏️ Edit Files** | 기존 포스팅의 SEO나 내용을 수정합니다 |
| **🗑️ Delete Files** | 불필요한 파일을 즉각 파쇄합니다 |
| **📖 Read Files** | 마스터의 프로젝트 파일을 읽어 맥락을 파악합니다 |
| **📂 Browse Directories** | 디렉토리 구조를 분석합니다 |
| **🖥️ Run Commands** | `npm run build`, `git push` 등 터미널 명령을 수행합니다 |

---

## 📥 Installation (설치 방법)

### 개발자 빌드 (Build from Source)
```bash
git clone https://github.com/wonseokjung/connect-ai.git
cd connect-ai
npm install
npm run compile
npx vsce package
```

---

## ⚙️ Engine Setup (엔진 설정 방법)

### ✅ LM Studio (Apple Silicon, Windows) - 권장
1. [lmstudio.ai](https://lmstudio.ai/) 에서 설치
2. Gemma 2, Llama 3 또는 Qwen Coder 등 원하는 모델 로드
3. **Developer 탭(좌측 `<>` 메뉴)** 진입 후 **Start Server** 클릭
4. DUKE PROJECT의 ⚙️ 채팅방 설정에서 엔진을 "LM Studio"로 선택

### ✅ Ollama (Mac, Linux)
```bash
brew install ollama
ollama pull gemma2:2b   # 원하는 모델 풀링
```
DUKE PROJECT에서 설정만 "Ollama"로 바꿔주시면 끝납니다.

---

## 🔒 Privacy (완벽한 보안)

- **Zero Cloud API:** 당신의 코드는 외부 클라우드 통신망을 타지 않습니다.
- **Zero Telemetry:** 모든 연산력은 100% Local Inference 환경에서 이루어집니다.
- 기업 보안 등급에 준하는 극강의 밀폐형 로컬 지식망 생성을 보장합니다.

---

<p align="center">
  <strong>Built for DUKE PROJECT</strong><br/>
  Designed by <a href="https://github.com/wonseokjung">Jay</a> × DUKE PROJECT Architect
</p>
