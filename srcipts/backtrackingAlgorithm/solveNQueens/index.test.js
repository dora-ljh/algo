import {solveNQueens} from "./index.js";

test('N 皇后',()=>{
  expect(solveNQueens(4)).toStrictEqual([[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]);
  expect(solveNQueens(1)).toStrictEqual([["Q"]]);
});
