const maxProfit = require('./solution');

const examples = [
  { prices: [10,1,5,6,7,1], expected: 6 },
  { prices: [7,1,5,3,6,4], expected: 5 },
  { prices: [7,6,4,3,1], expected: 0 },
  { prices: [1,2], expected: 1 },
  { prices: [2,1,2,0,1], expected: 1 }
];

for (let i = 0; i < examples.length; i++) {
  const result = maxProfit(examples[i].prices);
  const ok = result === examples[i].expected;
  console.log(`Case ${i + 1}: prices=[${examples[i].prices}]`, result, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
}
