import {wordBreak} from "./index.js";

test('单词拆分 II',()=>{
  expect(wordBreak('catsanddog',["cat","cats","and","sand","dog"]))
    .toStrictEqual(expect.arrayContaining(["cats and dog","cat sand dog"]));
  expect(wordBreak('pineapplepenapple',["apple","pen","applepen","pine","pineapple"]))
    .toStrictEqual(expect.arrayContaining(["pine apple pen apple","pineapple pen apple","pine applepen apple"]));
  expect(wordBreak('catsandog',["cats","dog","sand","and","cat"]))
    .toStrictEqual([]);
});
