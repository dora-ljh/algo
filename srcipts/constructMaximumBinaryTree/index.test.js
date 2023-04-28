import {generateBinaryTreeFromArray} from "../../utils/index.js";
import {constructMaximumBinaryTree} from "./index.js";

describe("最大二叉树", () => {
  test("空数组输入返回null", () => {
    expect(constructMaximumBinaryTree([])).toBe(null);
  });

  test("输入数组[3,2,1,6,0,5]", () => {
    const nums = [3, 2, 1, 6, 0, 5];
    const expected = generateBinaryTreeFromArray([6,3,5,null,2,0,null,null,1]);
    expect(constructMaximumBinaryTree(nums)).toEqual(expected);
  });

  test("输入数组[3,2,1]", () => {
    const nums = [3,2,1];
    const expected = generateBinaryTreeFromArray([3,null,2,null,1]);
    expect(constructMaximumBinaryTree(nums)).toEqual(expected);
  });
});
