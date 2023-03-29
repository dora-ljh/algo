import {arrayToCustomizedCircularLinkedList,ListNode} from "../../utils/index.js";

const list1 =  arrayToCustomizedCircularLinkedList([1,4,5]);
const list2 =  arrayToCustomizedCircularLinkedList([1,3,4])
const list3 =  arrayToCustomizedCircularLinkedList([2,6]);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export var mergeKLists = function(lists) {
  debugger
  const dummy = new ListNode(-1);
  let head = dummy;
  lists = lists.filter(Boolean);
  while (lists.length){
    // 先排序数组，拿到最小的值
    lists = lists.sort((a,b)=>a.val-b.val);
    const minNode = lists.shift();
    const temp = minNode.next;
    // 这里可以先断开next的链接
    // minNode.next = null;
    // 接到结果链表中
    head.next = minNode;
    // p 指针不断前进
    head = head.next;
    if(temp)lists.push(temp);
  }
  return dummy.next;
};



// console.log(mergeKLists([list1,list2,list3]));
