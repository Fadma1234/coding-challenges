const Solution = require('./solution');

describe('Sliding Window Maximum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1', () => {
        const nums = [1, 2, 1, 0, 4, 2, 6];
        const k = 3;
        const result = solution.maxSlidingWindow(nums, k);
        expect(result).toEqual([2, 2, 4, 4, 6]);
    });

    test('k equals 1 should return original array', () => {
        const nums = [5, 3, 8, 1];
        expect(solution.maxSlidingWindow(nums, 1)).toEqual([5, 3, 8, 1]);
    });

    test('k equals array length', () => {
        const nums = [7, 2, 4];
        expect(solution.maxSlidingWindow(nums, 3)).toEqual([7]);
    });

    test('empty nums', () => {
        expect(solution.maxSlidingWindow([], 3)).toEqual([]);
    });

    test('k is zero', () => {
        expect(solution.maxSlidingWindow([1, 2, 3], 0)).toEqual([]);
    });
});
