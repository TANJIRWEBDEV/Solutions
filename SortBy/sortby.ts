type jsonV = number | number[] | { [key: string]: number };
type sortF = (arr: jsonV[], fn: (x: jsonV) => number) => jsonV[];

var sortBy: sortF = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

const res = sortBy(
  [
    [3, 4],
    [5, 2],
    [10, 1],
  ],
  (x: number | number[] | { [key: string]: number }) => {
    if (Array.isArray(x) && x.length > 0) {
      return x[1];
    } else if (typeof x === "object" && x !== null) {
      return Object.values(x)[0];
    } else {
      return x;
    }
  }
);

console.log(res);

// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.
