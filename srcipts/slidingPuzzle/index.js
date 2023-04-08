/**
 * @param {number[][]} board
 * @return {number}
 */
export var slidingPuzzle = function(board) {
  // 变成一维数组是因为后边剪枝去重方便
  const formatBoard = board.flat().join('');
  const target = '123450';
  // 可交换的索引
  const neighbor = [
    [1, 3],
    [0, 4, 2],
    [1, 5],
    [0, 4],
    [3, 1, 5],
    [4, 2]
  ];
  const q = [ formatBoard ];
  const visited = new Set(q);
  let step = 0;
  // BFS 算法框架
  while (q.length){
    const sz = q.length;
    for(let i = 0; i < sz; i ++) {
      const cur = q.shift();
      if(cur === target) return step;

      // 找到0的index
      const index0 = cur.indexOf('0');
      // 当前 0 的可交换 index
      const interchangeIndex0 = neighbor[index0];
      // 拿到 当前0 的可交换位置之后，开始给 0 交换位置
      for(let j = 0; j < interchangeIndex0.length; j++){
        // 可交换的位置
        const stringIndex = interchangeIndex0[j];
        const newStr = swapString(cur,index0,stringIndex);
        // 如果没有存在过，则存储一下，并且存到层级中
        // 防止走回头路
        if(!visited.has(newStr)){
          visited.add(newStr);
          q.push(newStr);
        }
      }
    }
    // 增加步数
    step++;
  }
  return -1;
};

function swapString(str, index1, index2) {
  // 将字符串转为数组
  let arr = str.split("");

  // 交换要交换的两个字符
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];

  // 将数组转为字符串
  let newStr = arr.join("");

  return newStr;
}




// console.log(slidingPuzzle([[1,2,3],[4,0,5]]));
