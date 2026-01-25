# Container With Most Water

**Difficulty:** Medium

## Problem Description

You are given an integer array `heights` where `heights[i]` represents the height of the i-th bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

## Examples

### Example 1
**Input:** `height = [1,7,2,5,4,7,3,6]`
**Output:** `36`

### Example 2
**Input:** `height = [2,2,2]`
**Output:** `4`

## Approach

Uses a two-pointer technique:
- Start with pointers at the beginning and end of the array
- The area between two bars is: `min(heights[left], heights[right]) * (right - left)`
- Move the pointer pointing to the shorter bar inward, as moving the taller bar can only decrease the area
- Track the maximum area found

**Time Complexity:** O(n)
**Space Complexity:** O(1)
