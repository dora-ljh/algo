import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";

const list = arrayToCustomizedCircularLinkedList([1,2,3,4,5,6]);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var middleNode = function(head) {
  let slow = head;
  let fast = head;
  while (fast&&fast.next){
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// console.log(middleNode(list));
