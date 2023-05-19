/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
export var combinationSum2 = function(candidates, target) {
  // 排序是为了方便对比，前后元素是否重复
  candidates.sort((a,b)=>a-b);
  const res = [];
  const track = [];
  const backtrack = function (startIndex,trackSum){
    if(trackSum > target) return;
    if(trackSum === target){
      res.push(track.slice());
      return;
    }
    for(let i = startIndex; i < candidates.length; i++){
      // 其实就是说，同一层级，如果出现同样的分支时，保留第一次出现的分支即可，
      // i > startIndex 是用来选中除了遍历的这个元素，后边的所有元素
      // candidates[i] === candidates[i - 1] 是用来选中跟当前分支的前一个元素是否相同，
      // 满足这两个条件，就说明当前分支出现了两次同样的元素，直接剪枝掉后边的一个
      if(i > startIndex && candidates[i] === candidates[i - 1])continue;
      track.push(candidates[i]);
      trackSum += candidates[i];
      backtrack(i + 1, trackSum);
      track.pop();
      trackSum -= candidates[i];
    }
  };
  backtrack(0,0);
  return res;
};

// console.log(combinationSum2([1],1))
