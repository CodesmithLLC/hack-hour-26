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

 /*
 const ONES = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const TENS = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninty'];
const PLACES = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

function numToWords(num) {
  // cover case of no number or zero
  if (!num) return 'Zero';
  // stringify number
  let str = String(num);
  // prepend zeros until length is divisible by 3 so we can evaluate place and format
  while (str.length % 3) {
    str = '0' + str;
  }
  // return the final word
  return wordPlace(str)
  .replace('TenOne', 'Eleven')
  .replace('TenTwo', 'Twelve')
  .replace('TenThree', 'Thirteen')
  .replace('TenFour', 'Fourteen')
  .replace('TenFive', 'Fifteen')
  .replace('TenSix', 'Sixteen')
  .replace('TenSeven', 'Seventeen')
  .replace('TenEight', 'Eighteen')
  .replace('TenNine', 'Nineteen');
  // cover special cases for tens
}

// define helper function to evaluate three numbers at a time into respective words until there are no more threes
function wordPlace(str) {
  // define base case when no digits are left
  if (!str.length) return '';
  // slice number string by three at a time
  const groupNums = str.slice(0, 3);
  // declare variable to store words
  let wordStore = '';
  // if groupNums is 000, should not have words
  if (groupNums === '000') wordStore = '';
  // otherwise...
  else {
    // determine PLACES index by dividing string length by 3, minus 1
    const placesIndex = str.length / 3 - 1;
    // parse the groups of three, and add it to the words storage
    wordStore = parseThree(groupNums) + PLACES[placesIndex];
  }
  // continue adding to group of words for every 3 digits
  return wordStore + wordPlace(str.slice(3));
}

// define helper function to parse those groups of three
function parseThree(digits) {
  // declare variable to store words
  let words;
  // if digits is greater than or equal to 100, should take format of
  if (digits >= 100) {
    // (one) hundred / (twenty) tens / (two) ones
    return ONES[digits[0]] + 'Hundred' + TENS[digits[1]] + ONES[digits[2]];
  } else if (digits >= 10) {
    // if digits is greater than or equal to 10, should take format of tens / ones
    return TENS[digits[1]] + ONES[digits[2]];
  } else {
    // otherwise, format should just be ones
    return ONES[digits[2]];
  }
}
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