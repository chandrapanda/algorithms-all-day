//implement a function called areThereDuplicates which accepts a variable number of args
//and checks whether there are any duplicates among args passed in
//return TRUE if there are duplicates and FALSE if there are not

function areThereDuplicates() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}
