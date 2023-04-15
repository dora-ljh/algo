/**
 * @param {number[]} w
 */
export var Solution = function(w) {
  this.preNum = [w[0]];
  for(let i = 1; i < w.length; i++){
    this.preNum[i] = this.preNum[i - 1] + w[i];
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  const max = this.preNum[this.preNum.length - 1];
  // 生成[1,max] 的随机数
  const random = parseInt(Math.random()* max , 10) + 1;
  return this.preNum.findIndex(num=>num>=random);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const obj = new Solution([1,3]);

// console.log(obj.pickIndex());
