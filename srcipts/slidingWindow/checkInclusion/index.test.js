import {checkInclusion} from './index.js'

test('字符串的排列', () => {
  expect(checkInclusion('ab','eidbaooo')).toBeTruthy();
  expect(checkInclusion('ab','eidboaoo')).toBeFalsy();
  expect(checkInclusion('dinitrophenylhydrazine', 'acetylphenylhydrazine')).toBeFalsy();
});
