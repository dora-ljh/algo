/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//   // 易看懂版本
//
//   // 结果
//   const res = [];
//   // 路径
//   const track = [];
//   // 参数：开始index，路径和
//   const backtrack = function (startIndex, trackSum){
//     // 大于目标值，直接返回
//     if(trackSum > target)return;
//     // 等于目标值则记录一下
//     if(trackSum === target){
//       res.push(track.slice());
//       return;
//     }
//
//     // 回溯算法框架
//     for(let i = startIndex; i < candidates.length; i++){
//       // 选择 candidates[i]
//       track.push(candidates[i]);
//       trackSum += candidates[i];
//       // 递归遍历下一层递归树
//       // 注意 元素可以复用的话，直接使用 i，元素不能重复使用的话，i + 1
//       backtrack(i,trackSum);
//       // 撤销选择 candidates[i]
//       track.pop();
//       trackSum -= candidates[i];
//     }
//   }
//   backtrack(0,0);
//   return res;
// };
export var combinationSum = function(candidates, target) {
  // 稍难理解版本

  const res = [];
  const track = [];
  // 这里先排序，方便之后剪枝，排序的目的是为了保证，后边相加的值一定大于前者
  candidates.sort((a, b) => a - b);
  const backtrack = function (startIndex, trackSum){
    if(trackSum > target)return;
    if(trackSum === target){
      res.push(track.slice());
      return;
    }
    // 这里则直接剪枝掉后边大于的数值，只循环小于目标值的数 trackSum + candidates[i] <= target
    for(let i = startIndex; i < candidates.length && trackSum + candidates[i] <= target; i++){
      track.push(candidates[i]);
      trackSum += candidates[i];
      backtrack(i,trackSum);
      track.pop();
      trackSum -= candidates[i];
    }
  }
  backtrack(0,0);
  return res;
};


// console.log(combinationSum([8,7,4,3],11));
