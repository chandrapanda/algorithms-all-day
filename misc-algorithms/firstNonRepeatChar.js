// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.
//  Ex: Input: “the quick brown fox jumps over the calm kitten quietly” Output: "b"
//  Input: “this hat is the greatest!" Output: "g"
//  Input: “what a wonderful day it has been!” Output: "o"

//simple for loop with if/else statement
function firstNonRepeatChar(str) {
  //instantiate empty object to store character count
  let charCount = {};
  //in case of upper case letters, change all letters to lower case
  let lowerCaseStr = str.toLowerCase();
  //iterate through the lower case string to compare characters
  for (let i = 0; i < lowerCaseStr.length; i++) {
    //instantiate key corresponding to each different character in string
    let currentChar = lowerCaseStr[i];
    //increment charCount if repeated char found
    if (charCount[currentChar]) {
      charCount[currentChar]++;
      //else set to 1
    } else {
      charCount[currentChar] = 1;
    }
  }
  //after string is iterated through, loop through keys in charCount object and return first time 1 is encountered
  for (let j in charCount) {
    if (charCount[j] === 1) {
      return j;
    }
  }
}

//using ternary operator
function firstNonRepeatChar(str) {
  //instantiate object variable to store count of each character in string
  let charCount = {};
  //set all characters in string to lower case
  let lowerCaseStr = str.toLowerCase();
  //iterate through lower cased string
  for (let i = 0; i < lowerCaseStr.length; i++) {
    //if no repeat char at this index, set charCount to 1
    !charCount[lowerCaseStr[i]]
      ? (charCount[lowerCaseStr[i]] = 1)
      : //else, increment charCount for
        charCount[lowerCaseStr[i]]++;
  }
  //iterate through charCount object and return first character that occurs 1 time
  for (let j in charCount) {
    if (charCount[j] === 1) return j;
  }
  //if all characters repeat, return 'no results found'
  return "No results found";
}

//using indexOf method
function firstNonRepeatChar(str) {
  let lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (
      lowerCaseStr.indexOf(lowerCaseStr.charAt(i)) ==
      lowerCaseStr.lastIndexOf(lowerCaseStr.charAt(i))
    ) {
      return lowerCaseStr.charAt(i);
    }
  }
  return "No results found";
}

//test cases I used below:

// firstNonRepeatChar("Hello world");
// firstNonRepeatChar("You are my favorite!");
// firstNonRepeatChar("AABBCC");
firstNonRepeatChar("CaSe is not iMpoRtAnT.");
// firstNonRepeatChar("The quick fox is too cute!");
