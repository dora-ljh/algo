/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
export var shipWithinDays = function(weights, days) {
  let left = 0,right=0;
  // 先拿到最少一船需要运多少，再找出一船最多需要运多少
  for(let w of weights){
    left = Math.max(left,w);
    right += w;
  }
  // 然后开始二分找运载量
  while (left < right){
    const mid = left + Math.floor((right - left) / 2);
    // 运载量为mid 的时候，需要几天
    const need = weightToDays(weights,mid);
    // 如果提前就能运完，说明运载量过大，运载量大，就缩小right
    if(need <= days){
      right = mid;
    }else {
      left = mid + 1;
    }
  }
  return left;

};


/**
 * 判断运载量为x时，几天可以运完
 * */
const weightToDays = function (weights, x){
  let cap = x;
  let days = 1;
  // 用来判断几天运完
  for(let w of weights){
    if(cap < w){
      days++;
      cap = x;
    }
    cap-=w;
  }
  return days;
}

// console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5))
