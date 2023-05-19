import {NumArray} from "./index.js";

describe('区域和检索 - 数组不可变', () => {
  test('多项', () => {
    const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(obj.sumRange(0, 2)).toBe(1);
    expect(obj.sumRange(2, 5)).toBe(-1);
    expect(obj.sumRange(0, 5)).toBe(-3);
  });

  test('单项', () => {
    const obj = new NumArray([1]);
    expect(obj.sumRange(0, 0)).toBe(1);
  });
});
