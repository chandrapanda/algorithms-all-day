//create a function to check whether or not a given string is an anagram of a second given string

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment. Otherwise, set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zero then false
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
