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
      // * Delete node
      prevNode.next = currNode.next;
    } else {
      // * If it doesn't exist, add currNode val to array
      
    }
  }
  // * Return head
}

module.exports = deleteDups;
