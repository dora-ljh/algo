import {minCost} from "./index.js";

test('粉刷房子',()=>{
  expect(minCost([[17,2,17],[16,16,5],[14,3,19]])).toBe(10);
  expect(minCost([[7,6,2]])).toBe(2);
});
