//write a function called sameFrequency. Given two positive integers, find out if the two
//numbers have the same frequency of digits. Your solution MUST have time O(n) complexity
//examples: sameFrequency(182, 281) //TRUE ; sameFrequency(22,222) //FALSE

function sameFrequency(int1, int2) {
  //change numbers to strings
  let strNum1 = int1.toString();
  let strNum2 = int2.toString();

  //check length of each integer... if they are not equal, return false

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  //create objects to count frequency of digits in int1 and int2

  const counter1 = {};
  const counter2 = {};

  //loop through int1 to check frequency of digits in int1

  for (let val of strNum1) {
    counter1[val] = (counter1[val] || 0) + 1;
  }

  //loop through int1 to check frequency of digits in int2
  for (let val of strNum2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  //loop through counters to check and see if same digits are found
  for (let key in counter1) {
    if (!(key in counter2)) {
      return false;
    }
    if (counter2[key] !== counter1[key]) {
      return false;
    }
  }

  //return true if same frequency of digits occurs

  return true;
}
