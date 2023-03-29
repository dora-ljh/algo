import {arrayToCustomizedCircularLinkedList, ListNode} from "../../utils/index.js";

const list = arrayToCustomizedCircularLinkedList([1,4,3,2,5,2]);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
export var partition = function(head, x) {
  const dummy1 = new ListNode(-1);
  const dummy2 = new ListNode(-1);
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;
  while (p){
    if(p.val>=x){
      p1.next = p;
      p1 = p1.next;
    }else {
      p2.next = p;
      p2 = p2.next;
    }
    const temp = p.next;
    // 这里直接断开链表
    p.next = null;
    p = temp;
  }
  p2.next = dummy1.next;
  return dummy2.next;
};

// console.log(partition(list,3));
