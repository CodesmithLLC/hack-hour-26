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
  let oneCurNode = l1;
  let twoCurNode = l2;
  const oneArr = [];
  const twoArr = [];
  while(oneCurNode || twoCurNode) {
    if(oneCurNode.next){
      oneArr.push(oneCurNode.value);
    }else if(twoCurNode.next){
      twoArr.push(twoCurNode.value);
    }
    oneCurNode = oneCurNode.next;
    twoCurNode = twoCurNode.next;
  }

  const oneNum = Number(oneArr.reverse().join(''));
  const twoNum = Number(twoArr.reverse().join(''));
  const newNum = oneNum + twoNum;

  newNum.split('').reverse();

  

  return newLL;
}

ll1 = new Node(2);
ll1.next = new Node(1);
ll1.next.next = new Node(5);
ll2 = new Node(5);
ll2.next = new Node(9);
ll2.next.next = new Node(2);

console.log(addLinkedList(ll1, ll2));

module.exports = { Node: Node, addLinkedList: addLinkedList };
