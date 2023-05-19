import {combine} from "./index.js";

test('组合',()=>{
  expect(combine(4,2)).toEqual(expect.arrayContaining([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]));
  expect(combine(1,1)).toEqual(expect.arrayContaining([[1]]));
});
