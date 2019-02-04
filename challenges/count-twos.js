// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

// ! INPUT: NUMBER
// ! OUTPUT: NUMBER

function countTwos(num) {
  // * WILL NEED TO COUNT UP TO NUM
  // * WILL NEED TO COUNT NUMBER OF 2'S AND SAVE TO A COUNTER
  // * WILL NEED TO RETURN NUMBER OF 2'S ENCOUNTERED
  // * DEFINE COUNTER

  let counter = 0;

  // * LOOP NUM NUMBER OF TIMES

  for (let i = 0; i <= num; i++) {
    // * TURN TO STRING AND CHECK FOR THE CHAR 2
    let str = i.toString();
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '2') counter += 1;
    }
  }
  return counter;
}

console.log(countTwos(20));

module.exports = countTwos;
