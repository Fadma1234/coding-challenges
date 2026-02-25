const Solution = require('./solution');

describe('Minimum Window Substring', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: s = "OUZODYXAZV", t = "XYZ"', () => {
        const result = solution.minWindow('OUZODYXAZV', 'XYZ');
        expect(result).toBe('YXAZ');
    });

    test('Example 2: s = "xyz", t = "xyz"', () => {
        const result = solution.minWindow('xyz', 'xyz');
        expect(result).toBe('xyz');
    });

    test('Example 3: s = "x", t = "xy"', () => {
        const result = solution.minWindow('x', 'xy');
        expect(result).toBe('');
    });
});
