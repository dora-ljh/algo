/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export var permuteUnique = function(nums) {
  // 排序的用处是会把重复元素放在一起
  nums.sort((a,b)=>a - b);
  const res = [];
  const track = [];
  const used = new Array(nums.length).fill(false);
  const backtrack = function (){
    if(track.length === nums.length){
      res.push(track.slice());
      return;
    }
    for(let i = 0; i < nums.length; i++){
      if(used[i])continue;
      /**
        保证相同元素在排列中的相对位置保持不变
        i > 0 代表 我只有有前一个元素，才能取到 nums[i - 1]
        nums[i] === nums[i - 1] 如果上一个元素跟我是一样的
        !used[i - 1] 是说上一个元素没有用到
        如果同层级的上一个元素没有用到，则直接跳过
        就是说要保证 2 一定要在2'前边，比如如果不写这一个判断
       [
       [ 1, 2, 2' ],[ 1, 2', 2 ],
       [ 2, 1, 2' ],[ 2, 2', 1 ],
       [ 2', 1, 2 ],[ 2', 2, 1 ]
       ]
       其实只要把2'在2前边的给过滤掉，就可以了，就会剩下
       [ [ 1, 2, 2' ], [ 2, 1, 2' ], [ 2, 2', 1 ] ]

       标准全排列算法之所以出现重复，是因为把相同元素形成的全排列视为不同的序列，
       但实际上他们应该是相同的，
       而如果固定相同元素形成的序列顺序，当然就避免了重复。

       当出现重复元素时，比如输入 nums = [1,2,2',2'']，2'只有在2已经被使用的情况下才会被选择
       同理，
       2''只有在2'已经被使用的情况下才会被选择，这就保证了相同元素在排列中的相对位置保证固定

      * */

      if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1])continue;
      used[i] = true;
      track.push(nums[i]);
      backtrack(i);
      used[i] = false;
      track.pop();
    }
  }
  backtrack();
  return res;
};

// console.log(permuteUnique([1,2,2]));
