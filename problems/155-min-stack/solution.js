class MinStack {
    constructor() {
        // main storage for elements
        this.stack = [];
        // auxiliary stack storing the current minimum at each depth
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        // when minStack is empty or new value is smaller or equal, push it
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;
        const top = this.stack.pop();
        // if popped value equals current minimum, pop from minStack too
        if (top === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return undefined;
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) return undefined;
        return this.minStack[this.minStack.length - 1];
    }
}

module.exports = MinStack;