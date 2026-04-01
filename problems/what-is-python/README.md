# What is Python?

**Difficulty:** Beginner

## Problem

Python is an interpreted programming language. It was created by Guido van Rossum and first released in 1991. Python is known for its simplicity and readability, which makes it a great language for beginners.

This course will teach you the core concepts of Python. But if you're a beginner, the most important thing you will learn is how to think like a programmer.

### Challenge

The program below is supposed to calculate the first 20 digits of pi. Right now it only prints the first 19 digits because the variable `n` is set to `19`.

Fix the bug by changing the following line:

```python
n = 19
```

to:

```python
n = 20
```

Then run the program again.

### Starting Code

```python
from decimal import Decimal, getcontext

def calculate_pi(n):
    getcontext().prec = n + 2  # Set precision higher than needed for accuracy
    
    C = 426880 * Decimal(10005).sqrt()
    K = 6
    M = 1
    X = 1
    L = 13591409
    S = L
    
    for i in range(1, n):
        M = (K ** 3 - 16 * K) * M // i ** 3
        L += 545140134
        X *= -262537412640768000
        S += Decimal(M * L) / X
        K += 12
    
    pi = C / S
    return str(pi)[:n + 2]  # Return first n digits plus the '3.'

n = 19
pi_digits = calculate_pi(n)
print(pi_digits)
```

### Expected Output

```
3.14159265358979323846
```
