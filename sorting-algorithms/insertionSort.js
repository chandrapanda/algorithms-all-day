//write a function that sorts the array using Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //start by picking 2nd element in array
    let currentVal = arr[i];
    //loop the other direction for comparison
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      //compare 2nd element with element that comes before it
      arr[j + 1] = arr[j];
      //swap if necessary
    }
    arr[j + 1] = currentVal;
    //continue to iterate through sorted portion
  }

  //return sorted array
  return arr;
}

insertionSort([2, 1, 9, 75, 4]);
