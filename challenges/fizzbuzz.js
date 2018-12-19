// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, 
//"buzz" in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
    let numArr = [];
    let output = []

    for (var i = 1; i < num + 1; i++) {
        numArr.push(i);
    }
    numArr.forEach(el => {
        var div3and5 = el % 3 === 0 && el % 5 === 0;
        var div5 = el % 5 === 0
        var div3 = el % 3 === 0

        if (div3and5) {
            output.push('fizzbuzz')
        } else if (div5) {
            output.push('buzz')
        } else if (div3) {
            output.push('fizz')
        } else {
            output.push(el);
        }
    })
    return output
}


module.exports = fizzbuzz;
