import {arrayToCustomizedCircularLinkedList} from '../utils';
import {hasCycle} from "./index";

test('环形链表', () => {
  expect(hasCycle(arrayToCustomizedCircularLinkedList([3, 2, 0, -4], 1))).toBeTruthy();
  expect(hasCycle(arrayToCustomizedCircularLinkedList([1,2], 0))).toBeTruthy();
  expect(hasCycle(arrayToCustomizedCircularLinkedList([1]))).toBeFalsy();
});
