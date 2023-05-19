/**
 * @param {string} s
 * @return {number}
 */
export var lengthOfLongestSubstring = function (s) {
  // 记录一下目前没有重复的字符
  const window = new Set();
  let left = 0, right = 0;
  let res = 0;
  while (right < s.length) {
    // 获取字符
    const c = s.charAt(right);
    right++;
    // 一旦出现重复的字符，就一直删除到这个字符的位置，缩小窗口
    while (window.has(c)) {
      const delS = s.charAt(left);
      window.delete(delS);
      left++;
    }
    // 添加无重复字符进window
    window.add(c);
    // 对比一下当前最大长度
    res = Math.max(res, right - left)
  }
  return res;
};


// var lengthOfLongestSubstring = function(s) {
//   // 更加通用的滑动窗口
//   // 记录包含了哪些字符
//   const window = new Map();
//   let left = 0,right = 0;
//   // 结果值
//   let res = 0;
//   while (right < s.length){
//     const c = s.charAt(right);
//     right++;
//     const count = (window.get(c)||0) + 1;
//     // 先设置一下当前字符的记录次数
//     window.set(c, count);
//     // 如果记录次数大于1 ，则要直接删除到无重复
//     while(window.get(c) > 1){
//       const delS = s.charAt(left);
//       left++;
//       window.set(delS, window.get(delS) - 1);
//     }
//     // 记录下当前最大
//     res = Math.max(res, right - left);
//   }
//   return res;
// };

// console.log(lengthOfLongestSubstring('pwwkew'));


