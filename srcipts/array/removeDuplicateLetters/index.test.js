import {removeDuplicateLetters} from './index.js'

test('去除重复字母', () => {
  expect(removeDuplicateLetters('bcabc')).toBe('abc');
  expect(removeDuplicateLetters('cbacdcbc')).toBe('acdb');
  expect(removeDuplicateLetters('abacb')).toBe('abc');
});
