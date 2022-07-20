//Given two strings, write a function to determine if the second string is an
//anagram of the first

//a function takes in two strings
function validAnagram(str1, str2) {
  //write an if statement that returns false if strings are different lengths

  if (str1.length !== str2.length) {
    return false;
  }

  //create an object to break down the contents of each string

  let strComparison = {};

  let strComparison2 = {};

  //create a for loop that iterates through characters in str1
  for (let val of str1) {
    strComparison[val] = (strComparison[val] || 0) + 1;
  }
  //create a for loop that iterates through characters in str2
  for (let val of str2) {
    strComparison2[val] = (strComparison2[val] || 0) + 1;
  }
  //check to see if each character in str1 is present in str2 using created objects

  console.log(strComparison);
  console.log(strComparison2);

  for (let key in strComparison) {
    if (!(key in strComparison2)) {
      return false;
    }
    if (strComparison2[key] !== strComparison[key]) {
      return false;
    }
  }

  return true;
  //return true if the second string is an anagram of the first or false otherwise
}
