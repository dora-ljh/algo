import {generateBinaryTreeFromArray} from "../../../utils/index.js";

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
 * @return {TreeNode}
 */
export var invertTree = function(root) {
  if(!root) return null;
  // 拿到左子树
  const left = invertTree(root.left);
  // 拿到右子树
  const right = invertTree(root.right);
  // 翻转左右子树
  root.left = right;
  root.right = left;
  return root;
};

const tree = generateBinaryTreeFromArray([4,2,7,1,3,6,9]);

// console.log(invertTree(tree));
