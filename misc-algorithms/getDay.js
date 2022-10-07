//Write a function that takes in a number and returns the corresponding day of the week
//Input: 1 Output: 'Monday; Input: 8 Output: undefined
function getDay(dayNum) {
  const dayMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
  return dayMap[dayNum];
}

console.log(getDay(5));
