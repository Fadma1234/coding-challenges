# Sort Descending

## Problem Statement

The .sort() method also accepts some optional parameters. This is the .sort() function signature:

def sort(key=None, reverse=False) -> None:

The key parameter allows us to customize the sorting order. We will learn more about this soon.

The reverse parameter is a boolean value that determines whether the list should be sorted in descending order. By default, it is set to False.

If we want to sort a list in descending order, we can set the reverse parameter to True.

elements = [5, 3, 6, 2, 1]

elements.sort(key=None, reverse=True)

print(elements) # [6, 5, 3, 2, 1]

We can actually omit the key parameter and only pass the reverse parameter, by using a feature of Python called keyword arguments.

elements.sort(reverse=True)

It's also possible for us to sort the list in ascending order and then manually reverse the result.

elements = [5, 3, 6, 2, 1]

elements.sort()

elements.reverse()

## Challenge

Implement the following functions:

sort_words(words: List[str]) -> List[str] - This function accepts a list of words and returns the list of words sorted in descending order.

sort_numbers(numbers: List[int]) -> List[int] - This function accepts a list of numbers and returns the list of numbers sorted in descending order.

sort_decimals(numbers: List[float]) -> List[float] - This function accepts a list of decimal numbers and returns the list of decimal numbers sorted in descending order.

## Example

**Input:**
```python
sort_words(["cherry", "apple", "blueberry", "banana", "watermelon", "zucchini", "kiwi", "pear"])
```

**Output:**
```
['zucchini', 'watermelon', 'pear', 'kiwi', 'cherry', 'blueberry', 'banana', 'apple']
```

**Input:**
```python
sort_numbers([1, 5, 3, 2, 4, 11, 19, 9, 2, 5, 6, 7, 4, 2, 6])
```

**Output:**
```
[19, 11, 9, 7, 6, 6, 5, 5, 4, 4, 3, 2, 2, 2, 1]
```

**Input:**
```python
sort_decimals([3.14, 2.82, 6.433, 7.9, 21.555, 21.554])
```

**Output:**
```
[21.555, 21.554, 7.9, 6.433, 3.14, 2.82]
```

## Difficulty
Easy

## Topics
- Python
- Sorting

## Approach
Use the sort() method with reverse=True on the input lists and return them.