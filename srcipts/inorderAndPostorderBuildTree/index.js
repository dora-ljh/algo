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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
// export var buildTree = function(inorder, postorder) {
//   return build(inorder,0,inorder.length - 1,postorder,0,postorder.length - 1);
// };
//
// // 易看懂版本
// const build =  function (inorder,inStart,inEnd,postorder,postStart,postEnd){
//   if(postStart > postEnd) return null;
//   // 取当前节点的root
//   const rootVal = postorder[postEnd];
//
//   // 先在中序数组中找到root的值，他的左边就是左子树，右边就是右子树
//   const rootInorderIndex = inorder.findIndex(item=>item===rootVal);
//
//   // 当前节点，中序数组中左子树开始位置和结束位置
//   const rootInorderLeftStartIndex = inStart;
//   const rootInorderLeftEndIndex = rootInorderIndex - 1;
//
//   // 当前节点，中序数组中右子树开始位置和结束位置
//   const rootInorderRightStartIndex = rootInorderIndex + 1;
//   const rootInorderRightEndIndex = inEnd;
//
//   // 当前节点右子树的个数
//   const rootRightSize = rootInorderRightEndIndex - rootInorderRightStartIndex + 1;
//
//   // 当前节点，后序数组中右子树的开始位置和结束位置
//   const rootPostorderRightStartIndex = postEnd - rootRightSize;
//   const rootPostorderRightEndIndex = postEnd - 1;
//
//   // 当前节点，后序数组中左子树的开始位置和结束位置
//   const rootPostorderLeftStartIndex = postStart;
//   const rootPostorderLeftEndIndex = rootPostorderRightStartIndex - 1;
//
//   const root = new TreeNode(rootVal);
//   // 构造当前节点左子树
//   root.left = build(
//     inorder,rootInorderLeftStartIndex,rootInorderLeftEndIndex,
//     postorder,rootPostorderLeftStartIndex,rootPostorderLeftEndIndex
//   );
//
//   // 构造当前节点右子树
//   root.right = build(
//     inorder,rootInorderRightStartIndex,rootInorderRightEndIndex,
//     postorder,rootPostorderRightStartIndex,rootPostorderRightEndIndex
//   )
//
//   return root;
//
// }


export var buildTree = function (inorder, postorder) {
  const valToIndex = new Map();
  for (let i = 0; i < inorder.length; i++) {
    valToIndex.set(inorder[i], i);
  }
  const build = function (inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd) return null;
    // root 节点对应的值就是后序遍历数组的最后一个元素
    const rootVal = postorder[postEnd];
    // rootVal 在中序遍历数组中的索引
    const index = valToIndex.get(rootVal);

    // 左子树的节点个数
    const leftSize = index - inStart;

    const root = new TreeNode(rootVal);

    root.left = build(
      inorder, inStart, index - 1,
      postorder, postStart, postStart + leftSize - 1,
    );

    root.right = build(
      inorder, index + 1, inEnd,
      postorder, postStart + leftSize, postEnd - 1
    )


    return root;

  }
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};


// console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
