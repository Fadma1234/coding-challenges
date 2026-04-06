const Solution = require('./solution');

describe('Contains Duplicate', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: nums = [1, 2, 3, 3]', () => {
        expect(solution.hasDuplicate([1, 2, 3, 3])).toBe(true);
    });

    test('Example 2: nums = [1, 2, 3, 4]', () => {
        expect(solution.hasDuplicate([1, 2, 3, 4])).toBe(false);
    });

    test('Example 3: nums = [1, 1, 2, 3]', () => {
        expect(solution.hasDuplicate([1, 1, 2, 3])).toBe(true);
    });

    test('Example 4: nums = [1, 2, 3]', () => {
        expect(solution.hasDuplicate([1, 2, 3])).toBe(false);
    });

    test('Example 5: empty array should return false', () => {
        expect(solution.hasDuplicate([])).toBe(false);
    });
});
