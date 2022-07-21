//implement merge of two sorted arrays
//given two sorted arrays, create a helper function that creates a new array which is also sorted, and consists of all of the elements in the two input arrays
//This function should run O(n+m) time and O(n+m) space and SHOULD NOT modify the parameters passed to it
function merge(arr1, arr2) {
  //create an empty array, take a look at the smallest values in each input array HINT while loops
  let newArray = [];
  //create two pointers to iterate through both arrays and compare
  let i = 0;
  let j = 0;
  //while there are still values we haven't looked at...
  while (i < arr1.length && j < arr2.length) {
    //if the value in the first array is smaller than the value in the second array push the value in the first array into our results and move onto the next value in the first array
    if (arr2[j] > arr1[i]) {
      newArray.push(arr1[i]);
      i++;
      //if it's larger (or equal) push the value in the second array into our results and move onto the next value in the second array
    } else {
      newArray.push(arr2[j]);
      j++;
    }
  }
  //once we exhaust one array, push in all remaining values from the other array
  while (i < arr1.length) {
    newArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArray.push(arr2[j]);
    j++;
  }
  return newArray;
}
// merge([1, 8, 13], [2, 14, 28, 33]);

function mergeSort(arr) {
  //start with base case
  if (arr.length <= 1) return arr;
  //break array into halves until you have arrays that are empty or have 1 element HINT: *use SLICE recursively*
  let middle = Math.floor(arr.length / 2);
  //once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  //once the array has been merged back together, return the merged (and sorted) array
  return merge(left, right);
}

mergeSort([12, 25, 104, 90, 1, 4, 45, 98, 4, 58]);
