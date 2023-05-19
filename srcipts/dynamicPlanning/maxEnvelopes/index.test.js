import {maxEnvelopes} from "./index.js";


test('俄罗斯套娃信封问题',()=>{
  expect(maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]])).toBe(3);
  expect(maxEnvelopes([[1,1],[1,1],[1,1]])).toBe(1);
})
