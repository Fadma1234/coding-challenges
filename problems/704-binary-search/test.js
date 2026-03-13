const Solution = require('./solution');

describe('Binary Search', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: target exists', () => {
        const nums = [-1, 0, 2, 4, 6, 8];
        expect(solution.search(nums, 4)).toBe(3);
    });

    test('Example 2: target missing', () => {
        const nums = [-1, 0, 2, 4, 6, 8];
        expect(solution.search(nums, 3)).toBe(-1);
    });

    test('Empty array', () => {
        expect(solution.search([], 5)).toBe(-1);
    });

    test('Single element matching', () => {
        expect(solution.search([7], 7)).toBe(0);
    });

    test('Single element not matching', () => {
        expect(solution.search([7], 1)).toBe(-1);
    });
});