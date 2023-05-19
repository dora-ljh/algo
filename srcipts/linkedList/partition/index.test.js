import {arrayToCustomizedCircularLinkedList} from "../../../utils/index.js";
import { partition } from './index.js'

describe('分隔链表', () => {
  test('分割两个链表', () => {
    const list = arrayToCustomizedCircularLinkedList([1,4,3,2,5,2]);
    const result = partition(list,3);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(2);
    expect(result.next.next.next.val).toBe(4);
    expect(result.next.next.next.next.val).toBe(3);
    expect(result.next.next.next.next.next.val).toBe(5);
    expect(result.next.next.next.next.next.next).toBeNull();
  });

  test('两个数的分割', () => {
    const list = arrayToCustomizedCircularLinkedList([1,2]);
    const result = partition(list,2);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next).toBeNull();
  });
});
