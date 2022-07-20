//write a function called maxSubarraySum which accepts an array of integers and a number
//called n. the function should caluclate the max sum of n consecutive elements in array

function maxSubarraySum(arr, num) {
  //set variable for max sum
  let maxSum = 0;
  //set variable for current sum
  let tempSum = 0;
  //take care of edge case to return null if invalid array containing fewer than n numbers
  if (arr.length < num) return null;
  //create first sum and store in varialbe maxSum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  //set current sum to max
  tempSum = maxSum;
  //start another loop but instead of starting from zero, start loop from next spot
  for (let i = 0; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //take the max sum if tempSum is larger than maxSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
