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

// instantiate a lookup table
const wordNums = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

const zerosTable = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety',
}

// 57,909
// fifty-seven thousand, ninehundred

// 1,000,000,000

const length = {
  2: 'hundred',
  3: 'thousand',
  5: ''
  6:
  7:
  8:
  9:
}

//831

//'eight '
// first dig look up is eight
  // shift first dig
// length is now two
  // zeros look up is hundred 
  // function numToWords(num) {
  //   let digits = [...num.toString()]; // convert num to digits
  //   let word = '';
  //   if (digits.length < 3) {
  //     word += wordNums[num];
  //   }
  //   if (digits.length === 3) {
  //     word += wordNums[digits[0]] + ' hundred';
  //   }
  //   if (digits.length === 4) {
  //     word += wordNums[digits[0]] + ' thousand';
  //   }
  //   if (digits.length === 5) {
  //     word += wordNums[digits[0] + digits[1]] + ' thousand';
  //   }
  // //   if (digits.length === 6) {
  // //     word += wordNums[digits[0]] + ' thousand';
  // //   }
  // //   if (digits.length === 4) {
  // //     word += wordNums[digits[0]] + ' thousand';
  // //   }
  //   return word;
  // }
  
  // numToWords(19);
  // numToWords(200);
  // numToWords(2000);

function numToWords(num) {
  let digits = [...num.toString('')]; // convert num to digits
  let word = '';
  if (digits.length < 3) {
    word += wordNums[digits];
  }
  // for (let i = 0; i < digits.length; i += 1) {
    
  //   if (digits.length) {

  //   }
  // }
  // while (digits.)
}

module.exports = numToWords;
