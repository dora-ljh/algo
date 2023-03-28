import {generateBinaryTreeFromArray} from '../utils/index.js';

const tree = generateBinaryTreeFromArray([1,null,2])

console.log(tree);



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 二叉树的后序遍历
export var maxDepth = function(root) {
  if(!root)return 0;
  // 拿到左子树深度
  const left = maxDepth(root.left);
  // 拿到右子树深度
  const right = maxDepth(root.right);

  // 返回最大的深度+1
  return Math.max(left,right)+1;

};



console.log(maxDepth(tree));
