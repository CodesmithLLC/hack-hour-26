/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
    //loop over the array and subtract each value from the target number.
    let newObj = {}; 
    for(let i=0; i<arr.length; i++){
        //store each value as a key in an object and the difference as the value.
        newObj[arr[i]] = (n - arr[i])
    }
    //loop over the object, check to see that the difference exists in the object
    for(prop in newObj){
        if((newObj[prop] != prop) && (arr.includes(newObj[prop]))){
            return true;
        }else{
            return false;
        }
    }
}

// let testArr = [1,3,7]

// console.log(twoSum(testArr, 2))

module.exports = twoSum;
