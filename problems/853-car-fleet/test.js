const Solution = require('./solution');

describe('Car Fleet', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: target = 10, position = [1,4], speed = [3,2]', () => {
        const result = solution.carFleet(10, [1, 4], [3, 2]);
        expect(result).toBe(1);
    });

    test('Example 2: target = 10, position = [4,1,0,7], speed = [2,2,1,1]', () => {
        const result = solution.carFleet(10, [4, 1, 0, 7], [2, 2, 1, 1]);
        expect(result).toBe(3);
    });

    test('non catching car ahead', () => {
        const result = solution.carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]);
        // reference from LeetCode example
        expect(result).toBe(3);
    });

    test('single car', () => {
        const result = solution.carFleet(100, [0], [50]);
        expect(result).toBe(1);
    });

    test('already fleets', () => {
        const result = solution.carFleet(10, [2, 3, 5], [3, 2, 1]);
        expect(result).toBe(3);
    });
});
