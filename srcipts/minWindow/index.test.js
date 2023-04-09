import {minWindow} from './index.js'

test('最小覆盖子串', () => {
  expect(minWindow("ADOBECODEBANC","ABC")).toBe("BANC");
  expect(minWindow("a","a")).toBe("a");
  expect(minWindow("a","aa")).toBe("");
});
