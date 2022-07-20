function selectionSort(arr) {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    let minValue = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValue]) {
        lowest = j;
        var temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

selectionSort([34, -44, 90, -4, 2, 1, 19, 27, 18]);
