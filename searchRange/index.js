/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export var searchRange = function(nums, target) {
  return [searchRangeLeft(nums,target),searchRangeRight(nums,target)]
};


const searchRangeLeft = function (nums,target){
  let left = 0;
  let right = nums.length - 1;
  // 这里注意
  while (left<=right){
    const mid = left + Math.floor((right - left) / 2);
    if(nums[mid]<target){
      left = mid + 1;
    }else if(nums[mid]>target){
      right = mid - 1;
    }else if (nums[mid]===target){
      // 搜索左侧区间需要收缩右侧
      right = mid - 1
    }
  }
  // 在target大于nums里所有数的时候，left+1会索引越界，故判断如果越界则返回-1
  if(left>nums.length) return -1;
  // 比如nums为[5,7,7,8,8,10]，target是6，在nums中没有6的时候，需要判断没有target，则返回-1
  return nums[left] === target ? left : -1;
}

const searchRangeRight = function (nums,target){
  let left = 0;
  let right = nums.length - 1;
  while (left<=right){
    const mid = left + Math.floor((right - left) / 2);
    if(nums[mid]<target){
      left = mid + 1;
    }else if(nums[mid]>target){
      right = mid - 1;
    }else if (nums[mid]===target){
      // 搜索右侧区间，需要收缩左侧区间
      left = mid + 1
    }
  }
  // 在target小于nums里所有数的时候，right-1会索引越界，故判断如果越界则返回-1
  if(right<0) return -1;
  // 比如nums为[5,7,7,8,8,10]，target是0，在nums中没有0的时候，需要判断没有target，则返回-1
  return nums[right] === target ? right : -1;
}




console.log(searchRange([5,7,7,8,8,10],8))
