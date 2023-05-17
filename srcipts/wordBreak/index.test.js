import {wordBreak} from "./index.js";

test('单词拆分',()=>{
  expect(wordBreak('aaab',["a", "aa"])).toBe(false);
  expect(wordBreak('applepenapple',["apple", "pen"])).toBe(true);
  expect(wordBreak('leetcode', ["leet", "code"])).toBe(true);
  expect(wordBreak('catsandog',["cats", "dog", "sand", "and", "cat"])).toBe(false);
})
