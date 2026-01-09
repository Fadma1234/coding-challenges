/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
  // Call immediately
  fn(...args);
  // Schedule repeated calls
  const id = setInterval(() => fn(...args), t);
  // Return cancel function
  return () => clearInterval(id);
};

module.exports = cancellable;
