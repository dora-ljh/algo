import {combinationSum} from "./index.js";

test('组合总和',()=>{
  expect(combinationSum([2,3,6,7],7)).toEqual(expect.arrayContaining([[2,2,3],[7]]));
  expect(combinationSum([2,3,5],8)).toEqual(expect.arrayContaining([[2,2,2,2],[2,3,3],[3,5]]));
  // expect(combinationSum([8,7,4,3],11)).toEqual([[8,3],[7,4],[4,4,3]]);
  // 这个测试用例使用了expect.arrayContaining匹配器来测试result数组是否包含了预期的三个数组，而不需要考虑它们的顺序
  expect(combinationSum([8,7,4,3],11)).toEqual(expect.arrayContaining([[3, 4, 4], [3, 8], [4, 7]]));
  expect(combinationSum([2],1)).toEqual([]);
});
