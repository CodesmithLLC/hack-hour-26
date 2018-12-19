// Write a function that returns an array containing the numbers 1 to NUM.
// Put "fizz" in place of numbers divisble by 3,
// ... "buzz" in place of numbers divisble by 5...
// ... and "fizzbuzz" in place of numbers divisble by both 3 and 5


function fizzbuzz(num) {
    // accept an input called num
    // declare a new array called newArr
    // iterate from 1 to num
    // if a number is divisibile by 3 and 5 - push the word fizzbuzz to newArr
    // else if the number is divisible by 5 - push the word buzz to newArr
    // else if the number is divisble by 3 - push the word fizz to newArr
    // else, push the number at the current index to newArr

    const newArr = [];
    for (let i = 1; i <= num; i += 1){
      	if (i % 5 === 0 && i % 3 === 0){
          newArr.push("fizzbuzz");
        }
        else if (i % 5 === 0){
          newArr.push("buzz");
        }
        else if (i % 3 === 0){
          newArr.push("fizz");
        }
        else {newArr.push(i)};
    }

    // return new array
    console.log(newArr);
    return newArr;

}

// Test your function
fizzbuzz(16);  
/* should log -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 
      'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16 ]
*/

module.exports = fizzbuzz;
