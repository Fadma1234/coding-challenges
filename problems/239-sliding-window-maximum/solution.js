class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        if (k === 0 || n === 0) return [];

        const deque = []; // will store indices of useful elements
        const output = [];

        for (let i = 0; i < n; i++) {
            // remove indices that are out of this window
            while (deque.length && deque[0] <= i - k) {
                deque.shift();
            }

            // remove smaller values from the back; they are not needed
            while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
                deque.pop();
            }

            deque.push(i);

            // record max for windows that have reached size k
            if (i >= k - 1) {
                output.push(nums[deque[0]]);
            }
        }

        return output;
    }
}

module.exports = Solution;
