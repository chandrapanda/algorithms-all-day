//write a function that accepts an array and a value
function linearSearch(arr, val) {
  //loop through the array and check if the current array element is equal to the value
  for (let i = 0; i < arr.length; i++) {
    //if it is, return the index at which the element is found
    if (arr[i] === val) {
      return i;
    }
  }
  //if value is never found, return -1
  return -1;
}
