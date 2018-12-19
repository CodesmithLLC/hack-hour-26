// Write a function that returns an array containing the numbers 1 to NUM. Put "fizz" in place of numbers divisble by 3, "buzz" 
// in place of numbers divisble by 5, and "fizzbuzz" in place of numbers divisble by both 3 and 5
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
    const fbArray = [];
    for(let i = 1; i <= num; i++){
        if(i % 3 === 0 && i % 5 === 0){
            fbArray.push('fizzbuzz');
        }else if(i % 3 === 0) {
            fbArray.push('fizz');
        }else if(i % 5 === 0) {
            fbArray.push('buzz');
        }else{
            fbArray.push(i);
        }
    }
    return fbArray;

    // This actually works for fun: 

    // return Array.apply(null, { length: num }).map(Number.call, Number).map((el)=>{
    //  el++; if(el % 3 === 0 && el % 5 === 0) return 'fizzbuzz'; 
    //   if(el % 3 === 0) return 'fizz'; 
    //   if(el % 5 === 0) return 'buzz'; 
    //   return el;
    // });
}

console.log('Test:', fizzbuzz(16));

module.exports = fizzbuzz;
