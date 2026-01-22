const { twoSum } = require('./solution');

const examples = [
  { numbers: [1,2,3,4], target: 3, expected: [1,2] },
  { numbers: [2,7,11,15], target: 9, expected: [1,2] }
];

for (let i = 0; i < examples.length; i++) {
  const { numbers, target, expected } = examples[i];
  const r = twoSum(numbers, target);
  const ok = JSON.stringify(r) === JSON.stringify(expected);
  console.log(`Case ${i+1}:`, r, ok ? 'OK' : `FAIL (expected ${expected})`);
}