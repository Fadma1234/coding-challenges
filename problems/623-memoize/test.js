const { memoize } = require('./solution');

const sum = (a, b) => a + b;
const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
const fib = (n) => (n <= 1) ? 1 : fib(n - 1) + fib(n - 2);

// Example 1: sum
const memoizedSum = memoize(sum);
console.log('Example 1:');
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4 (cached)
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3
console.log(memoizedSum.getCallCount()); // 2

// Example 2: factorial
const memoFactorial = memoize(factorial);
console.log('\nExample 2:');
console.log(memoFactorial(2)); // 2
console.log(memoFactorial(3)); // 6
console.log(memoFactorial(2)); // 2 (cached)
console.log(memoFactorial.getCallCount()); // 2
console.log(memoFactorial(3)); // 6 (cached)
console.log(memoFactorial.getCallCount()); // 2

// Example 3: fib
const memoFib = memoize(fib);
console.log('\nExample 3:');
console.log(memoFib(5)); // 8
console.log(memoFib.getCallCount()); // 1