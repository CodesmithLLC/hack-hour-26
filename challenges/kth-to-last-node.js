/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  this.head = head;

  let node = new Node(head);
  let current = node;
  let count = 0;

  if (k === 0) {
    return undefined;
  } else if (k === 1) {
    return head;
  } else {
    while (current) {
      count += 1;
      if (count === k) {
        return current;
      }
      current = current.next;
    }
  }

  return undefined;
}

kthToLastNode(k);

module.exports = { Node: Node, kthToLastNode: kthToLastNode };
