class Solution {
    /**
     * @param {{val: number, next: object|null}|null} l1
     * @param {{val: number, next: object|null}|null} l2
     * @return {{val: number, next: object|null}|null}
     */
    addTwoNumbers(l1, l2) {
        const dummy = { val: 0, next: null };
        let node = dummy;
        let carry = 0;

        while (l1 || l2 || carry) {
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            const sum = v1 + v2 + carry;
            carry = Math.floor(sum / 10);
            node.next = { val: sum % 10, next: null };
            node = node.next;

            if (l1) l1 = l1.next;
            if (l2) l2 = l2.next;
        }

        return dummy.next;
    }
}

module.exports = Solution;
