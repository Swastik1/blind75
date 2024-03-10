// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters

// solution

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let hmap = {};

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!hmap[char]) {
      hmap[char] = 1;
    } else {
      hmap[char]++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];

    if (hmap[char] === undefined) {
      return false;
    }

    if (hmap[char] < 1) {
      return false;
    }

    hmap[char]--;
  }
  return true;
};
