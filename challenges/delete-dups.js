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
  if (!head) return undefined;

  const current = head;
  let prev;
  let pointer;


  while (current.next !== null) {
    const { value } = current;

    // set prev and pointer to current and current.next
    prev = current;
    pointer = current.next;

    while (pointer !== null) {
      // compare pointer value to current value
      while (value === pointer.value) {
        // if they're the same, remove pointer from list
        pointer = pointer.next;
        // update prev.next to pointer's position
        prev.next = pointer;
      }


      if (pointer !== null) {
        prev = prev.next;
        pointer = pointer.next;
      }
    }
  }
  return head;
}

module.exports = deleteDups;
