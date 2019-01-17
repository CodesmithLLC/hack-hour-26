/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let curNode = head;
    let prevNode = curNode;
    let counter = 0;
    while (curNode !== null) {
        console.log(prevNode);
        if (counter !== 0) prevNode = prevNode.next;
        if (head.next === null) {
            curNode === null;
        } else if (curNode.next.next === null) {
            curNode.next.next = head;
            curNode.next = null;
            counter += 1;
        } else {
            curNode = curNode.next;
            counter += 1;
        }
        console.log(counter);
    }
    console.log(curNode);
}

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

let ll = new LinkedList();

ll.push('one');
ll.push('two');
ll.push('three');
ll.push('four');

reverseLinkedList(ll.head);

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
