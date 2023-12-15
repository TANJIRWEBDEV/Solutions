function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) return null;
  let firstNode: ListNode | null = list1;
  let secondNode: ListNode | null = list2;
  let linkedArr: number[] = [];
  while (firstNode !== null) {
    linkedArr.push(firstNode.val);
    firstNode = firstNode.next;
  }

  while (secondNode !== null) {
    linkedArr.push(secondNode.val);
    secondNode = secondNode.next;
  }
  linkedArr = linkedArr.sort((a, b) => a - b);

  let head: ListNode = new ListNode(linkedArr[0]);
  let current: ListNode = head;

  for (let i = 1; i < linkedArr.length; i++) {
    current.next = new ListNode(linkedArr[i]);
    current = current.next;
  }
  return head;
}
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
const node1 = new ListNode(1, null);

node1.next = new ListNode(2);
node1.next.next = new ListNode(4);
const node2 = new ListNode(1);
node2.next = new ListNode(3);
node2.next.next = new ListNode(4);

const res = mergeTwoLists(null, null);

// Merge Two Sorted Linked Lists
// example 1
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
