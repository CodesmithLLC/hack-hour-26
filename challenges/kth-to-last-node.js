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
/*function kthToLastNode(k, head) {
  if (!head) return undefined;
  let lead = head;
  let trail = head;
  let length = 0;
  while (lead) {
    length += 1;
    lead = lead.next;
  }
  if (k > length) return undefined;
  lead = head;
  for (let i = 0; i < k && lead; i += 1) {
    lead = lead.next;
  }
  while (lead && trail) {
    trail = trail.next;
    lead = lead.next;
  }
  return trail.value;
}
*/

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {

  let array1 = [];
  while(this.next !== null) {
    array1.push(this.value);

  }
  console.log(array);
    

}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
kthToLastNode(2,a)
console.log(kthToLastNode(2,a));
// console.log()
// kthToLastNode(2,a);
// console.log(kthToLastNode(2, a));
// console.log(a);
// console.log(a.next);