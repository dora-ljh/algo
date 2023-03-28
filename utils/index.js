export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * 根据arr生成二叉树
 * */
export function generateBinaryTreeFromArray(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;

  while (i < arr.length) {
    const node = queue.shift();

    if (arr[i] !== null) {
      const left = new TreeNode(arr[i]);
      node.left = left;
      queue.push(left);
    }

    i++;

    if (i < arr.length && arr[i] !== null) {
      const right = new TreeNode(arr[i]);
      node.right = right;
      queue.push(right);
    }

    i++;
  }

  return root;
}




export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

ListNode.prototype.toString = function() {
  let result = '';
  let node = this;
  while (node !== null) {
    result += node.val + ' -> ';
    node = node.next;
  }
  result += 'null';
  return result;
};

/**
 * 根据数组生成单向或者环形链表。
 * @param {number[]} arr - 待转换的数组。
 * @param {number} endIdx - 链表结束索引，如果指定，则创建环形链表；否则创建单向链表。
 * @return {ListNode} 链表的头结点。
 */
export function arrayToCustomizedCircularLinkedList(arr, endIdx=undefined) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  // 创建链表节点并设置节点值
  const nodes = arr.map(val => new ListNode(val));

  // 构建单向链表
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1];
  }

  // 如果指定了结束索引，则将链表末尾连接到指定节点
  if (typeof endIdx === 'number' && endIdx >= 0 && endIdx < nodes.length) {
    nodes[nodes.length - 1].next = nodes[endIdx];
  }

  // 返回头节点
  return nodes[0];
}


/**
 * 生成相交链表
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3 相交数组
 * @return {[ListNode,ListNode,ListNode]}
 */
export function crossList(p1,p2,p3){
  const listA = arrayToCustomizedCircularLinkedList(p1);
  const listB = arrayToCustomizedCircularLinkedList(p2);
  let cross = null;
  if(p3){
    cross = arrayToCustomizedCircularLinkedList(p3);
    let list1 = listA,list2 = listB;
    while (list1.next){
      list1 = list1.next;
    }
    while (list2.next){
      list2 = list2.next;
    }
    list1.next = cross;
    list2.next = cross;
  }
  return [listA,listB, cross];
}
