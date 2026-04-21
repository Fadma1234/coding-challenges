const Solution = require('./solution');

describe('Remove Nth Node From End of List', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    const buildList = (values) => {
        let head = null;
        let tail = null;

        for (const value of values) {
            const node = { val: value, next: null };
            if (!head) {
                head = node;
                tail = node;
            } else {
                tail.next = node;
                tail = node;
            }
        }

        return head;
    };

    const listToArray = (node) => {
        const result = [];
        while (node) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    };

    test('Example 1: [1,2,3,4], n=2 => [1,2,4]', () => {
        const head = buildList([1, 2, 3, 4]);
        const result = solution.removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([1, 2, 4]);
    });

    test('Example 2: [5], n=1 => []', () => {
        const head = buildList([5]);
        const result = solution.removeNthFromEnd(head, 1);
        expect(listToArray(result)).toEqual([]);
    });

    test('Example 3: [1,2], n=2 => [2]', () => {
        const head = buildList([1, 2]);
        const result = solution.removeNthFromEnd(head, 2);
        expect(listToArray(result)).toEqual([2]);
    });
});