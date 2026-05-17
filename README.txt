# TY의 주식공부

반도체 중심 투자 판단을 위한 개인 대시보드입니다.

## 핵심 흐름

1. 환율, 금, 유가, 지수, 비트코인, 마이크론으로 시장 온도를 확인합니다.
2. PC와 AI 시스템의 메모리 구조를 보며 반도체 병목을 해석합니다.
3. 삼성전자, SK하이닉스, 마이크론의 자료를 확인합니다.
4. 판단 근거와 다음 행동을 기록합니다.

## 데이터 로딩 구조

- 시장 데이터는 Yahoo Finance quote API를 한 번에 묶어 요청합니다.
- 브라우저 CORS 실패에 대비해 여러 프록시를 병렬로 시도합니다.
- 첫 화면은 localStorage 캐시를 먼저 표시하고, 이후 최신 가격으로 갱신합니다.
- 한국 기준금리는 `rates.json`에서 수동 관리합니다.

## 파일 구조

```text
index.html
rates.json
assets/diagrams/pc-memory-structure.png
assets/diagrams/ai-memory-structure.png
```
