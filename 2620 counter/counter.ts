// Given an integer n, return a counter function.
//  This counter function initially returns n and then returns 1 more
// than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Counter
function createCounter(n: number): () => number {
  let count: number = n - 1;
  return function () {
    count++;
    return count;
  };
}

const counter: () => number = createCounter(10);
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
