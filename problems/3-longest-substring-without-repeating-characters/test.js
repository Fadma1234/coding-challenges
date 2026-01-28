const Solution = require('./solution');

describe('Longest Substring Without Repeating Characters', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: "zxyzxyz" should return 3', () => {
        expect(solution.lengthOfLongestSubstring("zxyzxyz")).toBe(3);
    });

    test('Example 2: "xxxx" should return 1', () => {
        expect(solution.lengthOfLongestSubstring("xxxx")).toBe(1);
    });

    test('Empty string should return 0', () => {
        expect(solution.lengthOfLongestSubstring("")).toBe(0);
    });

    test('Single character should return 1', () => {
        expect(solution.lengthOfLongestSubstring("a")).toBe(1);
    });

    test('All unique characters should return length', () => {
        expect(solution.lengthOfLongestSubstring("abcdefg")).toBe(7);
    });

    test('Complex case "pwwkew" should return 3', () => {
        expect(solution.lengthOfLongestSubstring("pwwkew")).toBe(3);
    });

    test('Complex case "au" should return 2', () => {
        expect(solution.lengthOfLongestSubstring("au")).toBe(2);
    });

    test('Complex case "dvdf" should return 3', () => {
        expect(solution.lengthOfLongestSubstring("dvdf")).toBe(3);
    });
});
