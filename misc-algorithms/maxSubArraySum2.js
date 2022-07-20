//given an array of integers and a number, write a function which finds
// the maximum sum of a subarray with the length of the number passed to the function
// the subarray must be consecutive

function maxSubarraySum(arr, num) {
  //variable which stores maximum sum
  let maxSum = 0;

  //variable which stores current sum
  let currentSum = 0;

  //return null if array is shorter than num given
  if (arr.length < num) return null;

  //loop through array to find first sum
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  //set the current sum to maximum
  currentSum = maxSum;

  //loop through the array using a window set at num
  for (let i = num; i < arr.length; i++) {
    currentSum = currentSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
