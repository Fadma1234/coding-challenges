function isAlphanumeric(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let newStr = '';
    for (let c of s) {
        if (isAlphanumeric(c)) {
            newStr += c.toLowerCase();
        }
    }
    return newStr === newStr.split('').reverse().join('');
}

module.exports = { isPalindrome };