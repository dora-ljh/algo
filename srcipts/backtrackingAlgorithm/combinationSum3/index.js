/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
export var combinationSum3 = function(k, n) {
  // 结果数组
  const res = [];
  // 当前跟踪值
  const track = [];
  // 当前跟踪值 target
  let trackSum = 0;
  const backtrack = function (startIndex){
    // 如果结果已经大于target，则停止
    if(trackSum > n)return;
    // 如果已经达到 k 的限制，则停止
    if(track.length === k){
      // 达到限制判断是否相等
      if(trackSum === n) res.push(track.slice());
      return;
    }
    // 每次从startIndex 开始
    for(let i = startIndex;i <=9; i++){
      // 因为下边是 i + 1，所以这里不需要在进行判断，不会有上个track比下一个小的情况出现
      // if(track.find(item=>item===i))continue;
      // 做选择
      track.push(i);
      trackSum += i;
      // 注意这里，如果写 startIndex + 1的话，就会变成，递归第一层级的循环都从1-9开始，第二层级的循环都是从2-9开始，依次类推，如果k = 3 的话，只会到3-9
      // 但是如果写成 i + 1 的话，就会变成，每一层的都从把上一层级的之前的i不进行循环，比如第一次循环是1-9，第二次循环是2-9，第五次循环是5-9每层循环都会少一个数，即使k = 3，也会到8-9
      backtrack(i + 1);
      // 撤销选择
      track.pop();
      trackSum -= i;
    }
  }
  backtrack(1);
  return res;
};

// console.log(combinationSum3(3,7));
