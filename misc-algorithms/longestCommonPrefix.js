//Write a function to find the longest common prefix string amongst an array of strings. if !commonPre, return empty string ""
//param {array of strings}
//output {string}

var longestCommonPrefix = function (strs) {
  //first, account for edge case
  if (!strs || strs.length === 0) return "";
  //next, set variable to sort array of strings from shortest to longest
  let sortedStrs = strs.sort((a, b) => a.length - b.length);
  //select shortest string
  let shortestStr = sortedStrs[0];
  while (!strs.every((string) => string.startsWith(shortestStr))) {
    if (shortestStr.length === 0) return;
    shortestStr = shortestStr.slice(0, -1);
  }
  console.log(shortestStr);
  return shortestStr;
};

longestCommonPrefix(["flower", "flow", "flight"]);
