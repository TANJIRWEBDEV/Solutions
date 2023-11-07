function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const result: number[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
}

const res = map([1, 2, 3], function plusOne(n) {
  return n + 1;
});

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
