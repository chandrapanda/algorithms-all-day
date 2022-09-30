// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists

function sumIndices(arr, targ) {
  //prepare new array to return (optional)
  let myNewArr = [];
  //run loop on array of integers
  for (let i = 0; i < arr.length; i++) {
    //find the difference of TARG minus current value
    const difference = targ - arr[i];
    //set indexOf difference to push into array later (again, optional)
    const differenceIndex = arr.indexOf(difference);
    //make sure difference index stays within bounds of array, IE not less than array/(undefined length) AND not equal to current val index
    if (differenceIndex !== -1 && differenceIndex !== i) {
      myNewArr.push(i, differenceIndex);
      //return here once it finds 2 indices whose sums add to targ
      //I know it doesn't matter what order the indices are returned but I'm OCD
      return myNewArr.sort((a, b) => a - b);
    }
  }
}

//test cases:
// sumIndices([24, 100, 33, -7, 2, 7, 11, 15], 115)
sumIndices([3, 4, 4, 4, 2, -4, 10, 74, 97, -33], 0);
// sumIndices([0, 5, 3, 2, 5], 10)
// sumIndices([-2, 1, -3, 10, -2, 0], -4)
