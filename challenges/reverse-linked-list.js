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
    //while the next value is not null, loop over the list storing each value in an array. (An array of values)
    //once you get to the end, ie where next is null, begin looping over the values array in reverse and setting each's next to be the next object.
    let arr =[];
    let newObj={};
    let oldObj;

    while(head.next != null){
        arr.push(head.value)
        head = head.next
    }
    for(let i =0; i<arr.length; i++){
        newObj.value = arr[i];
        if((i-1)<0){
            newObj.next = null;
            oldObj = newObj;
        }else{
            newObj.next = oldObj;
            oldObj = newObj;
        }
        
    }
    return oldObj;   
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};

