/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
export var findAnagrams = function (s, p) {
  let need = new Map();
  let window = new Map();
  let valid = 0;
  let res = [];
  let left = 0, right = 0;

  // 需要的值先放进去
  for (let c of p) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  while (right < s.length) {
    // 当前字符
    const c = s.charAt(right);
    right++;
    // 如果需要这个字符
    if (need.has(c)) {
      // 则先存进window
      window.set(c, (window.get(c) || 0) + 1);
      // 这个字符验证通过
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // 开始滑动窗口，这里判断是因为要满足全排列的话，要跟p的长度相等
    if (right - left === p.length) {
      // 如果验证通过，就放进res
      if (valid === need.size) res.push(left);
      // 取出left
      const delS = s.charAt(left);
      // 滑动left
      left++;
      if (need.has(delS)) {
        if (window.get(delS) === need.get(delS)) {
          valid--;
        }
        window.set(delS, (window.get(delS) || 0) - 1)
      }

    }

  }
  return res;
};

// console.log(findAnagrams('cbaebabacd', 'abc'));
