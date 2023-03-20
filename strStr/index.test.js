import {strStr} from './index'

test('找出字符串中第一个匹配项的下标', () => {
  expect(strStr('sadbutsad','sad')).toBe(0);
  expect(strStr('leetcode','leeto')).toBe(-1);
});
