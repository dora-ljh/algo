/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
export var openLock = function (deadends, target) {
  // const nums = Array.from({length: 10},(_,i)=>i);
  // 不能经过的值
  const deads = new Set(deadends);

  // BFS 同层级记录
  const q = ['0000'];
  // 已经走过的值
  const visited = new Set(q);
  // 走了几步
  let step = 0;
  while (q.length) {
    // 看下同层级里边有多少个size
    const sz = q.length;
    for (let i = 0; i < sz; i++) {
      // 挨个取出同层级值
      const cur = q.shift();

      // 包含死亡路径，直接跳过
      if (deads.has(cur)) continue;
      // 等于目标值，则可以返回步数
      if (cur === target) return step;

      // 拿到当前值的四个列分别拨动的八个值
      for (let j = 0; j < 4; j++) {
        // 往上拨动
        const up = plusOne(cur, j);
        // 如果这个值已经被拨动过了，则直接跳过，没被拨动过，则加入拨动列表
        if (!visited.has(up)) {
          q.push(up);
          visited.add(up);
        }
        // 往下拨动
        const down = minusOne(cur, j);
        // 如果这个值已经被拨动过了，则直接跳过，没被拨动过，则加入拨动列表
        if (!visited.has(down)) {
          q.push(down);
          visited.add(down);
        }
      }
    }
    // 在while 括号内，是因为一层while是多了一个层级
    // 增加步数
    step++;
  }
  // 最后还没找到，那只能说明目标密码找不到
  return -1;

};

// 参数为字符串，少了数组拷贝，多了字符分割，所以说差不多
const plusOne = function (s, j) {
  const ch = s.split('');
  if (ch[j] === '9') {
    ch[j] = '0';
  } else {
    ch[j] = Number(ch[j]) + 1;
  }
  return ch.join('');
}

const minusOne = function (s, j) {
  const ch = s.split('');
  if (ch[j] === '0') {
    ch[j] = '9';
  } else {
    ch[j] = Number(ch[j]) - 1;
  }
  return ch.join('');
}

// console.log(openLock(["0201", "0101", "0102", "1212", "2002"], '0202'));
