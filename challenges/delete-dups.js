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
  // * Create a storage array to add each value visited to
  const storageArr = [];
  // * Create currNode and prevNode var
  let currNode = head;
  let prevNode = head;
  // * Add first value in LL to storage array
  storageArr.push(currNode.value);
  currNode = currNode.next;
  // * Loop over LL
  while (currNode !== null) {
    // * Check if value exists in arr already, delete if it does
    if (storageArr.includes(currNode.value)) {
      // * Delete node and advance currNode two places
      prevNode.next = currNode.next;
      currNode = currNode.next;
    } else {
      // * If it doesn't exist, add currNode val to array
      storageArr.push(currNode.value);
      currNode = currNode.next;
      prevNode = prevNode.next;
    }
  }
  return head;
  // * Return head
}

const newLL = new Node(1);
newLL.next = new Node(2);
newLL.next.next = new Node(3);
newLL.next.next.next = new Node(3);

console.log(deleteDups(newLL));

module.exports = deleteDups;
