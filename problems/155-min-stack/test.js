const assert = require('assert');
const MinStack = require('./solution');

// basic smoke tests
const stack = new MinStack();
stack.push(1);
stack.push(2);
stack.push(0);
assert.strictEqual(stack.getMin(), 0);
stack.pop();
assert.strictEqual(stack.top(), 2);
assert.strictEqual(stack.getMin(), 1);

// additional tests
stack.pop();
assert.strictEqual(stack.getMin(), 1);
stack.pop();
assert.strictEqual(stack.top(), undefined);
assert.strictEqual(stack.getMin(), undefined);

console.log('All tests passed for MinStack');
