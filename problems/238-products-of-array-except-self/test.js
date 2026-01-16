const { productExceptSelf } = require('./solution');

const examples = [
  { nums: [1,2,4,6], expected: [48,24,12,8] },
  { nums: [-1,0,1,2,3], expected: [0,-6,0,0,0] }
];

(() => {
  for (let i = 0; i < examples.length; i++) {
    const result = productExceptSelf(examples[i].nums);
    const ok = JSON.stringify(result) === JSON.stringify(examples[i].expected);
    console.log(`Case ${i+1}:`, result, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
  }
})();