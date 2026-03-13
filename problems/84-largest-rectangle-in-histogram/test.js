const Solution = require('./solution');

describe('Largest Rectangle in Histogram', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: heights = [7,1,7,2,2,4]', () => {
        const result = solution.largestRectangleArea([7,1,7,2,2,4]);
        expect(result).toBe(8);
    });

    test('Example 2: heights = [1,3,7]', () => {
        const result = solution.largestRectangleArea([1,3,7]);
        expect(result).toBe(7);
    });

    test('All equal heights', () => {
        const arr = [2,2,2,2];
        const result = solution.largestRectangleArea(arr);
        expect(result).toBe(8);
    });

    test('Single bar', () => {
        const result = solution.largestRectangleArea([5]);
        expect(result).toBe(5);
    });
});