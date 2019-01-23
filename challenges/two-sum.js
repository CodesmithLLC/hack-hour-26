/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {


  const currentVals = {};

  //loop through all the input array elements
  for(let i =0; i<arr.length; i++){

    //calculate the value we need to complete the sum
    let sub = n - arr[i]


    //check if we've already seen that value
    if((currentVals[sub.toString()])){

      //if we found it, we found two sums that equal the number! return true
      return true;
      
    }

    //add the current value to our list of values we've seen
    currentVals[arr[i].toString()] = arr[i];
  }


  return false;

}


// console.log(twoSum([4, 5, 1, 8],6))
module.exports = twoSum;
