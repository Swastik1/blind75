// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109

// solution

/**
 * @param {number[]} nums
 * @return {number}
 */

// Use a Set for Lookups (O(1))
//  Create a set to store unique numbers for fast lookups.
// Skip Processed Sequences
//  If num-1 exists in the set, skip - already processed sequence.
// Build the Current Sequence
//  If num-1 doesn't exist, initialize currentStreak=1 and iterate while num+1 exists.
// Find the Longest Sequence
//  Update streak with the max of streak and currentStreak.
// Return the Result
//  Return the final streak (longest sequence length).

var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let streak = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currentStreak = 1;

    while (set.has(num + 1)) {
      currentStreak++; // Increments the currentStreak variable by 1. This variable keeps track of the length of the current consecutive sequence being discovered.
      num++; // Increments the num variable by 1. This moves the focus to the next element in the potential consecutive sequence.
    }

    streak = Math.max(streak, currentStreak);
  }

  return streak;
};
