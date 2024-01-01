type sI = (x: number) => number;

var mySqrt: sI = function (x) {
  if (x === 0) {
    return x;
  }
  let fst: number = x;
  let prevGuess: number;

  const maxIterations: number = 100;

  for (let i = 0; i < maxIterations; i++) {
    prevGuess = fst;
    fst = (fst + x / fst) / 2;

    if (Math.abs(fst - prevGuess) < 1) {
      break;
    }
  }

  return Math.floor(fst);
};
const res = mySqrt(4);

// Sqrt(x)
// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
