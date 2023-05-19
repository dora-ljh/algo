/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export var minWindow = function (s, t) {
  let left = 0, right = 0;
  // 这个定义是需要几个
  let need = new Map();
  // 这个定义是当前窗口包含了几个需要的值
  let window = new Map();
  // 定义一个验证通过的开始位置
  let start = 0;
  // 先定义一个最大，等找到之后，更新
  let len = Infinity;
  // 这个用来验证是否包含了所有字符
  let valid = 0;


  // 先把需要包含的字符都放进去
  for (let i = 0; i < t.length; i++) {
    const char = t.charAt(i);
    need.set(char, need.has(char) ? need.get(char) + 1 : 1)
  }

  while (right < s.length) {
    // 拿出来当前字符
    const c = s.charAt(right);
    // 增大范围
    right++;
    // 判断需不需要这个字符
    if (need.has(c)) {
      // 如果需要这个字符，则把字符放进去
      window.set(c, window.has(c) ? window.get(c) + 1 : 1);
      // 放进去之后，判断这个字符是否验证通过
      if (window.get(c) === need.get(c)) {
        // 如果通过则验证值++
        valid++;
      }

      while (valid === need.size) {
        // 验证通过并且比之前的更短就更新一下最小长度
        if (right - left < len) {
          len = right - left;
          // 记录一下验证通过的开始位置
          start = left;
        }

        // 准备把left移除
        const d = s.charAt(left);
        // 如果是需要的才需要移除
        if (need.has(d)) {
          // 这里必须判断一下这个值是否相等，因为只need包含的话，在window中可能出现多次need中的值，
          // 这里需要直接移除到不满足才可以
          // 比如 BECODEBA 中，window 中B 是 2次，移除第一次的B其实照样满足ABC，故需要一直移除把C移除掉才可以说明验证不通过
          if(window.get(d) === need.get(d)){
            // 并且把valid 减去1
            valid--;
          }
          // 在滑动窗口中移除一个count
          window.set(d, window.get(d) - 1);
        }
        left++;
      }
    }

  }
  // 如果到之后都没有一个满足的，那就返回空字符
  return len === Infinity ? '' : s.slice(start, start + len);
};

// console.log(minWindow('ADOBECODEBANC', 'ABC'));
