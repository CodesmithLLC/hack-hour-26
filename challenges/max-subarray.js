/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

// function maxSubarray(arr) {
//     let largest;
//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum+=arr[i];
//     }
//     if(sum>largest){
//         largest = sum;
//         sum = 0;
//     }

// }

function maxSubarray(arr, curr=arr, largest=0) {
    //add all the elements of the arr. 
        //if the sum is greater than the largest, replace the largest.
    //then slice off the last element and do it again
    //once you get the end of the array, start over but this time with the first element shifted off
    
    //base case
    if((curr.length===1) && (arr.length !== 1)){
        arr.shift();
        curr = arr;
    }
    if((curr.length===1) && (arr.length === 1)){
        return largest
    }

    //Main logic
    let sum = 0;
    for(let i=0; i<curr.length; i++){
        sum+=curr[i];
    }
    if(sum>largest){
        largest = sum;
        sum = 0;
    }
    curr = curr.slice(0,curr.length-1)
    // console.log(curr)

    //Recursive call
    return maxSubarray(arr, curr, largest)

}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]))

module.exports = maxSubarray;
