const Solution = require('./solution');

describe('Top K Frequent Elements', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: nums = [1,2,2,3,3,3], k = 2', () => {
        const result = solution.topKFrequent([1,2,2,3,3,3], 2);
        // order may vary
        expect(result.sort()).toEqual([2,3].sort());
    });

    test('Example 2: nums = [7,7], k = 1', () => {
        const result = solution.topKFrequent([7,7], 1);
        expect(result).toEqual([7]);
    });

    test('Single element repeated', () => {
        const result = solution.topKFrequent([5,5,5,5], 1);
        expect(result).toEqual([5]);
    });

    test('Multiple frequencies', () => {
        const result = solution.topKFrequent([1,1,2,2,3], 2);
        expect(result.sort()).toEqual([1,2].sort());
    });
});
