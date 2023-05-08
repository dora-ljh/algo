/**
 * @param {number[]} nums
 * @return {number}
 */
export var lengthOfLIS = function (nums) {
  // 记录每个位置的最大子序列个数
  const db = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    // 自身也算是自己的最大最序列，所以为1
    db[i] = 1;
    // 然后去查找前边的值里边比自己小的，最大子序列的位置，
    for (let j = 0; j < i; j++) {
      const fast = nums[i];
      const slow = nums[j];
      // 查找到之后，就看下比自身目前的最大子序列大不大，如果大则赋值
      if (fast > slow) {
        db[i] = Math.max(db[i], 1 + db[j]);
      }
    }
  }
  // 找出最大的子序列
  return db.reduce((a, b) => Math.max(a, b));
};

// console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));
