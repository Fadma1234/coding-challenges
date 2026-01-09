const { cancellable } = require('./solution');

const examples = [
  {
    fn: (x) => x * 5,
    args: [2],
    t: 20,
    cancelTimeMs: 50,
    expected: [{"time": 20, "returned": 10}]
  },
  {
    fn: (x) => x**2,
    args: [2],
    t: 100,
    cancelTimeMs: 50,
    expected: []
  },
  {
    fn: (x1, x2) => x1 * x2,
    args: [2,4],
    t: 30,
    cancelTimeMs: 100,
    expected: [{"time": 30, "returned": 8}]
  }
];

let caseIndex = 0;

function runCase() {
  if (caseIndex >= examples.length) return;

  const e = examples[caseIndex];
  let log = [];
  const loggedFn = (...args) => {
    const result = e.fn(...args);
    log.push({time: e.t, returned: result});
    return result;
  };
  const cancelFn = cancellable(loggedFn, e.args, e.t);
  setTimeout(() => {
    cancelFn();
  }, e.cancelTimeMs);

  setTimeout(() => {
    const ok = JSON.stringify(log) === JSON.stringify(e.expected);
    console.log(`Case ${caseIndex+1}:`, log, ok ? 'OK' : `FAIL (expected ${JSON.stringify(e.expected)})`);
    caseIndex++;
    runCase();
  }, Math.max(e.t, e.cancelTimeMs) + 10);
}

runCase();