const Solution = require('./solution');

describe('Daily Temperatures', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: temperatures = [30,38,30,36,35,40,28]', () => {
        const result = solution.dailyTemperatures([30, 38, 30, 36, 35, 40, 28]);
        expect(result).toEqual([1, 4, 1, 2, 1, 0, 0]);
    });

    test('Example 2: temperatures = [22,21,20]', () => {
        const result = solution.dailyTemperatures([22, 21, 20]);
        expect(result).toEqual([0, 0, 0]);
    });

    test('Single element', () => {
        const result = solution.dailyTemperatures([30]);
        expect(result).toEqual([0]);
    });

    test('All increasing temperatures', () => {
        const result = solution.dailyTemperatures([1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 1, 1, 1, 0]);
    });

    test('All decreasing temperatures', () => {
        const result = solution.dailyTemperatures([5, 4, 3, 2, 1]);
        expect(result).toEqual([0, 0, 0, 0, 0]);
    });
});
