const characterReplacement = require('./solution');

describe('Longest Repeating Character Replacement', () => {
    test('Example 1: "XYYX" with k=2 should return 4', () => {
        expect(characterReplacement("XYYX", 2)).toBe(4);
    });

    test('Example 2: "AAABABB" with k=1 should return 5', () => {
        expect(characterReplacement("AAABABB", 1)).toBe(5);
    });

    test('All same characters should return length', () => {
        expect(characterReplacement("AAAA", 0)).toBe(4);
    });

    test('Single character should return 1', () => {
        expect(characterReplacement("A", 0)).toBe(1);
    });

    test('Two characters with k=1 should return 2', () => {
        expect(characterReplacement("AB", 1)).toBe(2);
    });

    test('Alternating characters with k=2 should work', () => {
        expect(characterReplacement("ABAB", 2)).toBe(4);
    });

    test('Different case with larger k', () => {
        expect(characterReplacement("AAAA", 1)).toBe(4);
    });

    test('Long string with limited replacements', () => {
        expect(characterReplacement("AABBBBC", 2)).toBe(4);
    });
});
