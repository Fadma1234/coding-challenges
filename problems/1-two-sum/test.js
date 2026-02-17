const Solution = require('./solution');

describe('Two Sum', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: nums = [3,4,5,6], target = 7', () => {
        const result = solution.twoSum([3, 4, 5, 6], 7);
        expect(result).toEqual([0, 1]);
    });

    test('Example 2: nums = [2,7,11,15], target = 9', () => {
        const result = solution.twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });

    test('Example 3: nums = [3,2,4], target = 6', () => {
        const result = solution.twoSum([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });

    test('Example 4: nums = [3,3], target = 6', () => {
        const result = solution.twoSum([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });

    test('Example 5: nums = [1,2,3,4,5], target = 9', () => {
        const result = solution.twoSum([1, 2, 3, 4, 5], 9);
        expect(result).toEqual([3, 4]);
    });
});
