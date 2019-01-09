/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     :    I
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
 * 
 * I: positive integer
 * O: string -> should represent input in roman numeral form
 * 
 */
console.log('roman numeral!')

const conversionTable = {
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
  1000: 'M',
};

// 103
// length === 3

function romanNumeral(n) {
  /**
   * is num divis by 
   */
  return `${n}`.length;
  // start from leftmost digit
    // if length is 2 
      // recurse (if )
    

}

module.exports = romanNumeral;
