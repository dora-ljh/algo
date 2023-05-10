/**
 * @param {number[]} nums
 * @return {number}
 */
// export var lengthOfLIS = function (nums) {
//   // 记录每个位置的最大子序列个数
//   const db = new Array(nums.length).fill(0);
//   for (let i = 0; i < nums.length; i++) {
//     // 自身也算是自己的最大最序列，所以为1
//     db[i] = 1;
//     // 然后去查找前边的值里边比自己小的，最大子序列的位置，
//     for (let j = 0; j < i; j++) {
//       const fast = nums[i];
//       const slow = nums[j];
//       // 查找到之后，就看下比自身目前的最大子序列大不大，如果大则赋值
//       if (fast > slow) {
//         db[i] = Math.max(db[i], 1 + db[j]);
//       }
//     }
//   }
//   // 找出最大的子序列
//   return db.reduce((a, b) => Math.max(a, b));
// };


export var lengthOfLIS = function (nums) {
  // 算法优化，二分查找法
  // 记录一下牌堆顶部
  const top = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0, right = top.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      // 找一下num i 在牌堆顶部最左侧的位置，
      // 如果小于或者等于 中间的值，则直接让right 为mid，再去找左边界
      if (nums[i] <= top[mid]) {
        right = mid;
      } else {
        // 左侧牌堆如果小的话，则直接从下一个开始找
        left = mid + 1;
      }
    }
    // 如果妹找到合适的牌堆，则新建一个牌堆
    if (left === top.length) top.push(nums[i]);
    // 找到的话，则直接放在牌堆顶部
    else top[left] = nums[i];
  }
  // 返回牌堆顶部
  return top.length;
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
