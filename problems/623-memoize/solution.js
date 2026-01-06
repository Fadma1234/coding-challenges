function memoize(fn) {
  const cache = {};
  let callCount = 0;

  const memoizedFn = function(...args) {
    // Create a unique key by joining arguments with a separator
    const key = args.join('|');

    // If the result is in the cache, return it
    if (cache[key] !== undefined) {
      return cache[key];
    }

    // Otherwise, compute the result, cache it, and return it
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