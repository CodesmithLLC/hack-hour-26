/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    //use the includes method to see if the array includes the target, if so, return true
    if (array.includes(target)) {
        return true;
    }
    //use the filter method to remove all elements greater than target and set equal to tempArray
    tempArray = array.filter(element => element <= target);
    //create a library object that holds all numbers that sum to target, set equal to an empty object
    let sumLibrary = {};
    //use a for loop, starting from 1 and ending less than target
    for (let i = 1; i < target; i++) {

    }
      

    function helper() {
        for (let i = 0; i < array.length; i++) {
            for (let j = 1; j < array.length; j++) {
                if (array[i] + array[j] === value) {
                    return true;
                }
                if (array[i] + array[j] > value) {
                    break;
                }
                else {
                    for (let k = 2; k < array.length; k++) {

                        
                    }
                }
            }
        }
    }


    //declare a tempTarget variable to test against target as we go
    //STOPPING CONDITION: if tempTarget === target
      //return true

    //use a loop to traverse the array
      //use a second for loop to traverse the array, starting at i + 1, 
        //if the sum of array[i] + array[j] === target
          //return true
        //if the sum is > target, break
        //if the sum is < target
          //use a third for loop to add the next element in the arry

        


}

module.exports = subsetSum;
