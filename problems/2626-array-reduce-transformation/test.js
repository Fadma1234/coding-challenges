const { arrayReduce } = require('./solution');

const examples = [
  { nums: [1,2,3,4], fn: (a,c) => a + c, init: 0, expected: 10 },
  { nums: [1,2,3,4], fn: (a,c) => a + c*c, init: 100, expected: 130 },
  { nums: [], fn: (a,c) => 0, init: 25, expected: 25 }
];

examples.forEach((e, i) => {
  const res = arrayReduce(e.nums, e.fn, e.init);
  console.log(`Case ${i+1}:`, res, res === e.expected ? 'OK' : `FAIL (expected ${e.expected})`);
});
