// write a function that loops over a string and increments how many times the string is found
function stringSearch(longStr, shortStr) {
  count = 0;
  //loop over longer string
  for (let i = 0; i < longStr.length; i++) {
    //loop over the shorter string
    for (let j = 0; j < shortStr.length; j++) {
      //if the characters don't match, break out of the inner loop
      if (shortStr[j] !== longStr[i + j]) break;
      //if characters do match, keep going
      //if you complete the inner loop and find a match, increment the count of matches
      if (j === shortStr.length - 1) count++;
    }
  }
  //return count
  return count;
}
