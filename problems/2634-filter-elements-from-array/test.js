const { filter } = require('./solution');

const examples = [
  { arr: [0,10,20,30], fn: (n) => n > 10, expected: [20,30] },
  { arr: [1,2,3], fn: (n, i) => i === 0, expected: [1] },
  { arr: [-2,-1,0,1,2], fn: (n) => n + 1, expected: [-2,0,1,2] }
];

examples.forEach((e, i) => {
  const res = filter(e.arr, e.fn);
  console.log(`Case ${i+1}:`, res, JSON.stringify(res) === JSON.stringify(e.expected) ? 'OK' : `FAIL (expected ${JSON.stringify(e.expected)})`);
});