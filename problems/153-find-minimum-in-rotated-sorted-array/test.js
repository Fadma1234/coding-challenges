const Solution = require('./solution');

describe('Find Minimum in Rotated Sorted Array', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: [3,4,5,6,1,2] => 1', () => {
        expect(solution.findMin([3, 4, 5, 6, 1, 2])).toBe(1);
    });

    test('Example 2: [4,5,0,1,2,3] => 0', () => {
        expect(solution.findMin([4, 5, 0, 1, 2, 3])).toBe(0);
    });

    test('Example 3: [4,5,6,7] => 4', () => {
        expect(solution.findMin([4, 5, 6, 7])).toBe(4);
    });

    test('Single-element: [10] => 10', () => {
        expect(solution.findMin([10])).toBe(10);
    });

    test('No rotation: [1,2,3,4,5] => 1', () => {
        expect(solution.findMin([1, 2, 3, 4, 5])).toBe(1);
    });

    test('Rotated once: [5,1,2,3,4] => 1', () => {
        expect(solution.findMin([5, 1, 2, 3, 4])).toBe(1);
    });

    test('Large rotation: [2,3,4,5,6,7,8,1] => 1', () => {
        expect(solution.findMin([2, 3, 4, 5, 6, 7, 8, 1])).toBe(1);
    });
});
