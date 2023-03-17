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

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function generateBinaryTreeFromArray(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      const left = new TreeNode(arr[i]);
      node.left = left;
      queue.push(left);
    }

    i++;

    if (i < arr.length && arr[i] !== null) {
      const right = new TreeNode(arr[i]);
      node.right = right;
      queue.push(right);
    }

    i++;
  }

  return root;
}


const tree = generateBinaryTreeFromArray([1,null,2])

console.log(tree);


// 二叉树的后序遍历
var maxDepth = function(root) {
  if(!root)return 0;
  // 拿到左子树深度
  const left = maxDepth(root.left);
  // 拿到右子树深度
  const right = maxDepth(root.right);

  // 返回最大的深度+1
  return Math.max(left,right)+1;

};



console.log(maxDepth(tree));
