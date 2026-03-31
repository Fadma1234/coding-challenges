const Solution = require('./solution');

describe('Reverse String', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    test('Example 1: hello -> olleh', () => {
        expect(solution.reverseString('hello')).toBe('olleh');
    });

    test('Example 2: world -> dlrow', () => {
        expect(solution.reverseString('world')).toBe('dlrow');
    });

    test('Empty string remains empty', () => {
        expect(solution.reverseString('')).toBe('');
    });

    test('Palindrome string remains same reversed', () => {
        expect(solution.reverseString('madam')).toBe('madam');
    });
});
