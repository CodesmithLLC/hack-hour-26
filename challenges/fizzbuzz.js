// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// fizzbuzz(16);  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

function fizzbuzz(num) {
  // create an empty array;
  const arr = [];
  // loop num number of times
  for (let i = 1; i <= num; i++) {
    // if num is divisible by 3 and 5 push fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('fizzbuzz');
      continue;
    }
    // if i is divisible by 3, push fizz into arr
    if (i % 3 === 0) {
      arr.push('fizz');
      continue;
    }
    // if i is divisible by 5 push buzz
    if (i % 5 === 0) {
      arr.push('buzz');
      continue;
    }
    // otherwise push i into const arr;
    arr.push(i);
  }
  // return arr
  return arr;
}

console.log(fizzbuzz(16));  //  -> [ 1,
//                     2,
//                     'fizz',
//                     4,
//                     'buzz',
//                     'fizz',
//                     7,
//                     8,
//                     'fizz',
//                     'buzz',
//                     11,
//                     'fizz',
//                     13,
//                     14,
//                     'fizzbuzz',
//                     16 ]

module.exports = fizzbuzz;
