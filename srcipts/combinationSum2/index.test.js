import {combinationSum2} from "./index.js";

test('组合总和 II',()=>{
  expect(combinationSum2([10,1,2,7,6,1,5],8)).toEqual(expect.arrayContaining([[1,1,6],[1,2,5],[1,7],[2,6]]));
  expect(combinationSum2([2,5,2,1,2],5)).toEqual(expect.arrayContaining([[1,2,2],[5]]));
  // expect(combinationSum([8,7,4,3],11)).toEqual([[8,3],[7,4],[4,4,3]]);
  // 这个测试用例使用了expect.arrayContaining匹配器来测试result数组是否包含了预期的三个数组，而不需要考虑它们的顺序
  expect(combinationSum2([1],1)).toEqual(expect.arrayContaining([[1]]));
});
