/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  if (!l1.head && !l2.head) return null;
  const newLL = new LinkedList();
  let currL;
  let currl1 = l1.head;
  let currl2 = l2.head;
  let counter = 1;
  while (currl1 !== null || currl2 !== null) {
    console.log(counter);
    if (counter % 2 === 0) {
      currL = currl2;
    } else {
      currL = currl1;
    }
    if (counter === 1) {
      newLL.head = currL;
      newLL.tail = currL;
    } else {
      newLL.tail = currL;
    }
    if (counter % 2 === 0) {
      currl2 = currl2.next;
    } else {
      currl1 = currl1.next;
    }
    counter++;
  }
  return newLL;

};

LinkedList.prototype.push = function (value) {
  const newNode = new Node(value);
  if (this.head === null) this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

const ll1 = new LinkedList();
ll1.push('jordan');
ll1.push('jay');
ll1.push('joe');

const ll2 = new LinkedList();
ll2.push('boom');
ll2.push('bip');
ll2.push('ayyy');

console.log(zip(ll1, ll2))

module.exports = { Node: Node, zip: zip };
