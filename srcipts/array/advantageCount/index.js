/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export var advantageCount = function (nums1, nums2) {
  // 先从小到大排序num1
  const n = nums1.sort((a, b) => a - b);
  // 然后从大到小排序num2，并记录原始index
  const pq = nums2.map((item,i)=>[i,item]).sort((a,b)=>b[1]-a[1]);
  // 记录结果
  const res = [];
  // num1排序后的左右指针
  let left = 0, right = n.length - 1;
  // 循环pq
  for(let num of pq){
    // console.log(pq.length);
    // 每次从pq中拿出最大的
    const [i,maxval] = num;
    // 如果最大的比n的最大的小，那么就让他俩对战，
    // 否则，就派出 n 中最小的下等马去对战
    if(maxval < n[right]){
      res[i] = n[right];
      right--;
    }else{
      res[i] = n[left];
      left++;
    }
  }
  return res;
};

// console.log(advantageCount([2,7,11,15],[1,10,4,11]))
