import {generateBinaryTreeFromArray} from '../../utils/index.js';
import {preorderTraversal} from './index.js'

test('二叉树的前序遍历', () => {
  expect(preorderTraversal(generateBinaryTreeFromArray([1,null,2,3]))).toStrictEqual([1,2,3]);
  expect(preorderTraversal(generateBinaryTreeFromArray([]))).toStrictEqual([]);
  expect(preorderTraversal(generateBinaryTreeFromArray([1]))).toStrictEqual([1]);
});
