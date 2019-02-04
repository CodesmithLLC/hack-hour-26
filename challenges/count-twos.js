// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// function countTwos(num) {
//     // split the number into  an array
//     // Check each value in an array to see if the numeric version has a value of two in it
//     // May need a helper function
//   let count = 0;
//     for(let i = 0; i < num; i++) {
//         //check if value is less than ten
//         if(i === 2) {
//             count++
//         }

//         if(i > 10) {
//           let numSplit = i
//   numSplit = numSplit.toString().split('')

//   for(let j = 0; j <= numSplit.length; j++) {
//     if(numSplit[j] === '2'){
//       count++
//     }
//   }

// }

//     }

//     return count

// }

function countTwos(num, count = 0, result = 0) {
  if (count === num) {
    return result;
  }

  let test = count;
  test = test.toString().split("");

  test.forEach(val => {
    if (val === "2") {
      result++;
    }
  });
  count++;

  return countTwos(num, count, result);
}

countTwos(1000);

countTwos(11420);
countTwos(22);

module.exports = countTwos;
