// given 4 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in all 4 arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];
  // var array3 = [23,12,12,77,'ferret',9,88,100,'dog'];
  // var array4 = ['ferret',12,12,45,9,66,77,78,2000];

// your output would be [ 12, 'ferret']

// if there are no common numbers or strings return the string "Nothing in Common!"

function commonElements(array1, array2, array3, array4){
 
  let set1 = new Set(array1);
  let set2 = new Set(array2);
  let set3 = new Set(array3);
  let set4 = new Set(array4);

  let checkArray = [...set1, ...set2, ...set3, ...set4];

  let comElObjs = {};

  for(let i = 0; i < checkArray.length; i++){
    comElObjs[checkArray[i]] = (comElObjs[checkArray[i]]) ? comElObjs[checkArray[i]] +=1 : 1;
  }

  let retArr = [];

  let countArray = Object.entries(comElObjs);

  for(let i = 0; i < countArray.length; i++){
    if(countArray[i][1] === 4){
      retArr.push(countArray[i][0]);
    }
  }
  return retArr;
  

}
module.exports = commonElements;
