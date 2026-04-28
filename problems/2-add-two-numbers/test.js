const Solution = require('./solution');

describe('Add Two Numbers', () => {
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

    test('Example 1: [1,2,3] + [4,5,6] => [5,7,9]', () => {
        const l1 = buildList([1, 2, 3]);
        const l2 = buildList([4, 5, 6]);
        const result = solution.addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([5, 7, 9]);
    });

    test('Example 2: [9] + [9] => [8,1]', () => {
        const l1 = buildList([9]);
        const l2 = buildList([9]);
        const result = solution.addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 1]);
    });

    test('Carry across multiple nodes: [9,9] + [1] => [0,0,1]', () => {
        const l1 = buildList([9, 9]);
        const l2 = buildList([1]);
        const result = solution.addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0, 0, 1]);
    });
});
