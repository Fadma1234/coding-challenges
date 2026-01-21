# Longest Consecutive Sequence

## Problem

Given an array of integers `nums`, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in **O(n) time**.

## Examples

### Example 1:
**Input:** `nums = [2,20,4,10,3,4,5]`

**Output:** `4`

**Explanation:** The longest consecutive sequence is `[2, 3, 4, 5]`.

### Example 2:
**Input:** `nums = [0,3,2,5,4,6,1,1]`

**Output:** `7`

**Explanation:** The longest consecutive sequence is `[0, 1, 2, 3, 4, 5, 6]`.

## Approach

Use a Set to store all numbers for O(1) lookup. For each number, check if it's the start of a sequence (i.e., `num - 1` is not in the set). If it is, count the length of the consecutive sequence starting from that number. Track the maximum length found.

**Time Complexity:** O(n)
**Space Complexity:** O(n)
