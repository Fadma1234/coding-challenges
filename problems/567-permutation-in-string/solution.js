/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
    const n = s1.length, m = s2.length;
    if (n > m) return false;

    const cnt1 = new Array(26).fill(0);
    const cnt2 = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        cnt1[s1.charCodeAt(i) - 97]++;
        cnt2[s2.charCodeAt(i) - 97]++;
    }

    if (equals(cnt1, cnt2)) return true;

    for (let i = n; i < m; i++) {
        cnt2[s2.charCodeAt(i) - 97]++;
        cnt2[s2.charCodeAt(i - n) - 97]--;
        if (equals(cnt1, cnt2)) return true;
    }

    return false;
}

function equals(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

module.exports = { checkInclusion };
