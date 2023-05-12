/**
 * @param {number[]} nums
 * @return {number[]}
 */
export var largestDivisibleSubset = function (nums) {
  const dp = Array.from(nums, () => []);
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 这里用来判断当前 i 能 余 0 的时候，之前最大的整数集，以及这个整数集的index
    let maxSubsetLen = 0, index = -1;
    for (let j = 0; j < i; j++) {
      // 这里因为排过序，所以只需要后一项 余 前一项即可
      // 如果这一项可以 除尽，那么就判断这个比记录的最大整数集是否长，如果长，那么就先记录一下这个整数集的个数和index
      if (nums[i] % nums[j] === 0 && dp[j].length > maxSubsetLen) {
        maxSubsetLen = dp[j].length;
        index = j;
      }
    }
    // 如果找到的有index，则更新一下这个 i 的最大整数集
    if (index !== -1) {
      dp[i] = dp[index].slice();
    }
    // 并把自身放进去
    dp[i].push(nums[i]);
  }
  // 返回最大的整数集
  return dp.reduce((a, b) => a.length > b.length ? a : b);
};


// console.log(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720]));
