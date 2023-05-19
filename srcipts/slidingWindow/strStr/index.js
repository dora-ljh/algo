/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export var strStr = function(haystack, needle) {
  if(haystack.length<needle.length)return -1;
  // 重点在于 i + needle.length 用来滑动
  for(let i = 0;i + needle.length <= haystack.length; i++){
    const str = haystack.substring(i,i+needle.length);
    if(str===needle)return i;
  }
  return -1;
};

// console.log(strStr('sadbutsad','sad'));
