import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";
import { mergeTwoLists } from './index.js'

describe('合并两个有序链表', () => {
  test('合并都有值的有序链表', () => {
    const list1 = arrayToCustomizedCircularLinkedList([1, 2, 4]);
    const list2 = arrayToCustomizedCircularLinkedList([1, 3, 4]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(mergedList.val).toBe(1);
    expect(mergedList.next.val).toBe(1);
    expect(mergedList.next.next.val).toBe(2);
    expect(mergedList.next.next.next.val).toBe(3);
    expect(mergedList.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.next).toBeNull();
  });

  test('合并一个空列表和一个非空列表', () => {
    const list1 = null;
    const list2 = arrayToCustomizedCircularLinkedList([0]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(mergedList.val).toBe(0);
    expect(mergedList.next).toBeNull();
  });

  test('合并两个空列表', () => {
    const list1 = null;
    const list2 = null;
    const mergedList = mergeTwoLists(list1, list2);
    expect(mergedList).toBeNull();
  });
});
