import {fib} from './index.js'

test('斐波那契数', () => {
  expect(fib(2)).toBe(1);
  expect(fib(3)).toBe(2);
  expect(fib(4)).toBe(3);
  expect(fib(0)).toBe(0);
  expect(fib(20)).toBe(6765);
});
