type F = (x: number) => number;

function compose(f: F[]): F {
  const fn: F[] = f.reverse();
  return function (x: number) {
    let res: number = x;
    fn.map((v: F) => (res = v(res)));
    return res;
  };
}

const res = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);

/**
 * const res = compose([x => x + 1, x => 2 * x])
 * res(4) // 9
 */
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65;
// Explanation
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
