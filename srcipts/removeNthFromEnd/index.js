import {arrayToCustomizedCircularLinkedList, ListNode } from "../../utils/index.js";
const list = arrayToCustomizedCircularLinkedList([1,2,3,4,5]);


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
export var removeNthFromEnd = function(head, n) {
  // 虚拟头节点
  const dummy = new ListNode(-1);
  dummy.next = head;
  // 删除倒数第 n 个，要先找倒数第 n + 1 个节点
  const nth = findNthFromEnd(dummy,n + 1);
  // 删掉倒数第 n 个节点
  nth.next = nth.next.next;
  return dummy.next;
};

/**
 * 返回链表的倒数第 k 个节点
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const findNthFromEnd = function (head, k){

  let slow = head,fast = head;
  // fast 先走 k 步
  for(let i = 0;i < k; i++){
    fast = fast.next;
  }
  // fast 和 slow 同时走 n - k 步
  while (fast){
    fast = fast.next;
    slow = slow.next;
  }
  // slow 现在指向第 n - k 个节点
  return slow;
}

// console.log(removeNthFromEnd(list,4));
