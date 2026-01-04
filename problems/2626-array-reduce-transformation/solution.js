/**
 * LeetCode 2626 — Array Reduce Transformation
 * @param {number[]} nums
 * @param {(accum:number, curr:number)=>number} fn
 * @param {number} init
 * @return {number}
 */
function arrayReduce(nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
}

module.exports = { arrayReduce };
