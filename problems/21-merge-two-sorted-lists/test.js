const Solution = require('./solution');

describe('Merge Two Sorted Lists', () => {
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

    test('Example 1: [1,2,4] + [1,3,5] => [1,1,2,3,4,5]', () => {
        const list1 = buildList([1, 2, 4]);
        const list2 = buildList([1, 3, 5]);
        const merged = solution.mergeTwoLists(list1, list2);
        expect(listToArray(merged)).toEqual([1, 1, 2, 3, 4, 5]);
    });

    test('Example 2: [] + [1,2] => [1,2]', () => {
        const list1 = buildList([]);
        const list2 = buildList([1, 2]);
        const merged = solution.mergeTwoLists(list1, list2);
        expect(listToArray(merged)).toEqual([1, 2]);
    });

    test('Example 3: [] + [] => []', () => {
        const list1 = buildList([]);
        const list2 = buildList([]);
        const merged = solution.mergeTwoLists(list1, list2);
        expect(listToArray(merged)).toEqual([]);
    });

    test('Non-empty order preservation', () => {
        const list1 = buildList([1, 3, 4]);
        const list2 = buildList([2, 6]);
        const merged = solution.mergeTwoLists(list1, list2);
        expect(listToArray(merged)).toEqual([1, 2, 3, 4, 6]);
    });
});
