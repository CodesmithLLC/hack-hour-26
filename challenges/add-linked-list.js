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

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
  add(val) {
    this.next ? this.next.add(val) : this.next = new Node(val);
  }
}



const l1 = new Node(6);
l1.add(7);

const l2 = new Node(5);
l2.add(1);

//Brute Force
function addLinkedList(l1, l2) {
  let curL1 = l1;
  let curL2 = l2;
  let l1String = '';
  let l2String = '';

  while (curL1 || curL2) {
    l1String += curL1.value.toString();
    l2String += curL2.value.toString();
    curL1 = curL1.next;
    curL2 = curL2.next;
  }

  l3Total = Number(l1String) + Number(l2String);

  let l3 = null;

  l3Total.toString().split('').forEach(num => {
    if (!l3) {
      l3 = new Node(num);
    } else {
      l3.add(num);
    }
  });

  return l3;

}

console.log(addLinkedList(l1, l2));















































// function Node(val) {
//   this.value = val;
//   this.next = null;
// }

// function addLinkedList(l1, l2) { 
//   let oneCurNode = l1;
//   let twoCurNode = l2;
//   const oneArr = [];
//   const twoArr = [];
//   while(oneCurNode || twoCurNode) {
//     if(oneCurNode.next){
//       oneArr.push(oneCurNode.value);
//     }else if(twoCurNode.next){
//       twoArr.push(twoCurNode.value);
//     }
//     oneCurNode = oneCurNode.next;
//     twoCurNode = twoCurNode.next;
//   }

//   const oneNum = Number(oneArr.reverse().join(''));
//   const twoNum = Number(twoArr.reverse().join(''));
//   const newNum = oneNum + twoNum;

//   newNum.split('').reverse();



//   return newLL;
// }

// ll1 = new Node(2);
// ll1.next = new Node(1);
// ll1.next.next = new Node(5);
// ll2 = new Node(5);
// ll2.next = new Node(9);
// ll2.next.next = new Node(2);

// console.log(addLinkedList(ll1, ll2));

module.exports = { Node: Node, addLinkedList: addLinkedList };
