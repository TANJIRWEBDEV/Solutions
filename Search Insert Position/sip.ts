type sI = (nums: number[], target: number) => number;

var searchInsert: sI = function (nums, target) {
  let less: number | undefined;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] < target) {
      less = i;
    }
  }

  return less !== undefined ? less + 1 : 0;
};
const res = searchInsert([1, 3, 5, 6], 5);

// Search Insert Position

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
