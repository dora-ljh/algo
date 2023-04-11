/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export var checkInclusion = function (s1, s2) {
  // 全排列会爆内存。。
  // const p = permuteUnique(s1);
  let need = new Map();
  let window = new Map();
  let valid = 0;
  for (let c of s1) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }

  // 然后就按照滑动窗口算法
  let left = 0, right = 0;
  while (right < s2.length) {
    // 先把字符放进window
    // 拿到当前的值
    const s = s2.charAt(right);
    right++;

    // 如果需要这个字符的话
    if (need.has(s)) {
      // 拿出来window 中记录的值
      const count = (window.get(s) || 0) + 1;
      // 更新window
      window.set(s, count);
      // 如果window值和need的值相等，则这一项验证通过
      if(count === need.get(s)){
        valid++
      }
    }

    // 全排列肯定要包含s1的所有字符，所以就滑动s1的length
    if(right - left === s1.length){
      // 如果valid 和 need.size ，就说明验证通过，包含了全排列
      if(valid === need.size)return true;
      // 如果没有通过，则需要排除left的字符，left往前滑动
      const delS = s2.charAt(left);
      // 如果need里包含这个字符，那就需要移除了
      if(need.has(delS)){
        // 移除前得先判断一下，这个字符是不是验证通过的，如果是，得先把验证改一下
        if(need.get(delS) === window.get(delS)){
          valid--;
        }
        // 移除
        window.set(delS,window.get(delS) - 1);
      }
      // 移除之后，left滑动
      left++;

    }
  }
  return false;
};


// console.log(checkInclusion('ab', 'eidbaooo'))
