import {numDistinct} from "./index.js";

test('不同的子序列', () => {
  expect(numDistinct('rabbbit', 'rabbit')).toBe(3);
  expect(numDistinct('babgbag', 'bag')).toBe(5);
})
