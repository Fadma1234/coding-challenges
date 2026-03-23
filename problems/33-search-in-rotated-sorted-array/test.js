const Solution = require('./solution');

describe('Search in Rotated Sorted Array', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: nums = [3,4,5,6,1,2], target = 1', () => {
        const result = solution.search([3,4,5,6,1,2], 1);
        expect(result).toBe(4);
    });

    test('Example 2: nums = [3,5,6,0,1,2], target = 4', () => {
        const result = solution.search([3,5,6,0,1,2], 4);
        expect(result).toBe(-1);
    });

    test('Target at start: nums = [4,5,6,7,0,1,2], target = 4', () => {
        const result = solution.search([4,5,6,7,0,1,2], 4);
        expect(result).toBe(0);
    });

    test('Target at end: nums = [4,5,6,7,0,1,2], target = 2', () => {
        const result = solution.search([4,5,6,7,0,1,2], 2);
        expect(result).toBe(6);
    });

    test('No rotation: nums = [1,2,3,4,5], target = 3', () => {
        const result = solution.search([1,2,3,4,5], 3);
        expect(result).toBe(2);
    });
});