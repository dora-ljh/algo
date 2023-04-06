/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export var combine = function(n, k) {
  const res = [];
  const track = [];
  const backtrack = function (startIndex){
    if(track.length === k){
      res.push(track.slice());
      return;
    }
    for(let i = startIndex; i <= n; i++){
      track.push(i);
      backtrack(i + 1);
      track.pop();
    }
  }
  backtrack(1);
  return res;
};

console.log(combine(4,2));
