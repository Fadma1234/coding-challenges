# 155. Min Stack

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

## Description

Implement the `MinStack` class:

- `MinStack()` initializes the stack object.
- `void push(int val)` pushes the element `val` onto the stack.
- `void pop()` removes the element on the top of the stack.
- `int top()` gets the top element of the stack.
- `int getMin()` retrieves the minimum element in the stack.

Each function should run in **O(1)** time.

### Example

```
Input: ["MinStack","push",1,"push",2,"push",0,"getMin","pop","top","getMin"]
Output: [null,null,null,null,0,null,2,1]

Explanation:
MinStack minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
minStack.getMin(); // return 0
minStack.pop();
minStack.top();    // return 2
minStack.getMin(); // return 1
```

## Solution

Use an auxiliary stack to keep track of the current minimum value at each level of the main stack.