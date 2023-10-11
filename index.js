//1) Write a function that takes an integer 'x'(greater than 0) as input and returns a new integer
// formed by reversing the digits of 'x' without using any built-in methods for reversal. After
// reversing the digits, determine whether the resulting number has any prime factors. If it does
// have prime factors, return 'Yes' along with the list of prime factors; otherwise, return 'No'."
// Example 1:
// Input - 123
// reversed integer - 321
// prime factors of 321 are 3 and 107
// output - Yes - [3,107]

//function to reverse the digits of a number
function reverseNumber(n) {
  var digit;
  var reversed = 0;
  while (n) {
    digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
  }
  return reversed;
}
//function to identify whether the number is prime
function isPrimeNumber(m) {
  for (let i = 2; i < m; i++) {
    if (m % i === 0) return false;
  }
  return m > 1;
}

//function to find prime factors of a number
function findPrimeFactors(number) {
  const primeFactors = [];
  for (let i = 2; i <= number; i++) {
    while (number % i === 0 && isPrimeNumber(i)) {
      primeFactors.push(i);
      number = number / i;
    }
  }
  return primeFactors;
}

//Main function
function reverseAndFindPrimeFactors(x) {
  if (x <= 0) {
    return "please enter a valid input";
  }

  const reversed = reverseNumber(x);
  const primeFactors = findPrimeFactors(reversed);

  if (primeFactors.length === 0) {
    return "NO";
  } else {
    return `YES [${primeFactors.join(", ")}]`;
  }
}
// console.log(isPrimeNumber(4))
// console.log(reverseNumber(345));
console.log(reverseAndFindPrimeFactors(1500));

// Q4) Given an array of non-negative integers nums, arrange them such that they form the largest
// number and return it.
// Note return the result in the form of string
// Example 1:
// Input: nums = [10,2]
// Output: "210"

const largestNumber = (nums) => {
  if (!nums || nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  if (nums[0] === 0) {
    return "0";
  }
  return nums.join("");
};

console.log(largestNumber([10, 2]));
console.log(largestNumber([3, 30, 34, 5, 9]));

// Q5) Given a array of non-negative integers nums, Find the Kth largest element in the array
// Note - Do not use any sorting algorithm or library's sort method
// Example-1:
// Input: nums = [10,4,12,9,87,34], K = 2
// Output: 34

function findKthLargest(nums, k) {
  const max = Math.max(...nums);
  // const min=Math.min(...nums);
  const count = new Array(max + 1).fill(0);

  for (let num of nums) {
    count[num]++;
  }
  for (let i = count.length - 1; i >= 0; i--) {
    k -= count[i];
    if (k <= 0) return i;
  }
}
let nums = [10, 4, 12, 9, 87, 34];
let k = 2;
console.log(findKthLargest(nums, k));

// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

const groupAnagrams = function (strs) {
  let sorted = strs.map((str) => str.split("").sort().join(""));

  let map = {};

  for (let i = 0; i < sorted.length; i++) {
    if (!map[sorted[i]]) {
      map[sorted[i]] = [strs[i]];
    } else {
      map[sorted[i]].push(strs[i]);
    }
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));

// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false

const wordBreak = function (s, wordArray) {
  let n = s.length;
  let dp = new Array(n + 1).fill(false);
  dp[0] = true;
  for (let i = 0; i <= n; i++) {
    for (let word of wordArray) {
      if (word.length > n) {
        continue;
      }
      if (s.substring(i, i + word.length) === word && dp[i]) {
        dp[i + word.length] = true;
      }
    }
  }
  if (dp[n]) return true;
  return false;
};
// let s = "leetcode";
// let wordArray = ["leet", "code"];
let s = "catsanddog";
let wordArray = ["cats", "dog", "sand", "and", "cat"];

let s1 = "applepenapple";
let wordArray1 = ["apple", "pen"];
console.log(wordBreak(s, wordArray));
console.log(wordBreak(s1, wordArray1));
