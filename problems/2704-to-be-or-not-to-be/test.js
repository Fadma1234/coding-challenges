const { expect } = require('./solution');

const examples = [
  {
    func: () => expect(5).toBe(5),
    expected: { value: true }
  },
  {
    func: () => expect(5).toBe(null),
    expected: { error: "Not Equal" }
  },
  {
    func: () => expect(5).notToBe(null),
    expected: { value: true }
  },
  {
    func: () => expect(5).notToBe(5),
    expected: { error: "Equal" }
  }
];

examples.forEach((e, i) => {
  try {
    const res = e.func();
    if (res === e.expected.value) {
      console.log(`Case ${i+1}: OK`);
    } else {
      console.log(`Case ${i+1}: FAIL (expected ${e.expected.value}, got ${res})`);
    }
  } catch (err) {
    if (err.message === e.expected.error) {
      console.log(`Case ${i+1}: OK`);
    } else {
      console.log(`Case ${i+1}: FAIL (expected error "${e.expected.error}", got "${err.message}")`);
    }
  }
});