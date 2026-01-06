/**
 * @param {Function} fn
 */
function memoize(fn) {
    const cache = {};
    let callCount = 0;
    const memoizedFn = function(...args) {
      const key = String(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      callCount++;
      return result;
    };
    memoizedFn.getCallCount = function() {
        return callCount;
    };
    return memoizedFn;
}

module.exports = { memoize };