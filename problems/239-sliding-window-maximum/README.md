# Sliding Window Maximum

**Difficulty:** Hard

## Problem Description

You are given an array of integers `nums` and an integer `k`. There is a sliding window of size `k` that starts at the left edge of the array. The window slides one position to the right until it reaches the right edge of the array.

Return a list that contains the maximum element in the window at each step.

### Examples

**Example 1**

Input: `nums = [1,2,1,0,4,2,6], k = 3`

Output: `[2,2,4,4,6]`

Explanation:
```
Window position            Max
---------------           -----
[1  2  1] 0  4  2  6        2
 1 [2  1  0] 4  2  6        2
 1  2 [1  0  4] 2  6        4
 1  2  1 [0  4  2] 6        4
 1  2  1  0 [4  2  6]       6
```

## Approach

A common linear-time solution uses a deque to keep the indices of potentially maximum
values for the current window.  At each step:

1. Remove indices that are out of the current window (`i - k`).
2. Pop from the back any elements smaller than the incoming element (they can't be
   maximum if the new element is larger).
3. Push the current index, then record the front of the deque as the window maximum
   once the first window is built.

This yields **O(n)** time and **O(k)** space.

```
// Deque-based implementation (see `solution.js` for code).
```
