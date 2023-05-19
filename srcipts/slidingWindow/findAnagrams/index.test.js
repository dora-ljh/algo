import {findAnagrams} from './index.js'

test('找到字符串中所有字母异位词', () => {
  expect(findAnagrams("cbaebabacd","abc")).toStrictEqual([0,6]);
  expect(findAnagrams("abab","ab")).toStrictEqual([0,1,2]);
});
