import {generateBinaryTreeFromArray} from '../../utils/index.js';

const tree = generateBinaryTreeFromArray([1,null,2,3])

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
 * @return {number[]}
 */


export var preorderTraversal = function(root) {
  // 二叉树的前序遍历，需要用一个变量记录
  const res = [];
  pre(root,res);
  return res;
};


let pre = function (root,res){
  debugger
  if(!root)return;
  res.push(root.val);
  pre(root.left,res);
  pre(root.right,res);
}

console.log(preorderTraversal(tree));
