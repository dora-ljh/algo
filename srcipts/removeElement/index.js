/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export var removeElement = function (nums, val) {
  let slow = 0, fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  return slow;
};


// console.log(removeElement([3, 2, 2, 3], 3));
