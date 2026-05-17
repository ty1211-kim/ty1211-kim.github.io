# TY의 주식공부

반도체 중심 투자 판단을 위한 개인 대시보드입니다.

## 핵심 흐름

1. 환율, 금, 유가, 지수, 비트코인으로 시장 온도를 확인합니다.
2. 삼성전자, SK하이닉스, 마이크론, 인텔, AMD, 엔비디아, 샌디스크, 키옥시아의 주가와 시가총액을 비교합니다.
3. DRAM과 NAND 현물가 추이를 참고용 그래프로 봅니다.
4. PC와 AI 시스템의 메모리 구조를 클릭형 블록다이어그램으로 공부합니다.
5. HBF, CXL Memory, SOCAMM을 하나로 묶지 않고 별도 부품·투자 테마로 분리해서 봅니다.
6. 판단 근거와 다음 행동을 기록합니다.

## 이번 버전의 수정점

- AI 블록다이어그램에서 `HBF / CXL Memory`를 분리했습니다.
- `HBF`, `CXL Memory`, `SOCAMM`을 각각 별도 클릭 블록과 설명으로 만들었습니다.
- 샌디스크는 `HBF+NAND` 관점으로, 키옥시아는 `NAND/SSD` 관점으로 분리했습니다.
- 핵심 종목의 시가총액이 `—`로 남는 문제를 줄이기 위해 Yahoo quoteSummary fallback을 추가했습니다.
- DRAM·NAND 현물가 추이 섹션을 추가했습니다.
- 현물가 그래프는 공개 기사 가격점과 보간값을 섞은 참고용 프록시입니다. 정식 원자료가 있으면 `data/memory-spot-prices.json`만 교체하면 됩니다.

## 데이터 로딩 구조

- Yahoo Finance quote API를 먼저 묶어서 요청합니다.
- 시가총액이 빠진 종목은 Yahoo Finance quoteSummary에서 `marketCap` 또는 `sharesOutstanding × price`로 보강합니다.
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
data/memory-spot-prices.json
assets/diagrams/pc-memory-structure.png
assets/diagrams/ai-memory-structure.png
```


## v6 변경 사항

- AI 블록다이어그램에서 HBF, CXL Memory, SOCAMM을 서로 다른 블록으로 명확히 분리했습니다.
- 메모리 가격 추이를 두 개의 차트로 나눴습니다.
  - 차트 1: DDR4 16Gb, DDR5 16Gb, NAND MLC 방향성
  - 차트 2: 다나와 DDR4 8GB, DDR5 16GB, NVMe SSD 1TB 대표가
- 가격 데이터는 `data/memory-watch-prices.json`에서 관리합니다. 실데이터를 확보하면 이 파일만 교체하면 됩니다.
- 시가총액 캐시 키를 v6로 바꿔 이전 버전의 빈 캐시가 남는 문제를 줄였습니다.
