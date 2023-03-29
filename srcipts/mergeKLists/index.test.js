import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";
import { mergeKLists } from './index.js'

describe('合并 K 个升序链表', () => {
  test('合并3个升序链表', () => {
    const list1 = arrayToCustomizedCircularLinkedList([1,4,5]);
    const list2 = arrayToCustomizedCircularLinkedList([1,3,4]);
    const list3 = arrayToCustomizedCircularLinkedList([2,6]);
    const mergedList = mergeKLists([list1, list2,list3]);
    expect(mergedList.val).toBe(1);
    expect(mergedList.next.val).toBe(1);
    expect(mergedList.next.next.val).toBe(2);
    expect(mergedList.next.next.next.val).toBe(3);
    expect(mergedList.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.val).toBe(4);
    expect(mergedList.next.next.next.next.next.next.val).toBe(5);
    expect(mergedList.next.next.next.next.next.next.next.val).toBe(6);
    expect(mergedList.next.next.next.next.next.next.next.next).toBeNull();
  });

  test('合并空链表', () => {
    const mergedList = mergeKLists([]);
    expect(mergedList).toBeNull();
  });

  test('合并一个个空列表', () => {
    const mergedList = mergeKLists([null]);
    expect(mergedList).toBeNull();
  });
});
