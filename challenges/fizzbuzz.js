// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" 
//in place of numbers divisble by 3, "buzz" in place of numbers divisble by 5, and 
//"fizzbuzz" in place of numbers divisble by both 3 and 5
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
    //declare a constant newArray, and set equal to an empty array
    //const numArray = [];
    //declare a constant fizzBuzzyArray, and set equal to an empty array
    const fizzBuzzyArray = [];
    //use a for loop to generate an array from 1 - num
    // for (let i = 1; i < num + 1; i++) {
    //     //push each number into newArray
    //     numArray.push(i);
    // }
    //use a for loop to to access each element in newArray
    for (let j = 0; j < num + 1; j++) {
        //if numbers divisible by both 3 and 5
        if ((j % 3 === 0) && (j % 5 === 0)) {
            //push fizzbuzz to newArray
            fizzBuzzyArray.push("fizzbuzz");
        //else, if numbers divisible by 3
        } else if (j % 3 === 0) {
            // push "fizz"
            fizzBuzzyArray.push("fizz");
        //else if numbers divisible by 5
        } else if (j % 5 === 0) {
            //push buzz
            fizzBuzzyArray.push("buzz");
        } else {
            //else, push element
            fizzBuzzyArray.push(j);
        }
    }
    //return fizzBuzzyArray
    return fizzBuzzyArray;
}

console.log(fizzbuzz(16)) 

//using a switch statement

function fizzbuzz2(num) {
    //declare a constant newArray, and set equal to an empty array
    const numArray = [];
    //declare a constant fizzBuzzyArray, and set equal to an empty array
    const fizzBuzzyArray = [];
    //use a for loop to generate an array from 1 - num
    for (let i = 1; i < num + 1; i++) {
        //push each number into newArray
        numArray.push(i);
    }
    //use a for loop to to access each element in newArray
    for (let j = 0; j < numArray.length; j++) {
        switch(true) {
            case ((numArray[j] % 3 === 0) && (numArray[j] % 5 === 0)):
              fizzBuzzyArray.push("fizzbuzz");
              break;
            case (numArray[j] % 3 === 0):
              fizzBuzzyArray.push("fizz");
              break;
            case (numArray[j] % 5 === 0):
              fizzBuzzyArray.push("buzz");
              break;
            default:
              fizzBuzzyArray.push(numArray[j]);
          }

    }
    //return fizzBuzzyArray
    return fizzBuzzyArray;
}

console.log(fizzbuzz2(16)) 







module.exports = fizzbuzz;
