type rvalue = {
  I: number;
  V: number;
  X: number;
  L: number;
  C: number;
  D: number;
  M: number;
};
const romanValues: rvalue = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
function isValidRomanNumeral(s: string): boolean {
  const validChars: string = Object.keys(romanValues).join("");

  for (const char of s) {
    if (!validChars.includes(char)) {
      return false;
    }
  }

  return true;
}

var romanToInt = function (s: string): number {
  if (!isValidRomanNumeral(s)) {
    throw new Error("Invalid Roman numeral: " + s);
  }
  let result: number = 0;
  let prevValue: number = 0;

  for (let i: number = s.length - 1; i >= 0; i--) {
    const currentValue: number = romanValues[s[i] as keyof rvalue];

    if (currentValue >= prevValue) {
      result += currentValue;
    } else {
      result -= currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

const res = romanToInt("MCMXCIV");

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
