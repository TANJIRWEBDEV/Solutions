type singleNumberType = (prices: number[]) => number;

var singleNumber: singleNumberType = function (nums) {
  let result: number = 0;
  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
};

const res = singleNumber([1]);

console.log(res, "res");

// Single Number

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
