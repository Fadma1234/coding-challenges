const Solution = require('./solution');

describe('Reverse Linked List', () => {
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

    test('Example 1: [0,1,2,3] -> [3,2,1,0]', () => {
        const head = buildList([0, 1, 2, 3]);
        const result = solution.reverseList(head);
        expect(listToArray(result)).toEqual([3, 2, 1, 0]);
    });

    test('Example 2: [] -> []', () => {
        const head = buildList([]);
        const result = solution.reverseList(head);
        expect(listToArray(result)).toEqual([]);
    });

    test('Single node', () => {
        const head = buildList([1]);
        const result = solution.reverseList(head);
        expect(listToArray(result)).toEqual([1]);
    });
});
