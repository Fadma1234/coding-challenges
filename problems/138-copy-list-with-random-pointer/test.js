const Solution = require('./solution');

class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

describe('Copy List with Random Pointer', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    const buildList = (values) => {
        if (!values || values.length === 0) return null;
        const nodes = [];
        for (const [val, randomIndex] of values) {
            const node = new Node(val);
            nodes.push(node);
        }
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].next = nodes[i + 1] || null;
            if (values[i][1] !== null) {
                nodes[i].random = nodes[values[i][1]];
            }
        }
        return nodes[0];
    };

    const listToArray = (head) => {
        const nodes = [];
        let current = head;
        while (current) {
            nodes.push(current);
            current = current.next;
        }
        const result = [];
        for (const node of nodes) {
            const randomIndex = node.random ? nodes.indexOf(node.random) : null;
            result.push([node.val, randomIndex]);
        }
        return result;
    };

    test('Example 1: [[3,null],[7,3],[4,0],[5,1]]', () => {
        const head = buildList([[3, null], [7, 3], [4, 0], [5, 1]]);
        const copied = solution.copyRandomList(head);
        expect(listToArray(copied)).toEqual([[3, null], [7, 3], [4, 0], [5, 1]]);
    });

    test('Example 2: [[1,null],[2,2],[3,2]]', () => {
        const head = buildList([[1, null], [2, 2], [3, 2]]);
        const copied = solution.copyRandomList(head);
        expect(listToArray(copied)).toEqual([[1, null], [2, 2], [3, 2]]);
    });

    test('Empty list', () => {
        const head = buildList([]);
        const copied = solution.copyRandomList(head);
        expect(copied).toBeNull();
    });
});