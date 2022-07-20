//implement a function called areThereDuplicates which accepts a variable number of args
//and checks whether there are any duplicates among args passed in
//return TRUE if there are duplicates and FALSE if there are not

//create a function called areThereDuplicates which accepts a variable number of args
function areThereDuplicates(...args) {
  //sort args
  args.sort((a, b) => a > b);

  //set first pointer
  let left = 0;

  //set second pointer
  let next = 1;

  //compare values to see if any are matching
  while (next < args.length) {
    if (args[left] === args[next]) {
      return true;
      //keep incrementing if no duplicates found yet
    }
    left++;
    next++;
  }
  return false;
}
