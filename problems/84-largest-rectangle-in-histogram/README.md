# Largest Rectangle in Histogram

## Problem Statement

You are given an array of integers `heights` where `heights[i]` represents the height of a bar. The width of each bar is 1.

Return the area of the largest rectangle that can be formed among the bars.

Note: This chart is known as a histogram.

## Example

**Input:** 
```
heights = [7,1,7,2,2,4]
```

**Output:** 
```
8
```


**Input:** 
```
heights = [1,3,7]
```

**Output:** 
```
7
```

## Difficulty
Hard

## Topics
- Array
- Stack

## Approach

This solution checks each bar as a potential height of a rectangle, then expands to the left
and right to find the furthest extent where the height is at least as large.  It uses a simple
nested traversal and is therefore O(n²) in the worst case.

**Time Complexity:** O(n²)
**Space Complexity:** O(1)