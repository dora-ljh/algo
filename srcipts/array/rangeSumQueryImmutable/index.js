/**
 * @param {number[]} nums
 */
export var NumArray = function(nums) {
  // preSum[0] = 0，便于计算累加和
  this.preNums = [ 0 ];
  // 输入一个数组，构造前缀和
  for(let i = 0; i < nums.length; i++){
    this.preNums[i + 1] = this.preNums[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.preNums[right + 1] - this.preNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

const obj = new NumArray([-2, 0, 3, -5, 2, -1]);

// console.log(obj.sumRange(2,5));
