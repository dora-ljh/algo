import {TreeNode} from "../../utils/index.js";
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// export var constructFromPrePost = function(preorder, postorder) {
//   const valToIndex = new Map();
//   for (let i = 0; i < postorder.length; i++) {
//     valToIndex.set(postorder[i], i);
//   }
//   const build = function (preorder,preStart,preEnd,postorder,postStart,postEnd){
//     // 右子树是左子树的最后一个+1，所以可能会出现右子树的Start > end的情况。比如 [2,1] [1,2]
//     if(preStart > preEnd) return null;
//     const rootVal = preorder[preStart];
//     // 构造当前节点
//     const root = new TreeNode(rootVal);
//     // 这一步是为了判断，左子树位置，最后一步一定是相等，左子树不可能出现start > end 的情况，左子树相等即为最后一项
//     if(preStart === preEnd) return root;
//
//     // 当前节点，前序数组中左子树开始位置
//     const rootPreorderLeftStartIndex = preStart + 1;
//
//     // 后序遍历中左子树的节点位置
//     const index = valToIndex.get(preorder[rootPreorderLeftStartIndex]);
//     const rootLeftSize = index - postStart;
//     // 当前节点，前序数组中左子树结束位置
//     const rootPreorderLeftEndIndex = rootPreorderLeftStartIndex + rootLeftSize;
//
//     // 当前节点，前序数组中右子树开始位置和结束
//     const rootPreorderRightStartIndex = rootPreorderLeftEndIndex + 1;
//     const rootPreorderRightEndIndex = preEnd;
//
//     // 当前节点，后序数组中左子树开始位置和结束
//     const rootPostorderLeftStartIndex = postStart;
//     const rootPostorderLeftEndIndex = index;
//
//     const rootPostorderRightStartIndex = index + 1;
//     const rootPostorderRightEndIndex = postEnd - 1;
//
//
//     // 构造当前节点左子树
//     root.left = build(
//       preorder, rootPreorderLeftStartIndex, rootPreorderLeftEndIndex,
//       postorder, rootPostorderLeftStartIndex, rootPostorderLeftEndIndex,
//     );
//
//     // 构造当前节点右子树
//     root.right = build(
//       preorder, rootPreorderRightStartIndex, rootPreorderRightEndIndex,
//       postorder, rootPostorderRightStartIndex, rootPostorderRightEndIndex,
//     );
//
//     return root;
//   }
//   return build(preorder,0,preorder.length - 1, postorder, 0, postorder.length - 1);
// };

export var constructFromPrePost = function(preorder, postorder) {
  const valToIndex = new Map();
  for (let i = 0; i < postorder.length; i++) {
    valToIndex.set(postorder[i], i);
  }
  const build = function (preorder,preStart,preEnd,postorder,postStart,postEnd){
    // 右子树是左子树的最后一个+1，所以可能会出现右子树的Start > end的情况。比如 [2,1] [1,2]
    if(preStart > preEnd) return null;
    const rootVal = preorder[preStart];
    // 构造当前节点
    const root = new TreeNode(rootVal);
    // 这一步是为了判断，左子树位置，最后一步一定是相等，左子树不可能出现start > end 的情况，左子树相等即为最后一项
    if(preStart === preEnd) return root;

    // root.left 的值是前序遍历第二个元素
    // 通过前序和后序遍历构造二叉树的关键在于通过左子树的根节点
    // 确定 preorder 和 postorder 中左右子树的元素区间
    const leftRootVal = preorder[preStart + 1];
    // leftRootVal 在后序遍历数组中的索引
    const index = valToIndex.get(leftRootVal);

    // 左子树的元素个数
    const leftSize = index - postStart + 1;


    // 构造当前节点左子树
    root.left = build(
      preorder, preStart + 1, preStart + leftSize,
      postorder, postStart, index,
    );

    // 构造当前节点右子树
    root.right = build(
      preorder, preStart + leftSize + 1, preEnd,
      postorder, index + 1, postEnd - 1,
    );

    return root;
  }
  return build(preorder,0,preorder.length - 1, postorder, 0, postorder.length - 1);
};


// console.log(constructFromPrePost([1,2,4,5,3,6,7],[4,5,2,6,7,3,1]));
// console.log(constructFromPrePost([2,1],[1,2]));
