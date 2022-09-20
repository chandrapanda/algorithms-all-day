/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //declare empty array for var to return
  let twoNumbers = [];
  //store index in variable
  let numLocations = {};

  //iterate through array and assign key value pairs according to index and value
  for (let i = 0; i < nums.length; i++) {
    //instantiate variable for current index number
    let currentNum = nums[i];
    //instantiate a variable for lookup
    let differenceNum = target - currentNum;
    //account for case of trying to use same index twice
    if (
      numLocations[differenceNum] != undefined &&
      i !== numLocations[differenceNum]
    ) {
      //push indices to array
      twoNumbers.push(i, numLocations[differenceNum]);
      //return twoNumbers variable
      return twoNumbers;
    }
    numLocations[nums[i]] = i;
  }
};
