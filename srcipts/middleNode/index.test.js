import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";
import {middleNode} from './index.js'


describe('链表的中间结点',()=>{
  test('奇数', () => {
    const list = arrayToCustomizedCircularLinkedList([1,2,3,4,5]);
    expect(middleNode(list)).toBe(list.next.next);
  });

  test('偶数', () => {
    const list = arrayToCustomizedCircularLinkedList([1,2,3,4,5,6]);
    expect(middleNode(list)).toBe(list.next.next.next);
  });
});

