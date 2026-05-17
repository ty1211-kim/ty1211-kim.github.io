# TY의 주식공부

반도체 중심 투자 판단을 위한 개인 대시보드입니다.

## 핵심 흐름

1. 환율, 금, 유가, 지수, 비트코인으로 시장 온도를 확인합니다.
2. 삼성전자, SK하이닉스, 마이크론, 인텔, AMD, 엔비디아, 샌디스크, 키옥시아의 주가와 시가총액을 비교합니다.
3. PC와 AI 시스템의 메모리 구조를 클릭형 블록다이어그램으로 공부합니다.
4. 각 부품의 역할, 대표 회사, 관련 종목, YouTube 학습 링크를 확인합니다.
5. 판단 근거와 다음 행동을 기록합니다.

## 이번 버전의 수정점

- 블록다이어그램 하단 핵심 문구 위치를 카드 안쪽으로 안정화했습니다.
- 클릭 영역이 시각적으로 블록과 따로 놀지 않도록 투명 hotspot으로 바꿨습니다.
- AI 구조의 클릭 좌표를 실제 블록 위치에 맞게 다시 잡았습니다.
- `https://www.youtube.com/watch?v=RWQ-jvnzvhM` 배경 음악 플레이어를 복구했습니다.
- YouTube IFrame API로 자동 재생을 시도하고, 브라우저가 차단하면 첫 클릭 후 재생됩니다.

## 데이터 로딩 구조

- Yahoo Finance quote API를 한 번에 묶어 요청합니다.
- 브라우저 CORS 실패에 대비해 direct fetch, AllOrigins, CodeTabs, corsproxy를 병렬로 시도합니다.
- 첫 화면은 localStorage 캐시를 먼저 표시하고, 이후 최신 가격으로 갱신합니다.
- 비트코인은 Yahoo Finance 실패 시 CoinGecko로 한 번 더 시도합니다.
- 한국 기준금리는 `rates.json`에서 수동 관리합니다.

## 파일 구조

```text
index.html
README.md
README.txt
rates.json
single.html
assets/diagrams/pc-memory-structure.png
assets/diagrams/ai-memory-structure.png
```
