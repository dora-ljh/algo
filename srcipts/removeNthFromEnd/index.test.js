import {arrayToCustomizedCircularLinkedList} from "../../utils/index.js";
import {removeNthFromEnd} from "./index.js";


describe("删除链表的倒数第 N 个结点", () => {
  test("删除倒数第二个节点", () => {
    const list = arrayToCustomizedCircularLinkedList([1,2,3,4,5]);
    const result = removeNthFromEnd(list, 2);
    expect(result.val).toBe(1);
    expect(result.next.val).toBe(2);
    expect(result.next.next.val).toBe(3);
    expect(result.next.next.next.val).toBe(5);
    expect(result.next.next.next.next).toBeNull();
  });

  test("测试只有一个节点", () => {
    const list = arrayToCustomizedCircularLinkedList([1]);
    const result = removeNthFromEnd(list, 1);
    expect(result).toBeNull();
  });

  test('测试只有两个个节点', () => {
    const list = arrayToCustomizedCircularLinkedList([1, 2]);
    const result = removeNthFromEnd(list, 1);
    expect(result.val).toBe(1);
    expect(result.next).toBeNull();
  });
});

