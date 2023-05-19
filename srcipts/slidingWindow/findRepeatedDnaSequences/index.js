/**
 * @param {string} s
 * @return {string[]}
 */
export var findRepeatedDnaSequences = function(s) {
  const list = new Set();
  // 使用Set 防止结果重复出现
  const deep = new Set();
  for(let i=0;i+10<=s.length;i++){
    const str = s.substring(i,i+10);
    if(list.has(str)){
      deep.add(str);
    }else{
      list.add(str);
    }

  }
  return [...deep];
};


// console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'));
