//create a function which accepts a sorted array and counts the unique values in the array
//there can be negative numbers but it will always be sorted

function countUniqueValues(arr) {
  //return 0 if array is empty
  if (arr.length === 0) {
    return 0;
  }

  // create variable to store object we will return later
  let i = 0;

  //if values are equal, increment uniqueValues by 1
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  //return object
  return i + 1;
}
