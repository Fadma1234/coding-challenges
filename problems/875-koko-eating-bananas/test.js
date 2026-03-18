const Solution = require('./solution');

describe('Koko Eating Bananas', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1', () => {
        expect(solution.minEatingSpeed([1, 4, 3, 2], 9)).toBe(2);
    });

    test('Example 2', () => {
        expect(solution.minEatingSpeed([25, 10, 23, 4], 4)).toBe(25);
    });

    test('Minimum speed when h equals piles length', () => {
        expect(solution.minEatingSpeed([3, 6, 7, 11], 4)).toBe(11);
    });

    test('Higher h allows smaller speed', () => {
        expect(solution.minEatingSpeed([30, 11, 23, 4, 20], 6)).toBe(23);
    });
});
