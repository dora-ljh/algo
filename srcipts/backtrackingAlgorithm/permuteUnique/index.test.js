import {permuteUnique} from "./index.js";

test('全排列 II',()=>{
  expect(permuteUnique([1,1,2])).toEqual(expect.arrayContaining([[1,1,2],[1,2,1],[2,1,1]]));
  expect(permuteUnique([1,2,3])).toEqual(expect.arrayContaining([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]));
  expect(permuteUnique([1])).toEqual(expect.arrayContaining([[1]]));
});
