// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive).
// For example: countTwos(3) should be 1 because there are no 2s in the number one. There is One 2 in the number two and no 2s in the number three.
// Each 2 should be counted. For instance,  the number 2222 has four 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

function findTwosLessThanOneHundred(num) {
  let leftoverTwos;

  if (num >= 92) return 20;
  if (num > 29) {
    const leftover = num - 29;
    leftoverTwos = Math.floor(leftover / 10);
    return 13 + leftoverTwos;
  }
  if (num > 19) {
    leftoverTwos = num - 19;
    return 2 + leftoverTwos;
  }
  if (num >= 12) return 2;
  if (num >= 2) return 1;


  return 0;
}


function countTwos(num) {
  const twos = 0;
  // two occurs 20 times between 0 and 99
  // deal with numbers less than 100:


  // deal with numbers over 100:
}

module.exports = countTwos;

console.log(findTwosLessThanOneHundred(19));
