/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export var minDistance = function (word1, word2) {
  // 将word1，转为 word2
  const dp = function (i, j) {
    // console.log(word1.slice(0,i+1),word2.slice(0,j+1));
    // 如果 word1 先走完，要把word1转为word2的话，那就只能把word2剩余的字符全部插入
    // 所以word1没有了，返回word2的剩余字符数就是操作步数
    if (i === -1) return j + 1;
    // 如果 word2 先走完，要把word1转为word2的话，那word1的剩余部分就只能删除
    // 所以操作如果word2没有了，就返回word1 的剩余字符数就是操作步数
    if (j === -1) return i + 1;
    const wi = word1.charAt(i), wj = word2.charAt(j);
    // 相等的话，不需要任何操作，直接继续上个字符
    if (wi === wj) {
      return dp(i - 1, j - 1);
    } else {
      // const insertStr = dp(i, j - 1) + 1;
      // const deleteStr = dp(i - 1, j) + 1;
      // const replaceStr = dp(i - 1, j - 1) + 1;
      // return Math.min(insertStr,deleteStr,replaceStr);
      // 不相等的话，则对比三种方式，哪种更少用那个
      return Math.min(
        // 插入，插入的话，在word1的后边直接插入字符，所以 word1不需要变化，word2 - 1
        dp(i, j - 1) + 1,
        // 删除，删除的话，word1当前字符直接删除，需要 -1，word2不需要操作
        dp(i - 1, j) + 1,
        // 替换，替换的话，则需要两个都变化
        dp(i - 1, j - 1) + 1,
      )
    }
  }
  return dp(word1.length - 1, word2.length - 1);
};


// console.log(minDistance('horse', 'ros'));
