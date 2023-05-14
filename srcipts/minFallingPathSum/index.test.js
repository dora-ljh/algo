import {minFallingPathSum} from "./index.js";

test('下降路径最小和',()=>{
  expect(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]])).toBe(13);
  expect(minFallingPathSum([[-19,57],[-40,-5]])).toBe(-59);
});
