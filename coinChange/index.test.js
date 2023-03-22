import {coinChange} from './index'

test('零钱兑换', () => {
  expect(coinChange([1,2,5],11)).toBe(3);
  expect(coinChange([2],3)).toBe(-1);
  expect(coinChange([1],0)).toBe(0);
  expect(coinChange([1,2,5],100)).toBe(20);
});
