# Longest Repeating Character Replacement

**Difficulty:** Medium

## Problem Description

You are given a string s consisting of only uppercase English characters and an integer k. You can choose up to k characters of the string and replace them with any other uppercase English character.

After performing at most k replacements, return the length of the longest substring which contains only one distinct character.

## Examples

### Example 1
- **Input:** s = "XYYX", k = 2
- **Output:** 4
- **Explanation:** Either replace the 'X's with 'Y's, or replace the 'Y's with 'X's.

### Example 2
- **Input:** s = "AAABABB", k = 1
- **Output:** 5
- **Explanation:** Replace the 'B' at index 3. The longest substring is "AAAA" with length 4.

## Constraints
- 1 <= s.length <= 10^5
- s consists of only uppercase English characters
- 0 <= k <= s.length

