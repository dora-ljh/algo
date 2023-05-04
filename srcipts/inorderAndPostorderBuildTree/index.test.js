import {generateBinaryTreeFromArray} from "../../utils/index.js";
import {buildTree} from "./index.js";

describe("从中序与后序遍历序列构造二叉树", () => {
  test("空数组输入返回null", () => {
    expect(buildTree([],[])).toBe(null);
  });

  test("中序有值", () => {
    const nums = [3, 2, 1, 6, 0, 5];
    const expected = generateBinaryTreeFromArray([3,9,20,null,null,15,7]);
    expect(buildTree([9,3,15,20,7],[9,15,7,20,3])).toEqual(expected);
  });

  test("输入数组[-1]", () => {
    const expected = generateBinaryTreeFromArray([-1]);
    expect(buildTree([-1],[-1])).toEqual(expected);
  });
});
