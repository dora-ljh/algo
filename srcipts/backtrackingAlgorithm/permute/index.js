/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var permute = function(nums) {
  // 结果
  const res = [];
  // 记录「路径」
  const track = [];
  // 「路径」中的元素会被标记为 true，避免重复使用
  const used = new Array(nums.length).fill(false);
  const backtrack = function (){
    // 触发结束条件
    if(track.length === nums.length){
      res.push([...track]);
      return;
    }
    for(let i = 0;i < nums.length;i++){
      // 排除不合法的选择
      if(used[i])continue;
      // 做选择
      track.push(nums[i]);
      used[i] = true;
      // 进入下一层决策树
      backtrack(nums);
      // 取消选择
      track.pop()
      used[i] = false;
    }
  }
  backtrack();
  return res;
};

// console.log(permute([1,2,3]));
