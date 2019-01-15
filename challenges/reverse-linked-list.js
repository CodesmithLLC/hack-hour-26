/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    const arr = []
    let node = head;

    while(node) {
        arr.push(node.value)
        node = node.next
    }

    const newHead = new Node(arr[arr.length - 1]);
    let nodeReversed = newHead;

    for (let i = arr.length - 2; i >= 0; i -=1) {
        const createNode = new Node(arr[i])
        nodeReversed.next = createNode
        nodeReversed = nodeReversed.next;

    }
    return newHead
}

const link1 = new Node(1)
const link2 = new Node(2)
const link3 = new Node(3)
const link4 = new Node(4)
const link5 = new Node(5)

link1.next = link2
link2.next = link3
link3.next = link4
link4.next = link5 

console.log(reverseLinkedList(link1))

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
