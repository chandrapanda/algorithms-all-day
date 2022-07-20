//Write a function called averagePair. Given a sorted array of integers and a target avg,
// determine if there is a pair of values in the array where the average of the pair equals
//the target average. return TRUE if avg found, FALSE if not

//create a function that takes in a sorted array of integers and a target average
function averagePair(arr, avg) {
  //if array has fewer than two numbers, return null
  if (arr.length < 2) {
    return false;
  }

  //create first pointer
  let start = 0;
  //create second pointer
  let next = arr.length - 1;
  //see if first pointer and second pointer average out to equal avg.
  while (start < next) {
    let pairAvg = (arr[start] + arr[next]) / 2;
    if (pairAvg === avg) return true;
    //if not equal, continue to increment
    else if (pairAvg < avg) start++;
    else next--;
  }

  //return false if no average is found to equal avg
  return false;
}
