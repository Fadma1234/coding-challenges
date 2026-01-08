const { sleep } = require('./solution');

const examples = [
  { millis: 100, expected: 100 },
  { millis: 200, expected: 200 }
];

(async () => {
  for (let i = 0; i < examples.length; i++) {
    const r = await sleep(examples[i].millis);
    const ok = r === examples[i].expected;
    console.log(`Case ${i+1}:`, r, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
  }
})();