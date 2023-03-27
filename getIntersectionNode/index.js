import {arrayToCustomizedCircularLinkedList} from '../utils/index.js';

/**
 * 生成相交链表
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3 相交数组
 * @return {[ListNode,ListNode,ListNode]}
 */
export function crossList(p1,p2,p3){
  const listA = arrayToCustomizedCircularLinkedList(p1);
  const listB = arrayToCustomizedCircularLinkedList(p2);
  let cross = null;
  if(p3){
    cross = arrayToCustomizedCircularLinkedList(p3);
    let list1 = listA,list2 = listB;
    while (list1.next){
      list1 = list1.next;
    }
    while (list2.next){
      list2 = list2.next;
    }
    list1.next = cross;
    list2.next = cross;
  }
  return [listA,listB, cross];
}

// const [list1,list2] = crossList([4,1],[5,6,1],[8,4,5]);



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export var getIntersectionNode = function (headA, headB) {
  debugger
  let listA = headA,listB = headB;
  while (listA !== listB){
    if(listA === null) listA = headB;
    else listA = listA.next;
    if(listB === null) listB = headA;
    else listB = listB.next;
  }
  return listA;
};

// console.log(getIntersectionNode(list1,list2));
