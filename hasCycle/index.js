import {arrayToCustomizedCircularLinkedList} from '../utils';

const list = arrayToCustomizedCircularLinkedList([3, 2, 0, -4], 1);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export var hasCycle = function (head) {
  // 快慢指针初始化指向 head
  let slow = head;
  let fast = head;
  // 快指针走到末尾时停止
  while (fast && fast.next) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
    // 快慢指针相遇，说明含有环
    if (slow === fast) return true;
  }
  // 不包含环
  return false;
};

// console.log(list);

console.log(hasCycle(list));
