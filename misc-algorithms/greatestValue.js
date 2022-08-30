//Write a function that takes in array of numbers and outputs the maximum number

//ex: Input [1, 2, 4] Output 4, Input [5, 20, 2] Output 20, Input [3, 3, 3] Output 3

function greatestValue(arr) {
  // set variable for greatest value
  let greatest = -Infinity;
  //account for edge case of short or no array input
  if (!arr?.length) {
    return null;
  }
  //iterate through array to find greatest value
  for (let i = 0; i < arr.length; i++) {
    const currentIndex = arr[i];
    if (currentIndex < greatest) {
      continue;
    }
    greatest = currentIndex;
  }
  return greatest;
}
