import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";
import {ListNode} from "../../utils/index.js";

const list1 = arrayToCustomizedCircularLinkedList([1,2,4]);
const list2 = arrayToCustomizedCircularLinkedList([1,3,4]);
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(-1);
  let current = dummy;
  while (list1&&list2){
    if(list1.val>list2.val){
      const temp = list2.next;
      // 这里可以断开list的链表
      // list2.next = null;
      current.next = list2;
      list2 = temp;
    }else {
      const temp = list1.next;
      // list1.next = null;
      current.next = list1;
      list1 = temp;
    }
    current = current.next;
  }
  if(list1)current.next = list1;
  if(list2)current.next = list2;
  return dummy.next;
};

// console.log(mergeTwoLists(list1,list2));
