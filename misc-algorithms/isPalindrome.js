// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

//reverse string and compare method
let isPalindrome = function (str) {
  let reversedString = str.split("").reverse().join("");
  if (reversedString === str) {
    return true;
  } else {
    return false;
  }
};

//compare beginning of str to end of str using iteration
let isPalindrome = function (str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

isPalindrome("radar");
