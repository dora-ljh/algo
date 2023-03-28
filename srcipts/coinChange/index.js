/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export var coinChange = function(coins, amount) {
  const c = new CoinChange();
  return c.start(coins,amount);
};


class CoinChange{
  memo = [];
  start(coins,amount){
    // 先初始化备忘录特殊值
    this.memo = new Array(amount + 1).fill(-666);
    return this.dp(coins,amount);
  }
  dp(coins,amount){
    // 注意base case
    if(amount === 0) return 0;
    if(amount <= 0) return -1;
    // 查备忘录，防止重复计算
    if(this.memo[amount] !== -666) return this.memo[amount];
    let res = Infinity;
    // 把每一枚硬币都凑一边，查看那个硬币数小
    for(let coin of coins){
      // 计算子问题结果
      const sub = this.dp(coins, amount - coin);
      // 子问题无解则跳过
      if(sub === -1) continue;
      // 选择最小
      res = Math.min(res, sub + 1);
    }
    // 计算结果放入备忘录
    this.memo[amount] = res === Infinity ? -1 : res
    return this.memo[amount];
  }
}

// console.log(coinChange([1,2,5],100));
