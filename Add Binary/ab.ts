type sI = (a: string, b: string) => string;

var addBinary: sI = function (a, b) {
  const sum = (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);

  return sum;
};
const res = addBinary("11", "1");
// Add Binary
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
