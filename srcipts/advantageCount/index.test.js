import {advantageCount} from "./index.js";



test('优势洗牌', () => {
  expect(advantageCount([2,7,11,15], [1,10,4,11])).toStrictEqual([2,11,7,15]);
  expect(advantageCount([12,24,8,32], [13,25,32,11])).toStrictEqual([24,32,8,12]);
});
