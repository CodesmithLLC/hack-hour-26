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
    let condensedTime = [];
  
    array.sort(function(a,b){
      return a[0] -b[0];
    });
  
    condensedTime.push(array[0]);
    let j = 0;
    for(let i = 1; i < array.length; i++){
      if(array[i][0] <= condensedTime[j][1]){
        condensedTime[j][1] = array[i][1];
      }else{
        condensedTime.push(array[i]);
        j++
      }
  
    }
    return condensedTime;
  }

module.exports = mergeRanges;
