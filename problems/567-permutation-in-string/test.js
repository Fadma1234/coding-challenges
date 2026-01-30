const { checkInclusion } = require('./solution');

const examples = [
  { input: { s1: 'abc', s2: 'lecabee' }, expected: true },
  { input: { s1: 'abc', s2: 'lecaabee' }, expected: false },
  { input: { s1: 'ab', s2: 'eidbaooo' }, expected: true },
  { input: { s1: 'ab', s2: 'eidboaoo' }, expected: false }
];

for (let i = 0; i < examples.length; i++) {
  const { s1, s2 } = examples[i].input;
  const out = checkInclusion(s1, s2);
  const ok = out === examples[i].expected;
  console.log(`Case ${i + 1}:`, ok ? 'OK' : `FAIL (got ${out}, expected ${examples[i].expected})`);
}
