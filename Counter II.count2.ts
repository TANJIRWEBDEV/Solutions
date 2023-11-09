type counterObject = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

var createCounter = function (init: number): counterObject {
  let count: number = init;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: () => {
      count--;
      return count;
    },
    reset: () => {
      count = init;
      return count;
    },
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
