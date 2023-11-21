type choice = number | boolean | null;
type expectT = {
  toBe: (v: choice) => boolean;
  notToBe: (v: choice) => boolean;
};

var expect = function (val: choice): expectT {
  return {
    toBe: function (v) {
      if (val === v) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (v) => {
      if (val !== v) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
const res = expect(2).notToBe(2);

// 2704. To Be Or Not To Be

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.
