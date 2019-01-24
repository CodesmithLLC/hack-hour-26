/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {

    //declare a constant mergedArray to hold our newly merged array
    const mergedArray = [];
    //use a for loop to iterate through our first array, but don't auto increase i by 1
    for (let i = 0; i < arr1.length; i) {
        //use a for loop to iterate through our second array, but don't auto increse j by 1
        for (let j = 0; j < arr2.length; j) {



            //if the value of arr1[i] > arr2[j]
            if (arr1[i] < arr2[j]) {
                //push the value of arr[i] into mergedArray
                mergedArray.push(arr1[i]);
                //incremenet i by one
                i += 1;
            } else {
                //push the value of arr2[j] into mergedArrray
                mergedArray.push(arr2[j]);
                //incremenet j by one
                j++;
            }
        }
    }
    //return merged array
    return mergedArray;
}

module.exports = mergeArrays;


//function mergeArrays(arr1, arr2) {

    //declare a constant mergedArray to hold our newly merged array
    const mergedArray = [];
    //use a for loop to iterate through our first array, but don't auto increase i by 1
    for (let i = 0; i < arr1.length; i) {
        //use a for loop to iterate through our second array, but don't auto increse j by 1
        for (let j = 0; j < arr2.length; j) {
           
            //if the value of arr1[i] > arr2[j]
            if (arr1[i] < arr2[j]) {
                //push the value of arr[i] into mergedArray
                mergedArray.push(arr1[i]);
                //incremenet i by one
                i += 1;
            } else {
                //push the value of arr2[j] into mergedArrray
                mergedArray.push(arr2[j]);
                //incremenet j by one
                j++;
            }
          if  (i = arr[i].length) {
            mergedArray.concat(arr2.slice(j));
            return mergedArray;
          }
          if (j = arr[j].length) {
            mergedArray.concat(arr1.slice(i));
            return mergedArray;  
        }
        }
    }
    //return merged array
    return mergedArray;
}


//function mergeArrays(arr1, arr2) {

    //declare a constant mergedArray to hold our newly merged array
    const mergedArray = [];
    //use a for loop to iterate through our first array, but don't auto increase i by 1
    for (let i = 0; i < arr1.length; i) {
        //use a for loop to iterate through our second array, but don't auto increse j by 1
        for (let j = 0; j < arr2.length; j) {
           
            //if the value of arr1[i] > arr2[j]
            if (arr1[i] < arr2[j]) {
                //push the value of arr[i] into mergedArray
                mergedArray.push(arr1[i]);
              arr1.shift();
                //incremenet i by one
                i += 1;
            } else {
                //push the value of arr2[j] into mergedArrray
                mergedArray.push(arr2[j]);
               arr2.shift();
                //incremenet j by one
                j++;
            }
          console.log(mergedArray);
          if  (i = arr[i].length) {
            mergedArray.concat(arr2.slice(j));
            return mergedArray;
          }
          if (j = arr[j].length) {
            mergedArray.concat(arr1.slice(i));
            return mergedArray;  
        }
        }
    }
    //return merged array
    return mergedArray;
}


const my_array = [3,4,6,10,11,15,21];
const another_array = [1,5,8,12,14,19];


console.log(mergeArrays(my_array, another_array));

console.log("hi there sir hello");
console.log("hello");

