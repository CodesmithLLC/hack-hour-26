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
  if (num < 0) {
    return [];
  }
  // declare a const, assign it an empty array
  const result = [];
  // increment by one up to num, starting at 1
  for (let i = 1; i <= num; i += 1) {
    // if divisible by three and five, push 'fizzbuzz' to the array
    // if number is divisible by three then push 'fizz' to array
    // if num is divisible by five then push 'buzz ' to the array
    const isDiv3 = i % 3 === 0;
    const isDiv5 = i % 5 === 0;
    if (isDiv3 && isDiv5) result.push('fizzbuzz');
    else if (isDiv3) result.push('fizz');
    else if (isDiv5) result.push('buzz');
    else result.push(i);
  }
  return result;
}

module.exports = fizzbuzz;
