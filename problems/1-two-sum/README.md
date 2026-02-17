# Two Sum

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices `i` and `j` such that `nums[i] + nums[j] == target` and `i != j`.

You may assume that every input has exactly one pair of indices `i` and `j` that satisfy the condition.

Return the answer with the smaller index first.

## Example

**Input:** 
```
nums = [3,4,5,6], target = 7
```

**Output:** 
```
[0,1]
```

## Difficulty
Easy

## Topics
- Array
- Hash Table

## Approach

This solution uses a brute force approach with nested loops to check all pairs of numbers.

**Time Complexity:** O(n²)  
**Space Complexity:** O(1)
