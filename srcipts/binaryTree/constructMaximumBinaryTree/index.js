import {TreeNode} from "../../../utils/index.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export var constructMaximumBinaryTree = function(nums) {
  // 空nums 则直接返回null
  if(!nums.length)return null;

  // 然后开始寻找当前nums中最大的值
  let maxIndex = 0;
  for(let i = 1; i < nums.length; i++){
    if(nums[i] > nums[maxIndex]){
      maxIndex = i;
    }
  }
  // 最大的值
  const rootVal = nums[maxIndex];
  // 最大的值左侧
  const leftNums = nums.slice(0,maxIndex);
  // 最大的值右侧
  const rightNums = nums.slice(maxIndex + 1,nums.length);
  // 构造当前节点
  const root = new TreeNode(rootVal);
  // 构造当前root的left节点，left节点就是他的左侧nums构造的root
  root.left = constructMaximumBinaryTree(leftNums);
  // 构造当前root的right节点
  root.right = constructMaximumBinaryTree(rightNums);
  // 返回当前构造节点
  return root;
};


// 更加优化的版本，不需要每次截取数组
// export var constructMaximumBinaryTree = function (nums) {
//   return build(nums, 0, nums.length - 1);
// };
//
// const build = function (nums, lo, hi) {
//   if (lo > hi) return null;
//   let index = -1, maxVal = -Infinity;
//   for (let i = lo; i <= hi; i++) {
//     if (maxVal < nums[i]) {
//       index = i;
//       maxVal = nums[i];
//     }
//   }
//   const root = new TreeNode(maxVal);
//   root.left = build(nums, lo, index - 1);
//   root.right = build(nums, index + 1, hi);
//   return root;
// }


// console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));
