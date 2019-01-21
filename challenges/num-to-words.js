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

// converts a number less than 1000 to words
function convert(n) {
  if (n === 0) return 0;
  const nums = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    20: 'Twenty',
    30: 'Thirty',
    40: 'Forty',
    50: 'Fifty',
    60: 'Sixty',
    70: 'Seventy',
    80: 'Eighty',
    90: 'Ninety',
    100: 'Hundred',
  };

  let word = '';
  if (n >= 100) {
    const hundreds = Math.floor(n / 100);
    word = nums[hundreds] + nums[100];
    n -= (hundreds * 100);
  }
  // handle small numbers
  if (n && n <= 13) {
    return word + nums[n];
  }

  // handle 14-19
  if (n && n < 20) {
    const single = nums[n - 10];
    return `${word + single }teen`;
  }
  // handle 20-99;
  // ! This doesn't handle numbers ending in 0 yet
  if (n && n < 100) {
    const tens = Math.floor(n / 10) * 10;
    const single = n - tens;
    return word + nums[tens] + nums[single];
  }
  return word;
}

function numToWords(num) {
  ['teen', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  const word = '';
  const length = num.toString().length;


  // write a function to compose 3 digit numbers -> see convert above
  // while there is digits remaining
  // starting from the end, grab last 3 digits.
  // convert to words, store in segment
  // word = segment + modifier[] + word

  // increment to next segment
}

module.exports = numToWords;
