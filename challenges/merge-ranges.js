/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  //declare a variable set equal to an empty array, to store the merged ranges
  const mergedRanges = [];
  //declare a variable, newLower
  let newLower;
  //declare a variable, new Upper
  let newUpper;
  //order the array from lowest first variable to highest first number
  array.sort();
  //use a for loop to iterate through the original array
  for (let i = 0; i < array.length; i++) {
    //use a second for loop to iterate through the array again
    for (let j = i + 1; j < array.length; j++) {
      //if the element at position 0 is less than one of the elements in position 1 in the array, 
      if (array[i][0] < array[j][0]) {
        //save it as newLower
        newLower = array[i][0];
        //if the el at pos 1 of the array is less than the el at pos 1 of the next element, 
        if (array[i][1] < array[j][0]) {
        //save as newUpper
        newUpper = array[i][1];
        //declare a variable tempArray
        let tempArray = [];
        //push new Lower and newUpper into temp array
        tempArray.push(newLower);
        tempArray.push(newUpper);
        //push tempArray into mergedRanges
        mergedRanges.push(tempArray);
        //break
        break;
      //else if el at position 1 is greater than el at position 0, 
      } else if (array[i][1] > array[j][0]) {
        //check if el at position 1 is less than el at position 1
        if (array[i][1] < array[j][1]) {
          //if so, newUpper = the OG position 2
          newUpper = array[j][1];
          //declare a variable tempArray
          let tempArray = [];
          //push new Lower and newUpper into temp arraytempArray.push(newLower);
          tempArray.push(newUpper);
          //push tempArray into mergedRanges
          mergedRanges.push(tempArray);
          //increment i by 1
          i += 1;
          //break
          break;
        }
      }
    }
    }

  }
       



      //if the element in position 2 of the original array is greater than element in position 2 of the new array
        //replace the first element in the array with the first element and leave the second element
        //break
      //if t  




}

module.exports = mergeRanges;
