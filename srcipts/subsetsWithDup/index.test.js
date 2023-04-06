import {subsetsWithDup} from "./index.js";

test('子集 II',()=>{
  expect(subsetsWithDup([1,2,2])).toEqual(expect.arrayContaining([[],[1],[1,2],[1,2,2],[2],[2,2]]));
  expect(subsetsWithDup([0])).toEqual(expect.arrayContaining([[],[0]]));
});
