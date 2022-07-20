function bubbleSort(arr) {
  var noSwaps;
  // function swap(index1, index2) {
  //     var temp = arr[index1];
  //     arr[index1] = arr[index2];
  //     arr[index2] = temp;
  // }
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
}

bubbleSort([34, -44, 90, -4, 2, 1, 19, 27, 18]);
