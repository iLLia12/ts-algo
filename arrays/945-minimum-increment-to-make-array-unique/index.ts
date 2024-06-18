var minIncrementForUnique = function (nums: number[]): number {
  let res = 0;
  nums.sort((a, b) => a - b);
  for (let i = 1; nums.length > i; i++) {
    if (nums[i - 1] == nums[i]) {
      res++;
      nums[i]++;
    } else if (nums[i - 1] > nums[i]) {
      const a = 1 + nums[i - 1] - nums[i];
      nums[i] += a;
      res += a;
    }
  }
  return res;
};
