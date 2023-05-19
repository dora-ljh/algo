import {Solution} from './index.js';

// 自定义 toBeOneOf 方法
expect.extend({
  toBeOneOf(received, expectedArray) {
    const pass = expectedArray.includes(received);
    if (pass) {
      return {
        message: () => `expected ${received} not to be one of ${expectedArray}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be one of ${expectedArray}`,
        pass: false,
      };
    }
  },
});

describe("黑名单中的随机数", () => {
  it("返回[0,5]中不在[1,2]中的随机数", () => {
    const s = new Solution(6, [1, 2]);
    const set = new Set();
    for (let i = 0; i < 10000; i++) {
      const n = s.pick();
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(6);
      // expect(n).not.toEqual(expect.arrayContaining([1, 2]));
      expect(n).not.toBeOneOf([1, 2]);
      set.add(n);
    }
    expect(set.size).toBe(4);
  });

  it("返回一个不在[0]中的[0,1]中的随机数", () => {
    const s = new Solution(2, [0]);
    const set = new Set();
    for (let i = 0; i < 10000; i++) {
      const n = s.pick();
      // 大于
      expect(n).toBeGreaterThanOrEqual(0);
      // 小于
      expect(n).toBeLessThan(2);
      expect(n).not.toBe(0);
      set.add(n);
    }
    expect(set.size).toBe(1);
  });

  it("返回一个不在[1,2,3,4,5]中的[0,9]中的随机数", () => {
    const s = new Solution(10, [1, 2, 3, 4, 5]);
    const set = new Set();
    for (let i = 0; i < 10000; i++) {
      const n = s.pick();
      expect(n).toBeGreaterThanOrEqual(0);
      expect(n).toBeLessThan(10);
      expect(n).not.toBeOneOf([1, 2, 3, 4, 5]);
      set.add(n);
    }
    expect(set.size).toBe(5);
  });
});
