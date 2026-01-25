const maxArea = require('./solution');

const examples = [
  { height: [1, 7, 2, 5, 4, 7, 3, 6], expected: 36 },
  { height: [2, 2, 2], expected: 4 },
  { height: [1, 1], expected: 1 },
  { height: [1, 2, 4, 3], expected: 4 },
  { height: [5, 4, 3, 2, 1], expected: 6 },
  { height: [1, 1, 1, 10, 1, 1, 1], expected: 6 },
  { height: [10, 1, 1, 1, 1, 10], expected: 50 }
];

for (let i = 0; i < examples.length; i++) {
  const result = maxArea(examples[i].height);
  const ok = result === examples[i].expected;
  console.log(`Case ${i + 1}: height=[${examples[i].height}]`, result, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
}
