import {splitArray} from "./index.js";



test('分割数组的最大值', () => {
  expect(splitArray([7,2,5,10,8], 2)).toBe(18);
  expect(splitArray([1,2,3,4,5], 2)).toBe(9);
});
