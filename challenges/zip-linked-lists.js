/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 * function zip (listOne, listTwo) {
 if (!listOne) return listTwo;
 if (!listTwo) return listOne;
​
 const head = listOne;
 let temp = listOne;
 
 listOne = listOne.next;
 
 while (listTwo && listOne) {
  temp.next = listTwo;
  listTwo = listTwo.next;
  temp = temp.next;
  temp.next = listOne;
  listOne = listOne.next;
  temp = temp.next;
 }
 
 temp.next = listTwo ? listTwo : listOne;
 return head;
}
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// l1 and l2 are two linked lists that need to go together, alternating
function zip(l1, l2) {
  const zippedNode = new Node('Aaa')
  for (let i = 0; i < 2; i++ ){
    zippedNode.next = l1;
  }
  
  if(l2.next === null) return zippedNode;
  return zippedNode.value + zip(l1.next, l2.next);
  console.log(current);

};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const aa = new Node('AA');
const bb = new Node('BB');
const cc = new Node('CC');
const dd = new Node('DD');
const ee = new Node('EE');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
aa.next = bb;
bb.next = cc;
cc.next = dd;
dd.next = ee;

console.log(zip(a,aa));
module.exports = {Node: Node, zip: zip};
