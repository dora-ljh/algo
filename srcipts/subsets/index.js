/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var subsets = function(nums) {
  const res = [];
  const track = [];
  // startIndex 参数控制树枝的生长避免产生重复的子集
  const backtrack = function (startIndex){
    // 把每一步都放进去
    res.push(track.slice());
    // length相等，直接返回
    if(track.length === nums.length)return;
    for(let i = startIndex; i < nums.length; i++){
      track.push(nums[i]);
      backtrack(i + 1);
      track.pop();
    }
  };
  backtrack(0);
  return res;
};

// console.log(subsets([1,2,3]));
