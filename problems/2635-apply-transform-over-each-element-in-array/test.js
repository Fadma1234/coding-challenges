const { map } = require('./solution');

const examples = [
  { arr: [1,2,3], fn: (n) => n + 1, expected: [2,3,4] },
  { arr: [1,2,3], fn: (n, i) => n + i, expected: [1,3,5] },
  { arr: [10,20,30], fn: () => 42, expected: [42,42,42] }
];

examples.forEach((e, i) => {
  const res = map(e.arr, e.fn);
  console.log(`Case ${i+1}:`, res, JSON.stringify(res) === JSON.stringify(e.expected) ? 'OK' : `FAIL (expected ${JSON.stringify(e.expected)})`);
});