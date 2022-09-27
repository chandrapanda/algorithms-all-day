// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.
// EX input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true
// Input: “JavaScript is the best”
// Output: false
//  const allLetters = [...Array(26)].map((_, i) => String.fromCharCode(i + 97));

var isPangram = function (str) {
  //if fewer than 26 char, automatically return false
  if (str.length < 26) {
    return false;
  }
    //instantiate an empty array to fill with values of characters in string
  let uniqueChars = [];
    //change str to lowercase (so JS doesn't declare A !== a)
  let lowerCaseStr = str.toLowerCase();

  //iterate over lower case string
  for (let i = 0; i < lowerCaseStr.length; i++) {
      //current character is declared at the string AT the ASCII code index 
    let currentChar = lowerCaseStr.charCodeAt(i);
      //make sure special characters do not enter our array (such as commas, semicolons)
      if (currentChar >= 97 && currentChar <= 122) {
          //mark the ASCII code as "truthy" in our array
          uniqueChars[currentChar] = true;
      }
      //if ALL uniqueChars exist (26 letters of the alphabet NOT including the 97 ASCII characters before ABC starts) return truthy
      if (uniqueChars.length - 97 === 26) {
          return true;
      }
    }
  return false;
};

isPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game");