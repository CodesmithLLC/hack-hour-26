/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
    if (!Array.isArray(arr)) return false;
    function recHelper(recArr) {
        const middle = Math.floor(recArr.length / 2);
        if (target === recArr[middle]) { return true; }
        else if (recArr.length === 1) { return false; }
        return target > recArr[middle] ?
            recHelper(recArr.splice(0, middle)) :
            recHelper(recArr.splice(middle, (recArr.length - middle)));
    }
    return recHelper(arr);
}

// function findInOrderedSet(arr, target) {
//     while (arr.length >= 1) {
//         const middle = Math.floor(arr.length / 2);
//         if (target === arr[middle]) { return true; }
//         else if (arr.length === 1) { return false; }
//         target > arr[middle] ? arr.splice(0, middle) : arr.splice(middle, (arr.length - middle));
//     }
// }

// var nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 7));
// console.log(nums);


module.exports = findInOrderedSet;
