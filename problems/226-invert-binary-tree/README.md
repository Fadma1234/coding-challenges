# Invert Binary Tree

## Problem Statement

You are given the root of a binary tree `root`. Invert the binary tree and return its root.

## Example

Input: `root = [1,2,3,4,5,6,7]`

Output: `[1,3,2,7,6,5,4]`

Input: `root = [3,2,1]`

Output: `[3,1,2]`

Input: `root = []`

Output: `[]`

## Difficulty
Easy

## Topics
- Tree
- Breadth-first Search
- Binary Tree

## Approach
Use breadth-first traversal to swap left and right children for every node.
