const Solution = require('./solution');

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

describe('Linked List Cycle', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    const buildList = (values) => {
        if (values.length === 0) return null;
        let head = new ListNode(values[0]);
        let current = head;
        for (let i = 1; i < values.length; i++) {
            current.next = new ListNode(values[i]);
            current = current.next;
        }
        return head;
    };

    const createCycle = (head, pos) => {
        if (pos === -1) return;
        let tail = head;
        while (tail.next) {
            tail = tail.next;
        }
        let cycleNode = head;
        for (let i = 0; i < pos; i++) {
            cycleNode = cycleNode.next;
        }
        tail.next = cycleNode;
    };

    test('Example 1: [1,2,3,4] with cycle at 1 -> true', () => {
        const head = buildList([1, 2, 3, 4]);
        createCycle(head, 1);
        const result = solution.hasCycle(head);
        expect(result).toBe(true);
    });

    test('Example 2: [1,2] no cycle -> false', () => {
        const head = buildList([1, 2]);
        createCycle(head, -1);
        const result = solution.hasCycle(head);
        expect(result).toBe(false);
    });

    test('Empty list -> false', () => {
        const head = buildList([]);
        const result = solution.hasCycle(head);
        expect(result).toBe(false);
    });

    test('Single node -> false', () => {
        const head = buildList([1]);
        const result = solution.hasCycle(head);
        expect(result).toBe(false);
    });

    test('Cycle at beginning: [1,2,3] cycle at 0 -> true', () => {
        const head = buildList([1, 2, 3]);
        createCycle(head, 0);
        const result = solution.hasCycle(head);
        expect(result).toBe(true);
    });
});