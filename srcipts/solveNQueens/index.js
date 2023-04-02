/**
 * @param {number} n
 * @return {string[][]}
 */
export var solveNQueens = function(n) {
  // '.' 表示空，'Q' 表示皇后，初始化空棋盘。
  const nth = Array.from({ length: n }, () => Array(n).fill('.'));
  const res = [];
  // 路径：board 中小于 row 的那些行都已经成功放置了皇后
  // 选择列表：第 row 行的所有列都是放置皇后的选择
  // 结束条件：row 超过 board 的最后一行
  const backtrack = function (board,row){
    // 触发结束条件
    if(row === board.length){
      res.push([...board.map(item=>item.join(''))]);
      return;
    }
    const n = board[row].length;
    for(let col = 0; col < n; col++){
      // 排除不合法选择
      if(!isValid(board,row,col))continue;
      // 做选择
      board[row][col] = 'Q';
      // 进入下一行决策
      backtrack(board, row + 1);
      // 撤销选择
      board[row][col] = '.';
    }
  }
  backtrack(nth,0);
  return res;
};


// 是否可以在 board[row][col] 放置皇后
const isValid = function (board,row,col){
  const n = board.length;
  // 检查列是否有皇后互相冲突
  for(let i = 0; i < n; i++){
    if(board[i][col] === 'Q')return false;
  }
  // 检查左上方是否有皇后互相冲突
  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--,j--){
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  // 检查右上方是否有皇后互相冲突
  for(let i = row - 1,j = col + 1;i >=0 && j < n; i--, j++){
    if (board[i][j] === 'Q') {
      return false;
    }
  }
  return true;
}

// console.log(solveNQueens(4));



