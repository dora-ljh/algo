import {generateBinaryTreeFromArray} from "../../utils/index.js";
import {flatten} from "./index.js";


describe('二叉树展开为链表', () => {
  test('平铺为123456', () => {
    /*
     构造下面的二叉树:
          1
         / \
        2   5
       / \   \
      3   4   6
    */
    const root = generateBinaryTreeFromArray([1,2,5,3,4,null,6])


    flatten(root);



    /*
     调用flatten后，二叉树应该变成:
       1
        \
         2
          \
           3
            \
             4
              \
               5
                \
                 6
    */
    expect(root.val).toBe(1);
    expect(root.left).toBeNull();
    expect(root.right.val).toBe(2);
    expect(root.right.left).toBeNull();
    expect(root.right.right.val).toBe(3);
    expect(root.right.right.left).toBeNull();
    expect(root.right.right.right.val).toBe(4);
    expect(root.right.right.right.left).toBeNull();
    expect(root.right.right.right.right.val).toBe(5);
    expect(root.right.right.right.right.left).toBeNull();
    expect(root.right.right.right.right.right.val).toBe(6);
    expect(root.right.right.right.right.right.right).toBeNull();
  });
});
