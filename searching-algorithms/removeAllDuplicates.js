// Write a function that takes in an array of integers and the array with duplicates removed

// Ex:
// Input: [1,2,2,3]
// Output: [1,2,3]

// Input: [4,5,4,4,7,5]
// Output: [4,5,7]

// Input: [1,2,3,5]
// Output: [1,2,3,5]

function removeDuplicates(arr) {
  let noRepeatsArr = [...new Set(arr)];
  return noRepeatsArr;
}

removeDuplicates([1, 2, 2, 4, 0, 0, 0, 2, 4, 22]);
// removeDuplicates([9, 2, 2, 9])
// removeDuplicates([-1, 2, -2, 4, -1, 2, 4])
// removeDuplicates([1, 98, 33, -2, 2, 2, 4])
