const { longestConsecutive } = require('./solution');

const examples = [
  { nums: [2,20,4,10,3,4,5], expected: 4 },
  { nums: [0,3,2,5,4,6,1,1], expected: 7 },
  { nums: [], expected: 0 },
  { nums: [1], expected: 1 },
  { nums: [100,4,200,1,3,2], expected: 4 }
];

(() => {
  for (let i = 0; i < examples.length; i++) {
    const result = longestConsecutive(examples[i].nums);
    const ok = result === examples[i].expected;
    console.log(`Case ${i+1}:`, result, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
  }
})();
