class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const nonFilter: number[] = [];
  let links: ListNode | null = head;
  while (links !== null) {
    if (!nonFilter.includes(links.val)) {
      nonFilter.push(links.val);
    }

    links = links.next;
  }

  const fst: ListNode = new ListNode(nonFilter[0]);
  let tstNode: ListNode = fst;

  for (let i = 1; i < nonFilter.length; i++) {
    tstNode.next = new ListNode(nonFilter[i]);
    tstNode = tstNode.next;
  }
  return fst;
}
const dup = deleteDuplicates();

// // Remove Duplicates from Sorted linked List
// // Example 1:
// Input: linked head = [1,1,2]
// Output: linked  [1,2]

// example 2
// Input: head = linked [1,1,2,3,3]
// Output: linked [1,2,3]
