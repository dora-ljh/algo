import {arrayToCustomizedCircularLinkedList} from '../../../utils/index.js';

const list = arrayToCustomizedCircularLinkedList([3,2,0,-4],1);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export var detectCycle = function (head) {
  debugger
  let slow = head,fast = head;
  while (fast&&fast.next){
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) break;
  }
  // 上面的代码类似 hasCycle 函数
  // fast 遇到空指针说明没有环
  if(!fast || !fast.next)return null;
  // 重新指向头结点
  slow = head;
  // 快慢指针同步前进，相交点就是环起点
  while (fast!==slow){
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};

//
// console.log(list);
//
// console.log(detectCycle(list));
