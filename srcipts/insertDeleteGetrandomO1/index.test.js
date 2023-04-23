import { RandomizedSet } from './index.js';

describe('O(1) 时间插入、删除和获取随机元素', () => {
  let set;

  // 会在每个测试用例执行前执行一次
  beforeEach(() => {
    set = new RandomizedSet();
  });

  it('插入元素并返回true', () => {
    expect(set.insert(1)).toBe(true);
    expect(set.insert(2)).toBe(true);
  });

  it('插入相同的元素并返回false', () => {
    expect(set.insert(1)).toBe(true);
    expect(set.insert(1)).toBe(false);
  });

  it('删除元素并返回true', () => {
    set.insert(1);
    set.insert(2);
    expect(set.remove(1)).toBe(true);
    expect(set.remove(2)).toBe(true);
  });

  it('删除不存在的元素并返回false', () => {
    expect(set.remove(1)).toBe(false);
  });

  it('从集合中得到随机元素', () => {
    set.insert(1);
    set.insert(2);
    set.insert(3);
    set.insert(4);
    set.insert(5);
    const randomElement = set.getRandom();
    expect([1, 2, 3, 4, 5]).toContain(randomElement);
  });
});
