const { addTwoPromises } = require('./solution');

const examples = [
  {
    p1: new Promise(resolve => setTimeout(() => resolve(2), 20)),
    p2: new Promise(resolve => setTimeout(() => resolve(5), 60)),
    expected: 7
  },
  {
    p1: new Promise(resolve => setTimeout(() => resolve(10), 50)),
    p2: new Promise(resolve => setTimeout(() => resolve(-12), 30)),
    expected: -2
  }
];

(async () => {
  for (let i = 0; i < examples.length; i++) {
    const r = await addTwoPromises(examples[i].p1, examples[i].p2);
    const ok = r === examples[i].expected;
    console.log(`Case ${i+1}:`, r, ok ? 'OK' : `FAIL (expected ${examples[i].expected})`);
  }
})();
