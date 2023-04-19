/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export var splitArray = function (nums, k) {
  let left = 0, right = 0;

  for (let num of nums) {
    left = Math.max(left, num);
    right += num;
  }
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    const need = split(nums, mid);
    if (need <= k) {
      right = mid
    } else {
      left = mid + 1;
    }
  }
  return left;
};

/**
 * 当为x时，需要分割成几个
 * */
const split = function (nums, x) {
  let cap = x;
  let need = 1;
  for (let num of nums) {
    if (cap < num) {
      need++;
      cap = x;
    }
    cap -= num;
  }
  return need;
}


// console.log(splitArray([1,2,3,4,5], 2))
