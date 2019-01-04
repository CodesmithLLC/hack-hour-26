/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

function romanNumeral(n) {
  // create a table of primary roman numerals
  const romans = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let romanConvert = '';

  romansArr = Object.entries(romans);
  // console.log('romansArr: ', romansArr);

  for (let i = romansArr.length - 1; i >= 0; i--) {
    // Check if n is greater than or equal to a roman numeral
    while (n >= romansArr[i][0]) {
      romanConvert += romansArr[i][1];
      n -= romansArr[i][0];
    }
  }

  return romanConvert;
}

console.log(romanNumeral(48));

module.exports = romanNumeral;
