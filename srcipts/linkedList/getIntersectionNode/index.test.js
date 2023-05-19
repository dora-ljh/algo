import {getIntersectionNode} from "./index.js";
import {crossList} from '../../../utils/index.js';

const [list1,list2,cross1] = crossList([4,1],[5,6,1],[8,4,5]);

const [list3,list4,cross2] = crossList([1,9,1],[3],[2,4]);

const [list5,list6,cross3] = crossList([2,6,4],[1,5]);


test('相交链表', () => {
  expect(getIntersectionNode(list1,list2)).toBe(cross1);
  expect(getIntersectionNode(list3,list4)).toBe(cross2);
  expect(getIntersectionNode(list5,list6)).toBe(cross3);
});
