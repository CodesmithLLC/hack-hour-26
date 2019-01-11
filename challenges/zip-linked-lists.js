/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {

  if(l1){
    if(!l2){
      return l1;
    }

    let currL1 = l1;
    let currL2 = l2;
    let currL1Next;
    let currL2Next;

    //loop through L1
    while(currL1){

      //if L1 has a next, assign it
      if(currL1.next){
        currL1Next = currL1.next;
      }

      //if L1 doesn't have a next we reached the end. append everything else in L2 if its there
      else{
        if(currL2){
          currL1.next = currL2;
        }
        return l1;      
      }

      //if L2 has a next assign it
      if(currL2.next){
        currL2Next = currL2.next;
      }

      //we've reached the end of L2
      else{
        currL1.next = currL2;
        currL2.next = currL1Next;
        return l1;
      }

     
      currL1.next = currL2;
      currL2.next = currL1Next;

      currL1 = currL1Next;
      currL2 = currL2Next;


    }

    return l1;

  }

  return l2;

};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
a.next = b;
b.next =c ;


const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
// e.next = f;
// f.next = g;


let zipped = zip(a,e);

let currzip = zipped;
while(currzip){
  console.log(currzip.value);
  currzip = currzip.next;
}


module.exports = {Node: Node, zip: zip};



//loop through l1
//if l2 has a node, insert it
//if l2 is empty return l1
//if l1 is empty ins