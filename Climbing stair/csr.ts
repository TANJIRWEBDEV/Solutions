type sI = (n: number) => number;

var climbStairs: sI = function (n) {
  if (n <= 1) {
    return 1;
  }

  const tes = new Array(n + 1).fill(0);
  tes[0] = 1;
  tes[1] = 1;

  for (let i = 2; i <= n; i++) {
    tes[i] = tes[i - 1] + tes[i - 2];
  }

  return tes[n];
};
const res = climbStairs(3);

// Climbing Stairs
// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
