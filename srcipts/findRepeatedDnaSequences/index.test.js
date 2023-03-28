import {findRepeatedDnaSequences} from './index.js'

test('重复的DNA序列', () => {
  expect(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT")).toStrictEqual(["AAAAACCCCC","CCCCCAAAAA"]);
  expect(findRepeatedDnaSequences("AAAAAAAAAAAAA")).toStrictEqual(["AAAAAAAAAA"]);
});
