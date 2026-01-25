const { Solution } = require('./solution');

const sol = new Solution();

const examples = [
  { nums: [-1,0,1,2,-1,-4], expected: [[-1,-1,2],[-1,0,1]] },
  { nums: [0,1,1], expected: [] },
  { nums: [0,0,0], expected: [[0,0,0]] }
];

for (let i = 0; i < examples.length; i++) {
  const result = sol.threeSum(examples[i].nums);
  const ok = JSON.stringify(result) === JSON.stringify(examples[i].expected);
  console.log(`Case ${i+1}:`, result, ok ? 'OK' : `FAIL (expected ${JSON.stringify(examples[i].expected)})`);
}