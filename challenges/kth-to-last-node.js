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

function Node(val) {
  this.value = val;
  this.next = null;
}


function kthToLastNode(k, head) {
  //declare a variable lead, and set equal to head
  let lead = head;
  //declare a variable trail and set equal to head
  let trail = head;
  //declare a counter variable, length, and set equal to 0
  let length = 0;
  //use a while loop to traverse the link list until lead no longer exists, incrementing our counter variable by one for each node we pass
  while (lead) {
    //increment length by one
    length += 1;
    //set lead equal to lead.next
    lead = lead.next;
  }
  //use an if statement to test if k > length
  if (k > length) {
    //return undefined
    return undefined;
  }
  //use a for loop, beginning with i = 0, and continuing while i < k, and lead still exists; incrementing i by 1
  for (let i = 0; i < k && lead; i += 1) {
    //set lead = to lead.next
    lead = lead.next;
  }
  //use a while loop to test while lead and trail still exist ...
  while (lead && trail) {
    //set trail = trail.next
    trail = trail.next;
    //set lead = lead.next
    lead = lead.next;
  }
  //return trial.value
  return trail.value;
}



// function kthToLastNode(k, head) {
//   //create a counter element to track the last node
//   let counter = 1;
//   //create a result variable to return the value of the kth to the last node
//   let result = head;
//   //use a while statement, if next === undefined, stop
//   while (result !== undefined) {
//     //traverse the loop
//     result = result.this.next;
//     //counter++
//     counter++;
//   }
//   //decrement counter by (k - 1)
//   counter -= (k - 1);
//   //reset result
//   result = head;
//   //use a while statement (if counter >= 0), continue
//   while (counter > 0) {
//     //traverse the loop
//     result = this.next;
//     //decrement counter by 1
//     counter--
//   }
//   //return the value of result
// return result;
// }

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
