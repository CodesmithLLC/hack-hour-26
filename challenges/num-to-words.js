// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    let n = [];
    num = num.toString();
    while(num.length > 0){
        n.push(num[0]);
        num = num.substring(1);
    }
    let output = '';
    
    
    // thousand is 4 numbers, million is 7, billion is 10, trillion is  13, quadrillion is 16
    if(n.length > 16) {


    }
    n.shift;
    console.log(n)
    
    if(n > 10 && n < 20) {
        if(num === 11) output 
    }
}

module.exports = numToWords;

// console.log(numToWords(43));// -> 'FortyThree'
console.log(numToWords(2999));// -> 'TwoThousandNineHundredNintyNine'
// console.log(numToWords(15));
// console.log(numToWords(1500000000));
// console.log(numToWords(92120000000000000));