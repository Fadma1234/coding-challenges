# Binary Search

## Problem Statement

You are given an array of distinct integers `nums`, sorted in ascending order, and an integer `target`.

Implement a function to search for `target` within `nums`. If it exists, return its index; otherwise, return `-1`.

Your solution must run in `O(log n)` time.

## Example

**Input:**
```
nums = [-1,0,2,4,6,8], target = 4
```

**Output:**
```
3
```

**Input:**
```
nums = [-1,0,2,4,6,8], target = 3
```

**Output:**
```
-1
```

## Difficulty

Easy

## Topics

- Array
- Binary Search

## Approach

This implementation uses a recursive binary search helper named `binary_search` that takes left
and right bounds along with the array and the target.  It returns the index if found or `-1`.

**Time Complexity:** O(log n)
**Space Complexity:** O(log n) due to recursion.