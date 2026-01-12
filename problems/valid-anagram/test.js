const { isAnagram } = require('./solution');

const examples = [
  { s: 'racecar', t: 'carrace', expected: true },
  { s: 'jar', t: 'jam', expected: false }
];

for (let i = 0; i < examples.length; i++) {
  const { s, t, expected } = examples[i];
  const r = isAnagram(s, t);
  const ok = r === expected;
  console.log(`Case ${i+1}:`, r, ok ? 'OK' : `FAIL (expected ${expected})`);
}
