function longestCommonPrefix(strs: string[]): string {
  const firstString: string = strs[0];
  let prefix: string = "";
  for (let i: number = 0; i < firstString.length; i++) {
    const currentW: string = firstString[i];

    for (let j: number = 1; j < strs.length; j++) {
      if (strs[j][i] !== currentW) {
        return prefix;
      }
    }
    prefix += currentW;
  }
  return prefix;
}
const vary = longestCommonPrefix(["dog", "racecar", "car"]);

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
