/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var subsetsWithDup = function(nums) {
  nums.sort((a,b)=>a-b);
  const res = [];
  const track = [];
  const backtrack = function (startIndex){
    res.push(track.slice());
    for(let i = startIndex; i < nums.length; i++){
      // 循环同一层级的时候，只循环一个相同的数即可，其他的排列会相同
      // 具体可查看 组合总和 II
      if(i > startIndex && nums[i] === nums[i - 1])continue;
      track.push(nums[i]);
      backtrack(i + 1);
      track.pop()
    }
  }
  backtrack(0);
  return res;
};

// console.log(subsetsWithDup([1,2,2]));
