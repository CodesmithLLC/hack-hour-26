/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {


  let inner = (arr) => {

    // console.log(arr);
    if(arr.length <= 0){
      return false;
    }

    let middle = Math.floor(arr.length/2);

    // console.log('comparing:', arr[middle],target)
    if(arr[middle] === target) {
      return true;
    }

    if(arr[middle]> target) {
      return findInOrderedSet(arr.slice(0,middle),target);
    }

    else {
      if(arr.length===1){
        return findInOrderedSet([],target)
      } else{

        return findInOrderedSet(arr.slice(middle),target);
      }
    }
  }

  let ret = inner(arr);
  return ret;

}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums,1));  

module.exports = findInOrderedSet;
