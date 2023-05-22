import {minDistance} from "./index.js";

test('编辑距离', () => {
  expect(minDistance('horse', 'ros')).toBe(3);
  expect(minDistance('intention', 'execution')).toBe(5);
})
