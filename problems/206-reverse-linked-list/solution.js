class Solution {
    /**
     * @param {{val: number, next: object|null}|null} head
     * @return {{val: number, next: object|null}|null}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr !== null) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return prev;
    }
}

module.exports = Solution;
