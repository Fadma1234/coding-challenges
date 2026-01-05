const { once } = require('./solution');

const examples = [
  {
    fn: (a,b,c) => a + b + c,
    calls: [[1,2,3], [2,3,6]],
    expected: [6, undefined]
  },
  {
    fn: (a,b,c) => a * b * c,
    calls: [[5,7,4], [2,3,6], [4,6,8]],
    expected: [140, undefined, undefined]
  }
];

examples.forEach((e, i) => {
  const onceFn = once(e.fn);
  const results = e.calls.map(call => onceFn(...call));
  const ok = results.every((r, j) => r === e.expected[j]);
  console.log(`Case ${i+1}:`, results, ok ? 'OK' : `FAIL (expected ${e.expected})`);
});