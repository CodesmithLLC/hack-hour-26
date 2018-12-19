// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
// 
/**
 * if num divis by 3 -> print fizz
 * if num divis by 5 --> print buzz
 * if num divis by both --> print fizzbuzz
 */

// fizzbuzz(16);  -> [ 1,
// //                     2,
// //                     'fizz',
// //                     4,
// //                     'buzz',
// //                     'fizz',
// //                     7,
// //                     8,
// //                     'fizz',
// //                     'buzz',
// //                     11,
// //                     'fizz',
// //                     13,
// //                     14,
// //                     'fizzbuzz',
// //                     16 ]

// function fizzbuzz(num) {

// }

// input - num
// output - array containing nums with select els 

const fizzbuzz = (num) => {
  const output = [];
  for (let i = 1; i <= num; i += 1) {
    const next = i;
    output.push(next);
  }

  return output.reduce((fizzbuzzed, num, i) => {
    if (num % 3 === 0 && num % 5 === 0)  fizzbuzzed.push('fizzbuzz'); 
    else if (num % 3 === 0) fizzbuzzed.push('fizz'); 
    else if (num % 5 === 0) fizzbuzzed.push('buzz'); 
    else fizzbuzzed.push(num);

    return fizzbuzzed;
  }, []);
};

module.exports = fizzbuzz;
