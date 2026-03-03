const { Solution } = require('./solution');

describe('Evaluate Reverse Polish Notation', () => {
    const solver = new Solution();

    it('Example 1: ((1 + 2) * 3) - 4 = 5', () => {
        const tokens = ["1","2","+","3","*","4","-"];
        expect(solver.evalRPN(tokens)).toBe(5);
    });

    it('Example 2: (2 + 1) * 3 = 9', () => {
        const tokens = ["2","1","+","3","*"];
        expect(solver.evalRPN(tokens)).toBe(9);
    });

    it('Example 3: 4 + (13 / 5) = 6', () => {
        const tokens = ["4","13","5","/","+"];
        expect(solver.evalRPN(tokens)).toBe(6);
    });

    it('handles negative results and mixed operators', () => {
        const tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"];
        // corresponds to complex expression from LC examples, expected 22
        expect(solver.evalRPN(tokens)).toBe(22);
    });
});