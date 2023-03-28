import {arrayToCustomizedCircularLinkedList} from '../../utils/index.js';
import {hasCycle} from "./index.js";

test('环形链表', () => {
  expect(hasCycle(arrayToCustomizedCircularLinkedList([3, 2, 0, -4], 1))).toBeTruthy();
  expect(hasCycle(arrayToCustomizedCircularLinkedList([1,2], 0))).toBeTruthy();
  expect(hasCycle(arrayToCustomizedCircularLinkedList([1]))).toBeFalsy();
});
