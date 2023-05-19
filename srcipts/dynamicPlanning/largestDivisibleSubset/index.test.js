import {largestDivisibleSubset} from "./index.js";

test('最大整除子集',()=>{
  expect(largestDivisibleSubset([5, 9, 18, 54, 108, 540, 90, 180, 360, 720])).toStrictEqual([9, 18, 90, 180, 360, 720]);
  const nums = [1, 2, 3];
  const subset = largestDivisibleSubset(nums);
  const expectedSubsets = [[1, 2], [1, 3]];
  // 在不在这里边
  expect(expectedSubsets).toContainEqual(subset);
  expect(largestDivisibleSubset([1,2,4,8])).toStrictEqual([1,2,4,8]);
});
