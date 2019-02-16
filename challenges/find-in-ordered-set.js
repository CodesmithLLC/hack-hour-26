/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

//  const arr = [1, 4, 6, 7, 9, 17, 45];

function findInOrderedSet(arr, target) {
    let i = Math.floor(arr.length / 2)

    if (arr[i] === target) {
        return true;
    }

    while (arr.length !== 1) {
        if (arr[i] > target) {
            let newArr = arr.slice(0, i) 
            return findInOrderedSet(newArr, target);
        }
        
        if (arr[i] < target) {
            let newArr2 = arr.slice(i + 1, arr.length)
            console.log(newArr2)
            return findInOrderedSet(newArr2, target);
        }
    }
        return false
}



// console.log(findInOrderedSet(arr, 18))

module.exports = findInOrderedSet;
