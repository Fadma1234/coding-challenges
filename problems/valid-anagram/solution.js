/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sSort = s.split('').sort().join('');
    const tSort = t.split('').sort().join('');
    return sSort === tSort;
}

module.exports = { isAnagram };
