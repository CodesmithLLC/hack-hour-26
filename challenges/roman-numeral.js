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
  if (n > 3999) return undefined;
  if (n === 0) return undefined;
  // compare numbers to numerals in an object or arrays?
  let comparisons = {
    1: I,
    5: V,
    10: X,
    50: L,
    100: C,
    500: D,
    1000: M,
  };
  // compare numbers less than or greater than a new symbol? like <9, <40, <90, <400
  // use modulo to find a remainder less than 4?
  // create 
}

module.exports = romanNumeral;
