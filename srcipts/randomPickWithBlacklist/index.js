/**
 * @param {number} n
 * @param {number[]} blacklist
 */
export var Solution = function (n, blacklist) {
  this.sz = n - blacklist.length;
  this.blacklistMap = new Map();
  for (const b of blacklist) {
    // 先把黑名单都填进去，方便之后判断有没有在黑名单中
    this.blacklistMap.set(b, 666);
  }
  // 最后一位
  let last = n - 1;
  for (let b of blacklist) {
    // 只有在范围内的 b 才需要去处理
    if (b < this.sz) {
      // 在存储映射关系的时候，得先判断，last 这个值在不在黑名单，如果在的话，不处理，直接 减减
      // 不处理的话，也会在map只能够有映射，只不过映射到了666而已，无影响
      while (this.blacklistMap.has(last)) {
        last--;
      }
      // 黑名单中没有这个数的时候，就存储一下如果随机到黑名单的映射关系
      this.blacklistMap.set(b, last);
      // 存储完之后，再 减减
      last--;
    }
  }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const random = Math.floor(Math.random() * this.sz);
  if (this.blacklistMap.has(random)) return this.blacklistMap.get(random)
  return random;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */

// const solution = new Solution(7, [2, 3, 5]);
// console.log(solution.pick()); // 返回0，任何[0,1,4,6]的整数都可以。注意，对于每一个pick的调用，
// // 0、1、4和6的返回概率必须相等(即概率为1/4)。
// console.log(solution.pick()); // 返回 4
// console.log(solution.pick()); // 返回 1
// console.log(solution.pick()); // 返回 6
// console.log(solution.pick()); // 返回 1
// console.log(solution.pick()); // 返回 0
// console.log(solution.pick()); // 返回 4
