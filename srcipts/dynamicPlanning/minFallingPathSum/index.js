/**
 * @param {number[][]} matrix
 * @return {number}
 */
export var minFallingPathSum = function (matrix) {
  // 从第二行开始循环
  for (let i = 1; i < matrix.length; i++) {
    const n = matrix[i].length;
    // 然后计算col每个位置的最小路径 在加上自身，就是这个 j 这个位置当前的最小路径
    for (let j = 0; j < n; j++) {
      if (j === 0) {
        // j = 0 就只需要计算上和上右
        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i - 1][j + 1]);
      } else if (j === n - 1) {
        // j = 最后一个 就只需要计算上左和上
        matrix[i][j] += Math.min(matrix[i - 1][j - 1], matrix[i - 1][j]);
      } else {
        // 其他情况 j 就可以计算上左，上，上右
        matrix[i][j] += Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1]);
      }
    }
  }
  // 返回最后一行的最小值
  return matrix[matrix.length - 1].reduce((a, b) => Math.min(a, b));
};


// console.log(minFallingPathSum([[2, 1, 3], [6, 5, 4], [7, 8, 9]]));
