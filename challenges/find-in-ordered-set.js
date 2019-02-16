/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */



function findInOrderedSet(arr, target) {
    const wrkArr = arr.slice();
    while (wrkArr.length >= 1) {
        const middle = Math.floor(wrkArr.length / 2);
        if (target === wrkArr[middle]) { return true; }
        else if (wrkArr.length === 1) { return false; }
        target > wrkArr[middle] ? wrkArr.splice(0, middle) : wrkArr.splice(middle, (wrkArr.length - middle));
    }
}

var nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 2));


module.exports = findInOrderedSet;
