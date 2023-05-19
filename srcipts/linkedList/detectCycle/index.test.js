import {arrayToCustomizedCircularLinkedList} from '../../../utils/index.js';
import {detectCycle} from "./index.js";

const test1 = arrayToCustomizedCircularLinkedList([3, 2, 0, -4],1);
const test2 = arrayToCustomizedCircularLinkedList([1,2],0);
const test3 = arrayToCustomizedCircularLinkedList([1]);
test('环形链表 II', () => {
  expect(detectCycle(test1)).toBe(test1.next);
  expect(detectCycle(test2)).toBe(test2);
  expect(detectCycle(test3)).toBe(null);
});
