import assert from 'node:assert/strict';

function normalizeCap(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

function computeCap({ marketCap, price, sharesOutstanding, fallbackShares }) {
  const direct = normalizeCap(marketCap);
  if (direct) return direct;
  const p = Number(price);
  const shares = Number(sharesOutstanding);
  const fallback = Number(fallbackShares);
  if (Number.isFinite(p) && p > 0 && Number.isFinite(shares) && shares > 0) return p * shares;
  if (Number.isFinite(p) && p > 0 && Number.isFinite(fallback) && fallback > 0) return p * fallback;
  return null;
}

assert.equal(computeCap({ marketCap: 1000, price: 10, sharesOutstanding: 1 }), 1000);
assert.equal(computeCap({ marketCap: null, price: 10, sharesOutstanding: 100 }), 1000);
assert.equal(computeCap({ marketCap: 0, price: 10, fallbackShares: 100 }), 1000);
assert.equal(computeCap({ marketCap: -1, price: 10, sharesOutstanding: 0 }), null);
assert.equal(computeCap({ marketCap: 'abc', price: 'bad', sharesOutstanding: 100 }), null);

console.log('marketcap tests passed');
