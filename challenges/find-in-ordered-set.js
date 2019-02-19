/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time
*/

findInOrderedSet(nums, 4); // -> true
findInOrderedSet(nums, 2); // -> false


function findInOrderedSet(arr, target) {
  //first check if target is greater than the last value in the array return false
  if (target > arr[arr.length - 1]) return false;

  //find the middle of the array, 
  let arrMiddle = Math.floor(arr.length / 2);

  const binarySearch = () => {
    if (arr[arrMiddle] === target) return true;
    if (arrMiddle === 0) return false;
    if (arrMiddle === arr.length - 1) return false; 
    
    if (arr[arrMiddle] < target) {
      arrMiddle = Math.floor(arrMiddle + arrMiddle / 2);
      return binarySearch();  
    }
    
    if (arr[arrMiddle] > target) {
      arrMiddle = Math.floor(arrMiddle - arrMiddle / 2);
      return binarySearch();
    }
  }

  return binarySearch();
}

const nums = [1, 4, 6, 7, 9, 17, 45];

console.log(findInOrderedSet(nums, 4));
//console.log(findInOrderedSet(nums, 2));



module.exports = findInOrderedSet;
