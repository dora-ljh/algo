import {generateBinaryTreeFromArray} from "../../../utils/index.js";
import {connect} from "./index.js";

describe('填充每个节点的下一个右侧节点指针', () => {
  let root;
  beforeEach(()=>{
    // 构造二叉树
    root = generateBinaryTreeFromArray([1,2,3,4,5,6,7]);

    function traverse(tree){
      if(!tree)return null;
      tree.next = null;
      traverse(tree.left);
      traverse(tree.right);
    }
    traverse(root);
  });
  test('节点1234567', () => {

    // 执行函数
    connect(root);

    // 验证节点是否正确链接
    expect(root.next).toBeNull();
    expect(root.left.next).toBe(root.right);
    expect(root.right.next).toBeNull();
    expect(root.left.left.next).toBe(root.left.right);
    expect(root.left.right.next).toBe(root.right.left);
    expect(root.right.left.next).toBe(root.right.right);
    expect(root.right.right.next).toBeNull();
  });
});
