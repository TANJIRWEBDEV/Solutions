function twoSum(nums: number[], target: number): number[] {
const res: number[] = [];
  let exitLoop: boolean = false;
  for (let i: number = 0; i < nums.length && !exitLoop; i++) {
    function findI(params: number, indexss: number): void {
      for (let j: number = indexss + 1; j < nums.length; j++) {
        if (params + nums[j] === target) {
          res.push(indexss, j);
          exitLoop = true;
          return;
        }
      }
    }
    findI(nums[i], i);
  }
  return res;
};
