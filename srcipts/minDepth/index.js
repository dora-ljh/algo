import {generateBinaryTreeFromArray} from '../../utils/index.js'

const tree  = generateBinaryTreeFromArray([1,2,3,4,5]);
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
export var minDepth = function(root) {
  if(!root) return 0;
  let depth = 1;
  const arr = [root];
  while (arr.length){
    // 这里记录一下size，遍历当前层所有节点
    const sz = arr.length;
    for(let i = 0; i < sz; i++){
      const curr = arr.shift();
      // 判断是否到达终点
      if(!curr.left && !curr.right)return depth;
      // 将 cur 的相邻节点加入队列
      if(curr.left) arr.push(curr.left)
      if(curr.right) arr.push(curr.right)
    }
    depth += 1;
  }
};

// console.log(tree);
// console.log(minDepth(tree));
