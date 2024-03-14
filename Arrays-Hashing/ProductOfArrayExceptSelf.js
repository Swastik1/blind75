// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// solution

// Logic
// [1,1*1,1*2,2*3] ->              [1,1,2,6]
// [12*2,4*3,1*4,1]  ->           [24,12,4,1]

// set 1 as a placeholder and multiply with the initial element
// Multiply the products of the elements and store them as elements in left array , traverse the array and do the same in right array
// Multiply both arrays and store the result in one array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let leftArr = [];
  let start = 1;

  for (let i = 0; i < nums.length; i++) {
    leftArr.push(start);
    start = start * nums[i];
  }

  let rightArr = [];
  let start2 = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    rightArr.unshift(start2);
    start2 = start2 * nums[i];
  }

  return leftArr.map((element, i) => element * rightArr[i]);
};
