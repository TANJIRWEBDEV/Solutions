type addTwoFn = (
  promose1: Promise<number>,
  promise2: Promise<number>
) => Promise<number>;

var addTwoPromises: addTwoFn = async function (promise1, promise2) {
  const prom = await Promise.all([promise1, promise2]);
  return prom.reduce((p, c) => p + c, 0);
};
const promise1: Promise<number> = new Promise((resolve) =>
    setTimeout(() => resolve(2), 20)
  ),
  promise2: Promise<number> = new Promise((resolve) =>
    setTimeout(() => resolve(5), 60)
  );
addTwoPromises(promise1, promise2).then(console.log);

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

// Example 1:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:

// Input:
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
