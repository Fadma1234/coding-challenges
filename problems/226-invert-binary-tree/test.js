const Solution = require('./solution');

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('Invert Binary Tree', () => {
    let solution;

    beforeEach(() => {
        solution = new Solution();
    });

    const buildTree = (values) => {
        if (values.length === 0) return null;

        const root = new TreeNode(values[0]);
        const queue = [root];
        let i = 1;

        while (i < values.length) {
            const node = queue.shift();

            if (values[i] !== null && values[i] !== undefined) {
                node.left = new TreeNode(values[i]);
                queue.push(node.left);
            }
            i += 1;

            if (i < values.length && values[i] !== null && values[i] !== undefined) {
                node.right = new TreeNode(values[i]);
                queue.push(node.right);
            }
            i += 1;
        }

        return root;
    };

    const treeToArray = (root) => {
        if (root === null) return [];

        const result = [];
        const queue = [root];

        while (queue.length > 0) {
            const node = queue.shift();

            if (node === null) {
                result.push(null);
                continue;
            }

            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }

        while (result.length > 0 && result[result.length - 1] === null) {
            result.pop();
        }

        return result;
    };

    test('Example 1: [1,2,3,4,5,6,7] -> [1,3,2,7,6,5,4]', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        const inverted = solution.invertTree(root);
        expect(treeToArray(inverted)).toEqual([1, 3, 2, 7, 6, 5, 4]);
    });

    test('Example 2: [3,2,1] -> [3,1,2]', () => {
        const root = buildTree([3, 2, 1]);
        const inverted = solution.invertTree(root);
        expect(treeToArray(inverted)).toEqual([3, 1, 2]);
    });

    test('Example 3: [] -> []', () => {
        const root = buildTree([]);
        const inverted = solution.invertTree(root);
        expect(treeToArray(inverted)).toEqual([]);
    });

    test('Single node stays the same', () => {
        const root = buildTree([42]);
        const inverted = solution.invertTree(root);
        expect(treeToArray(inverted)).toEqual([42]);
    });
});
