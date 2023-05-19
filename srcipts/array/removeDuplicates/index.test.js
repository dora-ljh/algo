import {removeDuplicates} from './index.js';
describe('删除有序数组中的重复项', () => {
  it('一个元素', () => {
    expect(removeDuplicates([1])).toBe(1);
  });

  it('多个重复的元素', () => {
    const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
    const length = removeDuplicates(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([1, 2, 3, 4, 5]);
  });

  it('全部都是重复的元素', () => {
    const nums = [1, 1, 1, 1, 1];
    const length = removeDuplicates(nums);
    expect(length).toBe(1);
    expect(nums.slice(0, length)).toEqual([1]);
  });

  it('对于包含两个唯一元素的数组，返回长度为2的数组', () => {
    const nums = [1, 2];
    const length = removeDuplicates(nums);
    expect(length).toBe(2);
    expect(nums.slice(0, length)).toEqual([1, 2]);
  });
});
