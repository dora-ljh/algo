// let arr = [
//   {id:1,parentid:null},
//   {id:2,parentid:1},
//   {id:3,parentid:1},
//   {id:4,parentid:2},
//   {id:5,parentid:3}
// ]
//以对象形式生成一棵树
function getNewTree(arr){
  let Map = {};
  let root = null;
  arr.forEach(el => {
    Map[el.id] = {id:el.id,children:[]};
    if(!el.parentid){
      root = el.id;
    }
    if(el.parentid in Object.keys(Map)){
      Map[el.parentid].children.push(Map[el.id]);
    }
  });
  return Map[root];
}

module.exports = getNewTree
// console.log(getNewTree(arr));
