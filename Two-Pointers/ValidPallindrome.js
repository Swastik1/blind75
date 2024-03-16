// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Logic

// Write a cleanup function to make the characters into lowercase by checking their index,
// initialize left and right variables to check the pointer is its matching the char and if not return false , increment left and decrement right
// else return true

// solution

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let cleanString = cleanUp(s);

  return isPal(cleanString);
};

function cleanUp(str) {
  let char = "abcdefghijklmnopqrstuvxwyz0123456789";
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    let lowerCase = str[i].toLowerCase();

    if (char.indexOf(lowerCase) !== -1) {
      newStr += lowerCase;
    }
  }
  return newStr;
}

function isPal(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
