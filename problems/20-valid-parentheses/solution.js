/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const map = { ')': '(', ']': '[', '}': '{' };
    const stack = [];

    for (const ch of s) {
        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (map[ch] !== top) return false;
        }
    }

    return stack.length === 0;
}

module.exports = isValid;
