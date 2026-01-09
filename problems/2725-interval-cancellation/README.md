# 2725. Interval Cancellation

Easy

Given a function `fn`, an array of arguments `args`, and an interval time `t`, return a cancel function `cancelFn`.

`fn` should be called with `args` immediately and then called again every `t` milliseconds until `cancelFn` is called.

The returned `cancelFn` will be invoked after some time (the test harness calls `setTimeout(cancelFn, cancelTimeMs)`).

## Example

See the problem description in the repository top-level problem statement.
