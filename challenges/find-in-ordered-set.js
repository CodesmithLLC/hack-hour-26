/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {

    //// not 100% sure on how to find something faster than a loop going through the numbers
    //// could return false if the a number in the array is greater than our target number
    // recurse through the array, dividing the array in half until you either find the number or the array length becomes 1 without the targer
    

}


module.exports = findInOrderedSet;
