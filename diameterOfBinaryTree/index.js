import {generateBinaryTreeFromArray} from '../utils';

const tree = generateBinaryTreeFromArray([1,2,3,4,5])

// console.log(tree);

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
export var diameterOfBinaryTree = function(root) {
  const maxD =  new MaxDepth();
  maxD.depth(root);
  // console.log(maxD.depth(root));
  return maxD.maxDiameter;
};



class MaxDepth {
  /* 最大直径 */
  maxDiameter= 0
  depth(root){
    if(!root)return 0;
    const maxLeft = this.depth(root.left);
    const maxRight = this.depth(root.right);
    // 当前最大直径
    const currentMaxDiameter = maxLeft + maxRight;
    // 当前节点的最大直径跟最大直径对比
    this.maxDiameter = Math.max(currentMaxDiameter,this.maxDiameter);
    // 返回当前节点最大深度
    return Math.max(maxLeft,maxRight) + 1;
  }
}


// console.log(diameterOfBinaryTree(tree));
