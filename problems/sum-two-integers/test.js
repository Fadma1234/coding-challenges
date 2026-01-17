const { sum } = require('./solution');

const examples = [
  { a: 2, b: 3, expected: 5 },
  { a: 0, b: 0, expected: 0 },
  { a: -1, b: 1, expected: 0 }
];

(() => {
  for (let i = 0; i < examples.length; i++) {
    const result = sum(examples[i].a, examples[i].b);
    const ok = result === examples[i].expected;
    console.log(`Case ${i+1}:`, result, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
  }
})();