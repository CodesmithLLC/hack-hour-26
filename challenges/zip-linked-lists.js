/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 * 
 * I - (ll1, ll2)
 * O - single ll comprised of the inputs merged in zipper fashion 
 * C - the first node of zipped ll should be the first node of the first arg, if it exists
 * E - what happens if ll args are not same length?
 *
 * BONUS: Do this in place
 */
// console.log('Zip Linked List Ready!')
function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(ll1, ll2, zipped = ll1, pointer = ll1) {

  if (!pointer.next) return zipped;

  if (pointer.next === ll1) {
    zipped.next = ll2;
    pointer = ll2;
    ll1.next = pointer;
  } 
  // else {
  //   pointer.next = ll1;
  //   next = ll2;
  // }

  return zip(last, next, head, last)
}
    // does first node of second arg not equal null? -> yes
      // point first node at 
  // no
    // do something else

let newNode = new Node();
console.log(newNode);

// function zipSolution (listOne, listTwo) {
//   if (!listOne) return listTwo; // edge case
//   if (!listTwo) return listOne; // edge case

//   const head = listOne; // points head at listOne 
//   let temp = listOne; // points temp at listOne
  
//   listOne = listOne.next; // sets the value of list one to the node list one's .next is pointing to
       // this effectively advances us toward the end of the list by one node
  
//   while (listTwo && listOne) { // while listTwo does not eval to null and listone.next is pointing at another node

//     temp.next = listTwo; // temp's .next is pointed at listTwo
//     listTwo = listTwo.next; // listTwo is 'advanced' to point at its .next

//     temp = temp.next; // temp is 'advanced' to point at its .next
//     temp.next = listOne; // temp 

//     listOne = listOne.next;
//     temp = temp.next;
//   }
  
//   temp.next = listTwo ? listTwo : listOne;
//   return head;
// }


// module.exports = {Node: Node, zip: zip};
