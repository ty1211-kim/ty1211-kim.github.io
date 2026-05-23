# TY의 주식공부

반도체 중심 투자 관찰 대시보드입니다. 핵심 기업 카드를 클릭하면 회사 소개, 사업 구조, AI 밸류체인 위치, 재무 확인 항목, 최근 주가 흐름을 볼 수 있습니다.

## 적용

```bash
rsync -av --delete --exclude='.git' --exclude='CNAME' ./ty_homepage_v11_company_panels/ ./ty1211-kim.github.io/
```

## 데이터

- `data/company-details.json`: 기업 상세 패널 데이터
- `data/memory-watch-prices.json`: 메모리 가격 차트 데이터
- 실시간 주가/시총은 브라우저에서 Yahoo Finance fallback 로직으로 불러옵니다.
