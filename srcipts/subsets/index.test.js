import {subsets} from "./index.js";

test('子集',()=>{
  expect(subsets([1,2,3])).toEqual(expect.arrayContaining([[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]));
  expect(subsets([0])).toEqual(expect.arrayContaining([[],[0]]));
});
