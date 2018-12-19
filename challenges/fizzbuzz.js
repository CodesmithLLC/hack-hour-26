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
  if (typeof num !== 'number' || num < 1) console.error('Please enter a number greater than zero!');
  const output = [];

  // loop over numbers from 1 to num
  for (let n = 1; n <= num; n += 1) {
    // initialize an empty string to build fizzbuzz
    let string = '';

    // if current number divisible by 3 string += 'fizz'
    if (n % 3 === 0) string += 'fizz';
    // if current number divisible by 5 string += 'buzz'
    if (n % 5 === 0) string += 'buzz';
    // if string is empty --> current number not divisble by 3 or 5
    // push current number to output,
    // otherwise push string to output
    string ? output.push(string) : output.push(n);
  }
  // after loop, return output;
  return output;
}
// ||||||     FIZZBUZZ TESTS	     ||||||
// console.log({ 'num = 30': fizzbuzz(30) });
// console.log({ 'num = 5': fizzbuzz(5) });
// console.log({ 'num = 305': fizzbuzz(305) });
// console.log({ 'num = -30': fizzbuzz(-30) });
// console.log({ 'num = 0': fizzbuzz(0) });
// console.log({ "num = 'string'": fizzbuzz('string') });


module.exports = fizzbuzz;
