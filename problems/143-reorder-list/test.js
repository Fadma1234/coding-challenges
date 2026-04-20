const Solution = require('./solution');

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

describe('Reorder List', () => {
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

    const listToArray = (head) => {
        const result = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    };

    test('Example 1: [2,4,6,8] -> [2,8,4,6]', () => {
        const head = buildList([2, 4, 6, 8]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([2, 8, 4, 6]);
    });

    test('Example 2: [2,4,6,8,10] -> [2,10,4,8,6]', () => {
        const head = buildList([2, 4, 6, 8, 10]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([2, 10, 4, 8, 6]);
    });

    test('Empty list', () => {
        const head = buildList([]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([]);
    });

    test('Single node', () => {
        const head = buildList([1]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1]);
    });

    test('Two nodes', () => {
        const head = buildList([1, 2]);
        solution.reorderList(head);
        const result = listToArray(head);
        expect(result).toEqual([1, 2]);
    });
});