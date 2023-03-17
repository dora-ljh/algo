import {searchRange} from "./index.js";



test('二分搜索查找元素的第一个和最后一个位置', () => {
  // expect(sum(1, 2)).toBe(3);
  expect(searchRange([5,7,7,8,8,10], 8)).toStrictEqual([3,4]);
  expect(searchRange([5,7,7,8,8,10], 6)).toStrictEqual([-1,-1]);
  expect(searchRange([], 0)).toStrictEqual([-1,-1]);
});
