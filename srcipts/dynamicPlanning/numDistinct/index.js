/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// var numDistinct = function(s, t) {
//   // 备忘录
//   const memo = new Array(s.length).fill().map(() => new Array(t.length).fill(-1));
//   const dp = function (s,i,t,j){
//     // 这个说明t 中的数值已经被前边匹配完了
//     if(j===t.length)return 1;
//     // 这个说明剩余 s的长度已经小于 t 剩余的长度了，肯定是匹配不了的
//     if(s.length - i < t.length - j)return 0;
//     // 查询缓存中当前 i j 这个这个位置是否有
//     if(memo[i][j]!==-1)return memo[i][j];
//     let res = 0;
//     for(let k = i;k < s.length;k++){
//       const sc = s.charAt(k);
//       const tc = t.charAt(j);
//       if(sc===tc){
//         res +=dp(s,k+1,t,j+1);
//       }
//     }
//     memo[i][j] = res;
//     return res;
//   }
//   return dp(s,0,t,0);
// };

export var numDistinct = function (s, t) {
  // 备忘录
  const memo = new Array(s.length).fill().map(() => new Array(t.length).fill(-1));
  const dp = function (s, i, t, j) {
    if (j === t.length) return 1;
    // 这个说明剩余 s的长度已经小于 t 剩余的长度了，肯定是匹配不了的
    if (s.length - i < t.length - j) return 0;
    // 查询缓存中当前 i j 这个这个位置是否有
    if (memo[i][j] !== -1) return memo[i][j];
    let res = 0;
    // 执行状态转移方程
    if (s.charAt(i) === t.charAt(j)) {
      // 匹配,两种情况，累加关系
      res += dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
    } else {
      // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
      res += dp(s, i + 1, t, j);
    }
    memo[i][j] = res;
    return res;
  }
  return dp(s,0,t,0);
};

// numDistinct('rabbbit', 'rabbit');
