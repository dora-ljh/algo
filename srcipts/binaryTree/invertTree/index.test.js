import {generateBinaryTreeFromArray} from "../../../utils/index.js";
import {invertTree} from "./index.js";


describe('翻转二叉树', () => {

  it('多层级', () => {
    const root = generateBinaryTreeFromArray([4,2,7,1,3,6,9]);
    const expected = generateBinaryTreeFromArray([4,7,2,9,6,3,1]);

    expect(invertTree(root)).toEqual(expected);
  });

  it('双层级', () => {
    const root = generateBinaryTreeFromArray([2,1,3]);
    const expected = generateBinaryTreeFromArray([2,3,1]);

    expect(invertTree(root)).toEqual(expected);
  });

  it('root 是 null', () => {
    const root = null;
    expect(invertTree(root)).toBeNull();
  });
});
