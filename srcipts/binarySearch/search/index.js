/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      right--;
    } else if (nums[mid] < target) {
      left++;
    }
  }
  return -1;
};


// console.log(search([-1, 0, 3, 5, 9, 12], 9))
