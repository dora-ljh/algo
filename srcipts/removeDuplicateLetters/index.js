/**
 * @param {string} s
 * @return {string}
 */
export var removeDuplicateLetters = function (s) {
  // 记录栈中数据
  const stk = [];

  let count = new Array(256).fill(0);
  // 记录字符是否在栈中
  const inStack = new Array(256).fill(false);
  // 先记录一下每个chat的个数
  for (let i = 0; i < s.length; i++) {
    // 获取 s 中 当前 i 的ASCII 编码
    // 记录每个 ASCII 编码 的个数
    count[s.charCodeAt(i)]++;
  }
  // 循环chat排重
  for (let i = 0; i < s.length; i++) {
    // 获取 s 中 当前 i 的字符
    let c = s.charAt(i);
    // 获取 s 中 当前 i 的ASCII 编码
    let asc = s.charCodeAt(i);
    // 每遍历一遍，都将对应的计数减1
    count[asc]--;

    // 如果栈中已经存在，则直接进入下一个字符
    if(inStack[asc]) continue;



    // 如果栈中有字符，并在之后一个字符的字典值大于 当前 字符
    while (stk.length > 0 && stk[stk.length - 1] > c){
      const lastChar = stk[stk.length - 1];
      // 最后一个字符的ascii 编码
      const lastCharAsc = lastChar.charCodeAt(0);
      // 如果栈中已经没有这个字符了，则不能弹出
      if(count[lastCharAsc] === 0){
        break;
      }
      // 若还有字符，则可以弹出
      stk.pop();
      // 弹出之后，则把最后一个在是否使用中去掉
      inStack[lastCharAsc] = false;
    }

    // 不存在，就放进栈中
    stk.push(c);
    // 并且记录一下改一下 inStack 中该  ASCII 编码 下标 的值为true
    inStack[asc] = true;


  }
  return stk.join('');
};

// console.log(removeDuplicateLetters('bcabc'))
// console.log(removeDuplicateLetters('abacb'))
