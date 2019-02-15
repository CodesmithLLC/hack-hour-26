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

function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(val) {
    this.value = val;
    this.next = null;
}

LinkedList.prototype.push = function (val) {
    const newNode = new Node(val)
    if (this.head === null) this.head = newNode;
    if (this.tail === null) {
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        this.tail = newNode
    }
}

const ll = new LinkedList();
ll.push(8);
ll.push(3);
ll.push(5);
ll.push(3);
ll.push(7);
ll.push(12);
ll.push(10);
ll.push(1);

function deleteDups(head) {
    let curNode = head;
    let buffer = new Set([curNode.value]);
    while (curNode.next !== null) {
        console.log(curNode.value);
        if (buffer.has(curNode.value)) {
            curNode.value = curNode.next.value;
        } else {
            buffer.add(curNode.next.value);
        }
        curNode = curNode.next;
    }
    console.log(buffer);
    return head;
}

deleteDups(ll.head);

console.log(JSON.stringify(ll, null, 4));

module.exports = deleteDups;
