import {generateBinaryTreeFromArray} from "../../../utils/index.js";
import {buildTree} from "./index.js";

describe("从前序与中序遍历序列构造二叉树", () => {
  test("空数组输入返回null", () => {
    expect(buildTree([],[])).toBe(null);
  });

  test("中序有值", () => {
    const nums = [3, 2, 1, 6, 0, 5];
    const expected = generateBinaryTreeFromArray([3,9,20,null,null,15,7]);
    expect(buildTree([3,9,20,15,7],[9,3,15,20,7])).toEqual(expected);
  });

  test("输入数组[-1]", () => {
    const expected = generateBinaryTreeFromArray([-1]);
    expect(buildTree([-1],[-1])).toEqual(expected);
  });

  test("输入数组长一点", () => {
    const expected = generateBinaryTreeFromArray([1,2,3,5,4,8,9,null,null,6,7]);
    expect(buildTree([1,2,5,4,6,7,3,8,9],[5,2,6,4,7,1,8,3,9])).toEqual(expected);
  });
});
