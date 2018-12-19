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

  const buzzArray =[];

  for (let i=1; i<num; i++) {
    

    //first check if its divisible by 3 && 5 (also divisible by 15)
    if ((i%3===0)  &&(i%5 ===0)) {
      buzzArray.push('fizzbuzz');
    }

    //if its divisible by 3% push fizz
    else if (i%3 === 0) {
       buzzArray.push('fizz');
    }

    //if its divisible by 3% push fizz
    else if (i%5 ===0){
      buzzArray.push('buzz');
    }

    else {
      buzzArray.push(i);
    }
  }

  return buzzArray;
}

let arr =31;

console.log(fizzbuzz(arr));
module.exports = fizzbuzz;
