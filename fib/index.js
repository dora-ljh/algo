/**
 * @param {number} n
 * @return {number}
 */

/**
 解法1： 使用最简单的递归
 * */
// export var fib = function(n) {
//   if(n === 0 || n === 1) return n;
//   return fib(n-1)+fib(n-2);
// };


/**
 解法2： 使用备忘录
* */

// class 备忘录

// export var fib = function(n) {
//   const fib1 = new Fib();
//   return fib1.start(n);
// };
//
//
// class Fib{
//   cache = null;
//   start(n){
//     // base case
//     if(n === 0 || n === 1)return n;
//     // 初始化缓存值
//     if(!this.cache)this.cache = new Array(n + 1).fill(0);
//
//     if(this.cache[n] !== 0)return this.cache[n];
//     this.cache[n] = this.start(n - 1) + this.start(n - 2);
//     return this.cache[n];
//   }
// }


// 函数备忘录

// export var fib = function(n) {
//   // 备忘录全初始化为 0
//   let memo = new Array(n + 1).fill(0);
//   // 进行带备忘录的递归
//   return dp(memo, n);
// };
//
// // 带着备忘录进行递归
// var dp = function(memo, n) {
//   // base case
//   if (n === 0 || n === 1) return n;
//   // 已经计算过，不用再计算了
//   if (memo[n] !== 0) return memo[n];
//   memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
//   return memo[n];
// };

/**
 * 自下而上的计算方式，最优解
 * */
export var fib = function(n) {
  if(n === 0 || n=== 1)return n;
  let memo = new Array(n + 1).fill(0);
  memo[0] = 0;
  memo[1] = 1;
  for(let i=2;i<=n;i++){
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};




// console.log(fib(2));
