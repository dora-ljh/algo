/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict) {
//   // 记录是否可以拼接成
//   let res = false;
//   // let track = [];
//  const backtrack = function (s,i){
//    // 如果已经拼接成，则直接返回
//    if(res)return;
//    // 如果 i 的大小，也就是 当前拼接成功的大小刚好和s的长度相等，那说明拼接好了
//    if(i === s.length){
//      res = true;
//      return;
//    }
//    // 循环每一个可重复word
//    for (const word of wordDict) {
//      const len = word.length;
//      // 如果 当前已经拼接好的长度，再加上word的长度，小于 s 的长度，那说明可以继续
//      if(i+len <=s.length){
//        // 截取一下 s 中 已拼接好的位置到当前word的位置
//        const w =s.slice(i, i+len);
//        // 判断当前需要拼接的值，跟word是否相等。相等则可以继续拼接
//        if(w===word){
//          // track.push(word);
//          // 多叉树遍历框架，直接递归， 得把拼接好的长度传入
//          backtrack(s,i+len);
//          // track.pop();
//        }
//      }
//    }
//  }
//   backtrack(s,0);
//  return res;
// };

export var wordBreak = function (s, wordDict) {
  // 转成 哈希集合方便快速判断
  let wordSet = new Set(wordDict);
  // 记录字符的每个位置到最后位置是否能拼接成功
  let memo = new Array(s.length).fill(-1);

  function dp(i) {
    // base case
    if (i === s.length) return true;

    // 如果在缓存中已经有记录从 i 这个位置到最后能不能拼接成功的话，直接从缓存中取
    if (memo[i] !== -1) return memo[i] === 0 ? false : true;

    // 这里就可以从没有拼接成功的地方开始循环拼接
    for (let j = i+1; j <= s.length; j++) {
      // 截取一下从拼接好的位置到 j 这个位置的字符，
      let prefix = s.slice(i, j);
      // 来判断这个截取的这个字符在words 中有没有，有的话，则判断下一层拼接
      // 如果这个之后从这个字符开始，后边的也能拼接成功，那说明这个字符到最后边是可以拼接成功的
      // console.log(wordSet.has(prefix));
      if (wordSet.has(prefix)) {
        const subProblem = dp(j);
        if(subProblem){
          // 如果从 i 这个位置到最后一直能拼接成功，那就记录一下这个 i 这个位置是可以拼接成功的
          memo[i] = 1;
          return true;
        }
      }
    }
    // 从i 这个位置一直截取到最后，在words 中都没有，那就说明从 i 这个位置，已经不可能有拼接成功的字符了
    memo[i] = 0;
    return false;
  }

  return dp(0);
};

// console.log(wordBreak('aaab',["a", "aa"]));
// console.log(wordBreak('leetcode', ["leet", "code"]));
// wordBreak('applepenapple',["apple", "pen"]);
// console.log(wordBreak('catsandog',["cats", "dog", "sand", "and", "cat"]));
