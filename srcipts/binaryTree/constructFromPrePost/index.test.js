import {generateBinaryTreeFromArray} from "../../../utils/index.js";
import {constructFromPrePost} from "./index.js";

describe("从中序与后序遍历序列构造二叉树", () => {
  test("空数组输入返回null", () => {
    expect(constructFromPrePost([],[])).toBe(null);
  });

  test("有值", () => {
    const expected = generateBinaryTreeFromArray([1,2,3,4,5,6,7]);
    expect(constructFromPrePost([1,2,4,5,3,6,7],[4,5,2,6,7,3,1])).toEqual(expected);
  });

  test("两个值", () => {
    const expected = generateBinaryTreeFromArray([2,1]);
    expect(constructFromPrePost([2,1],[1,2])).toEqual(expected);
  });

  test("输入数组[1]", () => {
    const expected = generateBinaryTreeFromArray([1]);
    expect(constructFromPrePost([1],[1])).toEqual(expected);
  });
});
