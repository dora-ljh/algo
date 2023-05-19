import {Solution} from './index.js';

describe('按权重随机选择', () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.5;
  global.Math = mockMath;
  test('单个', () => {
    const obj = new Solution([1]);
    expect(obj.pickIndex()).toBe(0);
  });

  test('多个', () => {
    const obj = new Solution([1,3]);
    expect(obj.pickIndex()).toBe(1);
  });
});
