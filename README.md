# TY의 주식공부

반도체 중심 투자 판단을 위한 개인 대시보드입니다.

## 핵심 목적

시장, 반도체 구조, 핵심 종목, 메모리 가격, 판단 기록을 한 흐름으로 묶습니다.
보기 좋은 링크 모음이 아니라, 투자 판단에서 틀리기 쉬운 지점을 먼저 드러내는 운영체제를 목표로 합니다.

## 이번 버전의 변화

- 관점별 비판을 반영한 **검증 보드** 추가
- HBM / HBF / CXL Memory / SOCAMM을 역할별로 분리
- AI 시스템 블록다이어그램 재정렬 및 클릭 영역 재조정
- 메모리 가격 차트의 데이터 신뢰도 문구 강화
- 핵심 종목 카드에 공격적 체크와 봐야 할 지표 추가
- 트레이더용 체크리스트 추가
- CXL, DRAMeXchange, TrendForce, Danawa 등 확인 자료 링크 추가

## 데이터 원칙

실시간 시세는 Yahoo Finance, CoinGecko, rates.json을 사용합니다.
외부 API는 브라우저·CORS·프록시 상태에 따라 실패할 수 있으므로 카드에는 원문 링크와 캐시 표시를 함께 둡니다.

메모리 가격 차트는 `data/memory-watch-prices.json`에서 읽습니다.
현재 값은 공개 기사 앵커와 수동 입력 기반의 참고용 데이터입니다.
정확한 DRAMeXchange, TrendForce, ChinaFlashMarket, Danawa 월별 원자료를 확보하면 이 JSON만 교체하세요.

## 배포

GitHub Pages 저장소 루트에 그대로 덮어씁니다.

```bash
rsync -av --delete --exclude='.git' --exclude='CNAME' ./ty_homepage_v8_critique_refined/ ./ty1211-kim.github.io/
cd ./ty1211-kim.github.io
git add -A
git commit -m "Refine dashboard with critical review"
git push origin main
```
