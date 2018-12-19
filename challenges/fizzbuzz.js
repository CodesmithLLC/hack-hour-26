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
    let numArray = [];
    let counter = num;
    let newArray = [];

    while(counter > 0){
        numArray.push(counter);
        counter--;
    }

    numArray.reverse();

    for (let i=0; i<numArray.length; i++){
        if((numArray[i]%3 === 0) && (numArray[i]%5 === 0)){
            newArray.push("fizzbuzz")
        } else if(numArray[i]%3 === 0){
            newArray.push("fizz")
        } else if(numArray[i]%5 === 0){
            newArray.push("buzz");
        } else{
            newArray.push(numArray[i])
        }
    }
    return newArray;

}

module.exports = fizzbuzz;

console.log(fizzbuzz(16))
