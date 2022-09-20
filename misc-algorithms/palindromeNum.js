// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
var palindromeNum = function (x) {
  let reversedNum = x.toString().split("").reverse().join("");
  console.log(reversedNum);
  console.log(x);
  if (x.toString() === reversedNum) {
    return true;
  } else {
    return false;
  }
};

palindromeNum(133);
