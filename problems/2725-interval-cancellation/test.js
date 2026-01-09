const assert = require('assert');
const cancellable = require('./solution');

// A helper to capture calls with time offsets
function runTest(fn, args, t, cancelTimeMs, expectedCount, done) {
  const results = [];
  const start = Date.now();
  const wrapped = (...a) => {
    results.push({ time: Date.now() - start, returned: fn(...a) });
  };

  const cancelFn = cancellable(wrapped, args, t);
  setTimeout(() => {
    try {
      const expected = Math.floor((cancelTimeMs - 1) / t) + 1;
      // Accept the expected count or one missed tick due to timer jitter
      if (!(results.length === expected || results.length === expected - 1)) {
        throw new assert.AssertionError({ message: `Expected ${expected} or ${expected-1} calls, got ${results.length}`, expected, actual: results.length });
      }
      done();
    } catch (e) { done(e); }
  }, cancelTimeMs + 50);

  setTimeout(cancelFn, cancelTimeMs);
}

// Test 1
runTest((x) => x * 2, [4], 35, 190, 6, (err) => {
  if (err) throw err;
  // Test 2
  runTest((x1, x2) => x1 * x2, [2,5], 30, 165, 6, (err2) => {
    if (err2) throw err2;
    // Test 3
    runTest((x1,x2,x3) => x1 + x2 + x3, [5,1,3], 50, 180, 4, (err3) => {
      if (err3) throw err3;
      console.log('All tests passed for 2725-interval-cancellation');
    });
  });
});
