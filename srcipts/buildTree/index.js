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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
export var buildTree = function(preorder, inorder) {
  return build(
    preorder,0,preorder.length - 1,
    inorder, 0, preorder.length - 1
    )
};


const build = function (preorder,preStart,preEnd,inorder,inStart,inEnd){
  if(!preorder.length)return null;
  // root 值为当前先序遍历的第一个
  const root = new TreeNode(preorder[preStart]);
  // 找到root节点在中序位置中的位置
  const rootInorderIndex = inorder.findIndex(item=>item === preorder[preStart]);

  // root节点在中序位置中的左侧及为root的左子树所有节点
  // 找到root节点的左侧结束节点位置
  const rootInorderLeftEndIndex = rootInorderIndex - 1;
  // 找到root节点的左侧开始节点位置
  const rootInorderLeftStartIndex = inStart;

  // root节点在中序位置中的右侧及为root的右子树所有节点
  // 找到root节点的右侧开始节点位置
  const rootInorderRightStartIndex = rootInorderIndex + 1;
  // 找到root节点的左侧结束节点位置
  const rootInorderRightEndIndex = inEnd;

  // 找到左子树有几个值, 左子树右几个，那就是 中序遍历的 左侧结束位置 - 左侧开始位置
  const rootLeftCount = rootInorderLeftEndIndex - rootInorderLeftStartIndex;
  // 然后就能找到在 先序遍历中 ，左子树到哪个位置
  // 这个是 preorder 中左子树的开始位置
  let rootLeftPreorderStartIndex = preStart + 1;
  // 这个是 preorder 左子树 结束的位置
  const rootLeftPreorderEndIndex = rootLeftPreorderStartIndex + rootLeftCount;
  // 这个是 preorder 右子树开始的位置
  const rootRightPreorderStartIndex = rootLeftPreorderEndIndex + 1;
  // 这个是 preorder 右子树结束的位置
  const rootRightPreorderEndIndex = preEnd;
  // 右子树的个数
  const rootRightCount = rootRightPreorderEndIndex - rootRightPreorderStartIndex;

  if(rootLeftCount >= 0){
    root.left = build(
      preorder, rootLeftPreorderStartIndex,  rootLeftPreorderEndIndex,
      inorder, rootInorderLeftStartIndex, rootInorderLeftEndIndex
    );
  }else {
    root.left = null;
  }

  if(rootRightCount >= 0){
    root.right = build(
      preorder, rootRightPreorderStartIndex, rootRightPreorderEndIndex,
      inorder, rootInorderRightStartIndex, rootInorderRightEndIndex
    );
  }else {
    root.right = null;
  }


  return root;
}

// console.log(buildTree([-1],[-1]));
// console.log(buildTree([1,2,5,4,6,7,3,8,9],[5,2,6,4,7,1,8,3,9]));
