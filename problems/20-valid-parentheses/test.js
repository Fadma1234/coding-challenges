const isValid = require('./solution');

describe('Valid Parentheses', () => {
    it('should return true for "[]" (Example 1)', () => {
        expect(isValid('[]')).toBe(true);
    });

    it('should return true for "([{}])" (Example 2)', () => {
        expect(isValid('([{}])')).toBe(true);
    });

    it('should return false for "[(])" (Example 3)', () => {
        expect(isValid('[(])')).toBe(false);
    });

    it('should return true for empty string', () => {
        expect(isValid('')).toBe(true);
    });

    it('should return false for single opening bracket', () => {
        expect(isValid('(')).toBe(false);
    });

    it('should return false for mismatched types', () => {
        expect(isValid('{[}]')).toBe(false);
    });

    it('should return true for nested valid brackets', () => {
        expect(isValid('({[()]})')).toBe(true);
    });
});
