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
var lengthOfLIS = function (nums) {
  const top = [];
  for (let i = 0; i < nums.length; i++) {
    let left = 0, right = top.length;
    while (left < right) {
      const mid = Math.floor((right - left) / 2) + left;
      if (nums[i] <= top[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    if (left === top.length) top.push(nums[i]);
    else top[left] = nums[i];
  }
  return top.length;
};


// console.log(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
