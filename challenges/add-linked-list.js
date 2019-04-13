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

let newValue;
let carry = 0;
function getCarryAndValue(val1, val2) {
  const add = val1 + val2 + carry;
  if (add < 10) {
    newValue = add;
    carry = 0;
  } else {
    newValue = add - 10;
    carry = 1;
  }
}

function addLinkedList(l1, l2) {
  // get the first value and carry then generate the start of our list
  getCarryAndValue(l1.value, l2.value);
  const newList = new Node(newValue);

  // tracking nodes for the lists
  let l1Current = l1.next;
  let l2Current = l2.next;
  let newListCurrent = newList;
  // while next is not null for either list, continue to add and carry both
  while (l1Current && l2Current) {
    // get the current value based on the two values and if there is a carry
    getCarryAndValue(l1Current.value, l2Current.value);
    console.log(newValue);
    // create the new node based on that
    newListCurrent.next = new Node(newValue);
    // go to the next node of the three lists
    newListCurrent = newListCurrent.next; 
    l1Current = l1Current.next;
    l2Current = l2Current.next;
  }

  // if l1Current
  while (l1Current) {
    // keep adding to the newList from l1
    if (carry > 0) {
      getCarryAndValue(l1Current.value, 0);
      newListCurrent.next = new Node(newValue);
    } else {
      newListCurrent.next = new Node(l1Current.value);
    }
    newListCurrent = newListCurrent.next;
  }

  // if l2Current
  while (l1Current) {
    // keep adding to the newList from l2
    if (carry > 0) {
      getCarryAndValue(l1Current.value, 0);
      newListCurrent.next = new Node(newValue);
    } else {
      newListCurrent.next = new Node(l1Current.value);
    }
    newListCurrent = newListCurrent.next;
  }


  // if carry if greater than 0
    // add one to the list
  return newList;
}

let list1 = new Node(2);
list1.next = new Node(1);
list1.next.next = new Node(5);

let list2 = new Node(5);
list2.next = new Node(9);
list2.next.next = new Node(2);

console.log(addLinkedList(list1, list2));

module.exports = {Node: Node, addLinkedList: addLinkedList};
