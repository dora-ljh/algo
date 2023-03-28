import {crossList} from '../../utils/index.js';

const [list1,list2] = crossList([4,1],[5,6,1],[8,4,5]);



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
