/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  // Handle edge case
  if (!l1 || !l2) {
    return l1 || l2;
  }

  let res = new Node((l1.val + l2.val) % 10);
  const resHead = res;
  let carry = Math.floor((l1.val + l2.val) / 10);
  let n1 = l1.next;
  let n2 = l2.next;

  while (n1 || n2) {
    if (!n1 && n2) {
      const sum = n2.val + carry;
      res.next = new Node(sum % 10);
      carry = Math.floor(sum / 10);
      res = res.next;
      n2 = n2.next;
    }
    if (!n2 && n1) {
      const sum = n1.val + carry;
      res.next = new Node(sum % 10);
      carry = Math.floor(sum / 10);
      res = res.next;
      n1 = n1.next;
    }
    if (n1 && n2) {
      const sum = n1.val + n2.val + carry;
      res.next = new Node(sum % 10);
      carry = Math.floor(sum / 10);
      res = res.next;
      n2 = n2.next;
      n1 = n1.next;
    }
  }
  if (carry) res.next = new Node(carry);
  return resHead;
}

module.exports = { Node, addLinkedList };
