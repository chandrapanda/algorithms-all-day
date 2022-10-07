// Given a string, the input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s) {
  //create a stack by using a hashmap
  const symbolMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let myStack = [];

  for (let char of s) {
    //if char is in the map, push it to array
    if (symbolMap[char]) {
      myStack.push(char);
      //if stack is not empty AND the top item in stack is equal to the char, remove the last element
    } else if (
      myStack.length > 0 &&
      symbolMap[myStack[myStack.length - 1]] === char
    ) {
      myStack.pop();
    } else {
      return false;
    }
  }
  //when stack is empty, it means matching symbols have been found
  return myStack.length === 0;
}
