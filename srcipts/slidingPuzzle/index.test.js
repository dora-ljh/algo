import {slidingPuzzle} from './index.js'

test('滑动谜题', () => {
  expect(slidingPuzzle([[1,2,3],[4,0,5]])).toBe(1);
  expect(slidingPuzzle([[1,2,3],[5,4,0]])).toBe(-1);
  expect(slidingPuzzle([[4,1,2],[5,0,3]])).toBe(5);
});
