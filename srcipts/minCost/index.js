/**
 * @param {number[][]} costs
 * @return {number}
 */
export var minCost = function(costs) {
  // 直接修改每个房子刷这个颜色需要的最少花费成本
  for(let i = 1; i < costs.length; i++){
    // 每一项都只需要计算自身花费，再加上前一项不包含此颜色的最少花费即可
    costs[i][0] += Math.min(costs[i-1][1],costs[i-1][2]);
    costs[i][1] += Math.min(costs[i-1][0],costs[i-1][2]);
    costs[i][2] += Math.min(costs[i-1][0],costs[i-1][1]);
  }
  return costs[costs.length - 1].reduce((a,b)=>Math.min(a,b));
};


// console.log(minCost([[17,2,17],[16,16,5],[14,3,19]]));
