import {removeElement} from "./index.js";


describe('移除元素', () => {
  test('移除元素1', () => {
    const nums = [3,2,2,3];
    const val = 3;
    const expected = 2;
    const result = removeElement(nums, val);
    expect(result).toBe(expected);
    expect(nums.slice(0, result)).toEqual([2, 2]);
  });
  test('移除元素2', () => {
    const nums = [0,1,2,2,3,0,4,2];
    const val = 2;
    const expected = 5;
    const result = removeElement(nums, val);
    expect(result).toBe(expected);
    expect(nums.slice(0, result)).toEqual([0,1,3,0,4]);
  });
});
