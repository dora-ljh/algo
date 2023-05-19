import {generateBinaryTreeFromArray} from "../../../utils/index.js";
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// export var connect = function(root) {
//   // 层次遍历
//   // 为空直接返回
//   if(!root)return null;
//   // 先拿到第一层
//   const arr = [root];
//   while (arr.length){
//     // 拿到每一层的length
//     let len = arr.length;
//     while (len){
//       // 循环一层就减掉一层
//       len--;
//       // 取出当前层的每个
//       const node = arr.shift();
//       // 判断是不是当前层的最后一个，如果是，就直接next为null
//       node.next = len?arr[0]:null;
//       //把当前节点的左右子树放进arr
//       if(node.left)arr.push(node.left);
//       if(node.right)arr.push(node.right);
//
//     }
//   }
//   return root;
// };


export var connect = function(root) {
  // 三叉树
  // 为空直接返回
  if(!root)return null;
  // 传入root的左右节点
  traverse(root.left,root.right);
  return root;
};

const traverse = function (node1,node2){
  if(!node1||!node2)return null;
  // 先让node1 和node2 链接起来
  node1.next = node2;
  // 这个是吧node1 的左右节点链接起来
  traverse(node1.left,node1.right);
  // 这个是把 node2 的左右节点链接起来
  traverse(node2.left,node2.right);
  // 然后把 node1 的右节点和 node2 的左节点链接起来
  traverse(node1.right,node2.left);
}



// const tree = generateBinaryTreeFromArray([1,2,3,4,5,6,7]);
// connect(tree)
