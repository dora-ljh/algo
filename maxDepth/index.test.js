import {generateBinaryTreeFromArray} from '../utils';
import {maxDepth} from './index'

test('测试深度', () => {
  expect(maxDepth(generateBinaryTreeFromArray([1,null,2]))).toBe(2);
  expect(maxDepth(generateBinaryTreeFromArray([3,9,20,null,null,15,7]))).toBe(3);
});
