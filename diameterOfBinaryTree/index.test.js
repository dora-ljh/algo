import {generateBinaryTreeFromArray} from '../utils';
import {diameterOfBinaryTree} from './index'

test(' 二叉树的直径', () => {
  expect(diameterOfBinaryTree(generateBinaryTreeFromArray([1,2,3,4,5]))).toStrictEqual(3);
  expect(diameterOfBinaryTree(generateBinaryTreeFromArray([1,2]))).toStrictEqual(1);
});
