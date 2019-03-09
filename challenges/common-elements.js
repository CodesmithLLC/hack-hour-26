// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input


function commonElements(array1, array2, array3, array4){
  
  // find the longest array
  let all = [array1, array2, array3, array4]
  all.sort((a, b) => a.length < b.length);
  let largest = all[0];

  // create an empty array to store our results
  let result = [];
  
  // iterate over that array
  for (let i = 0; i < largest.length; i += 1){
  
    // check to see if the current element exists in all the other arrays
    if (
      all[1].includes(largest[i]) && 
      all[2].includes(largest[i]) && 
      all[3].includes(largest[i]) && 
      !result.includes(largest[i])){
      
        // if a value passes this test, push it into the result array
      result.push(largest[i])
    }
  }
  if (result.length > 0){
    console.log(result);
    return result;
  } 
  // if the result array has a length, return it
  // else, there are no common numbers or strings and you should return the string "Nothing in Common!"
  else { return "Nothing in Common!"}
}

// Test your code
const array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
const array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
const array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
const array4 = ['ferret',12,12,45,9,66,77,78,2000];

commonElements(array1, array2, array3, array4); // output should be [ 12, 'ferret']

module.exports = commonElements;
