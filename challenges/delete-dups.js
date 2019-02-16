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

    if (head.next === null) {
        return head
    }

    let node = head.next

    while(node) {
        if (node.value === node.next.value) {
            node.next = node.next.next;
        }
        node = node.next;
    }
    return head
}


var Node = function(value) {
    this.value = value;
    this.next = null;
}


const head = new Node(1)
const n1 = new Node(1)
// n1.next = new Node(2)
// n1.next.next = new Node(2)
// n1.next.next = new Node(3)

const n2 = new Node(2)
const n3 = new Node (2)
const n4 = new Node (3)

n1.next = n2
n2.next = n3
n3.next = n4

console.log(n1)

console.log(deleteDups(n1))

module.exports = deleteDups;
