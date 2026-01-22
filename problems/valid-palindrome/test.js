const { isPalindrome } = require('./solution');

const examples = [
  { s: "Was it a car or a cat I saw?", expected: true },
  { s: "tab a cat", expected: false }
];

for (let i = 0; i < examples.length; i++) {
  const { s, expected } = examples[i];
  const r = isPalindrome(s);
  const ok = r === expected;
  console.log(`Case ${i+1}:`, r, ok ? 'OK' : `FAIL (expected ${expected})`);
}