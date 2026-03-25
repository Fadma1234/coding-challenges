const Solution = require('./solution');

describe('Median of Two Sorted Arrays', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: nums1 = [1,2], nums2 = [3] -> 2.0', () => {
        const result = solution.findMedianSortedArrays([1, 2], [3]);
        expect(result).toBe(2.0);
    });

    test('Example 2: nums1 = [1,3], nums2 = [2,4] -> 2.5', () => {
        const result = solution.findMedianSortedArrays([1, 3], [2, 4]);
        expect(result).toBe(2.5);
    });

    test('Odd total length', () => {
        const result = solution.findMedianSortedArrays([0, 5, 8], [1, 2, 12]);
        expect(result).toBe(4);
    });

    test('Single element arrays', () => {
        const result = solution.findMedianSortedArrays([1], [2]);
        expect(result).toBe(1.5);
    });

    test('One empty array', () => {
        const result = solution.findMedianSortedArrays([], [1, 2, 3, 4]);
        expect(result).toBe(2.5);
    });
});
