import {twoSum} from "./index.js";

it('两数之和 II - 输入有序数组',()=>{
  expect(twoSum([2,7,11,15],9)).toStrictEqual([1,2]);
  expect(twoSum([2,3,4],6)).toStrictEqual([1,3]);
  expect(twoSum([-1,0],-1)).toStrictEqual([1,2]);
})
