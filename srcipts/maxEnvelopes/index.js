/**
 * @param {number[][]} envelopes
 * @return {number}
 */
export var maxEnvelopes = function (envelopes) {
  // 根据宽度升序排列，然后宽度相同的话，根据高度降序排列
  // 这样就可以只考虑高度的子序列就好了
  // 宽度是肯定可以放进去的，高度的话，只要从小到大的递增子序列就可以放进去了
  envelopes.sort(function (a, b) {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  });
  // 然后就拿出所有的高度
  const height = envelopes.map(item => item[1]);
  // 求高度的最大递增子序列
  return lengthOfLIS(height);
};


// 具体解释可查看 递增子序列 算法
const lengthOfLIS = function (nums) {
  const db = new Array(nums.length).fill(0);
  for (let i = 0; i < nums.length; i++) {
    db[i] = 1;
    for (let j = 0; j < i; j++) {
      const fast = nums[i];
      const slow = nums[j];
      if (slow < fast) {
        db[i] = Math.max(db[i], db[j] + 1);
      }
    }
  }
  return db.reduce((a, b) => Math.max(a, b));
}


// console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
