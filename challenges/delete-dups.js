/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  if (!head.next || !head) {
    return head;
  }
  let curr = head;
  let ahead = curr.next;
  const set = new Set();
  while (curr && ahead) {
    set.add(curr.value);
    if (set.has(ahead.value)) {
      curr.next = ahead.next;
      ahead = curr.next;
    }
    curr = curr.next;
    ahead = curr.next;
  }
  return head;
}

module.exports = deleteDups;

const head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);

console.log(deleteDups(head));
