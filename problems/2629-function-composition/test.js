const { compose } = require('./solution');

const examples = [
  { functions: [x => x + 1, x => x * x, x => 2 * x], x: 4, expected: 65 },
  { functions: [x => 10 * x, x => 10 * x, x => 10 * x], x: 1, expected: 1000 },
  { functions: [], x: 42, expected: 42 }
];

examples.forEach((e, i) => {
  const fn = compose(e.functions);
  const res = fn(e.x);
  console.log(`Case ${i+1}:`, res, res === e.expected ? 'OK' : `FAIL (expected ${e.expected})`);
});
