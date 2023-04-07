import {generateBinaryTreeFromArray} from '../../utils/index.js';
import {minDepth} from './index.js'

test('二叉树的最小深度', () => {
  expect(minDepth(generateBinaryTreeFromArray([3,9,20,null,null,15,7]))).toBe(2);
  expect(minDepth(generateBinaryTreeFromArray([2,null,3,null,4,null,5,null,6]))).toBe(5);
  expect(minDepth(generateBinaryTreeFromArray([1,2,3,4,5]))).toBe(2);
  expect(minDepth(generateBinaryTreeFromArray([]))).toBe(0);
});
