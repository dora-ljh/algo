/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// var wordBreak = function(s, wordDict) {
//   const wordSet = new Set(wordDict);
//   const track = [];
//   const res = [];
//   const dp = function (start){
//     if(start===s.length){
//       // base case 记录结果
//       res.push(track.join(' '));
//       // return true;
//     }
//     for(let i=start+1;i<=s.length;i++){
//       const prefix = s.slice(start,i)
//       if(wordSet.has(prefix)){
//         // 做选择
//         track.push(prefix);
//         dp(i);
//         // 撤销选择
//         track.pop();
//       }
//     }
//     // return false;
//   };
//   dp(0);
//   return res;
// };


export var wordBreak = function(s, wordDict) {
  const wordSet = new Set(wordDict);
  // 这里记录的是当前索引位置可以拼接成怎样的句子 如3=>['sand dog']
  const memo = new Map();
  const dp = function (start){
    // 这里记录一下当前递归下每一个拼接好的句子
    const res = [];
    // base case 先给res push一个空，可以触发res 拼接
    // 如果遍历到最后也没push，那就返回的是空的res，就不会触发拼接
    if(start===s.length){
      res.push('');
      // return true;
    }
    // 如果知道这个 start 开始的位置后边能拼接成哪个句子，就直接返回
    if(memo[start]){
      return memo[start];
    }
    // 开始循环每一个字符
    for(let i=start+1;i<=s.length;i++){
      // 拿到当前从 start 到 i 的字符
      const prefix = s.slice(start,i);
      // 如果这个是个单词的话，则递归后序是不是个字符
      if(wordSet.has(prefix)){
        const subProblem = dp(i);
        // 如果有子问题则说明可以拼接，遍历拼接上，
        // 里边有一个说明从 i 开始的后序位置可以拼接 一个句子
        // 有n 个，那就说明有 n 个可以拼接的句子，
        // 把每个句子都是结果，所以遍历拼接，并且返回拼接好的 n 个
        for (const sub of subProblem) {
          // 主要是为了处理最后一个不要空格的问题
          if(!sub){
            res.push(prefix);
          }else{
            res.push(prefix + ' ' + sub);
          }
        }
      }
    }
    // 记录一下从当前start 开始 后序有几个句子，每个句子都存起来
    memo[start] = res;
    return res;
  };
  return dp(0);
};


// console.log(wordBreak('catsanddog',["cat","cats","and","sand","dog"]))

