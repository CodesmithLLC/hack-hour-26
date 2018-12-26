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

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (!head || !k) return undefined;
  let scout = head;
  let kth = head;
  let length = 0;
  // find the length of the linked list with a length counter
  while (scout) {
    length += 1;
    scout = scout.next;
  }
  // if the number of k is greater than the length of the linked list, return undefined
  if (k > length) return undefined;
  // re-assign the scout to be the beginning of the list
  scout = head;
  // loop through linked list so long as i is less than k and i is less than the scout value
  for (let i = 0; i < k && scout; i += 1) {
    // scout stops at 'k'th element of linked list (from the head)
    scout = scout.next;
  }
  // now that scout is k elements ahead of 'kth' variable, have both variables
  // simultaneously loop through the linked list until scout reaches the end;
  // then kth will be kth elements behind scout and can return its value
  while (scout && kth) {
    scout = scout.next;
    kth = kth.next;
  }
  return kth;
}

// console.log(kthToLastNode(2, a)); //-> returns 'D' (the value on the second to last node)

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
