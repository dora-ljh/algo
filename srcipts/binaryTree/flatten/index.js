import {generateBinaryTreeFromArray} from '../../../utils/index.js';

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
export var flatten = function(root) {
 if(!root)return;
 flatten(root.left);
 flatten(root.right);
 const left = root.left;
 const right = root.right
 // 然后把 root 的左分支重置为 null 也就是 2 的左分支 为null，右分支为 2-》3-》4
 root.left = null;
 // 把 root 的right 重置为 二叉树 的 left 分支，1-》2-》3-》4
 root.right = left;
 // 然后需要去拿左分支的最后一个，也就是 3 ，
 // 这里如果是用left的话，left是可能为null的，也就没有right了，如果想要用left就得判断有没有left，
 // 所以这里直接优化为用root，因为root是直接判断过的
 let temp = root;
 while (temp.right){
  temp = temp.right;
 }
 // 拿到最后一个分支，直接把最后一个分支的right 重置为 right 也就是 3 的right 为 4
 temp.right = right;
};

const tree = generateBinaryTreeFromArray([1,2,5,3,4,null,6]);

// flatten(tree)
// console.log(tree);

