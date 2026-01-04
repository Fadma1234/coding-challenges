/**
 * LeetCode 2629 — Function Composition
 * User-provided implementation exported as `compose`.
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x);
    };
};

module.exports = { compose };
