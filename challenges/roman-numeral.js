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
  let number = n;
  let roman = '';
  if (number <= 0) return roman;

  const numerals = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  const nums = Object.keys(numerals).reverse();
  // nums = [1000, 900, 500,..., 5, 4, 1];

  // for each key in nums,
  nums.forEach((num) => {
    // while number > num && number > 0
    while (number >= num && number > 0) {
      // concat corresponding numeral value to roman
      roman += numerals[num];
      // and subtract num from number
      number -= num;
    }
  });

  return roman;
}

// * TESTING * //

// * basic functionality * //
// console.log(`1 -> I : ${romanNumeral(1)}`);
// console.log(`4 -> IV : ${romanNumeral(4)}`);
// console.log(`5 -> V : ${romanNumeral(5)}`);
// console.log(`9 -> IX : ${romanNumeral(9)}`);
// console.log(`10 -> X : ${romanNumeral(10)}`);
// console.log(`40 -> XL : ${romanNumeral(40)}`);
// console.log(`50 -> L : ${romanNumeral(50)}`);
// console.log(`90 -> XC : ${romanNumeral(90)}`);
// console.log(`100 -> C : ${romanNumeral(100)}`);
// console.log(`400 -> CD : ${romanNumeral(400)}`);
// console.log(`500 -> D : ${romanNumeral(500)}`);
// console.log(`900 -> CM : ${romanNumeral(900)}`);
// console.log(`1000 -> M : ${romanNumeral(1000)}`);

// * combinations * //
// console.log(`3 -> III : ${romanNumeral(3)}`);
// console.log(`8 -> VIII : ${romanNumeral(8)}`);
// console.log(`18 -> XVIII : ${romanNumeral(18)}`);
// console.log(`19 -> XIX : ${romanNumeral(19)}`);
// console.log(`24 -> XXIV : ${romanNumeral(24)}`);
// console.log(`29 -> XXIX : ${romanNumeral(29)}`);
// console.log(`146 -> CXLVI : ${romanNumeral(146)}`);
// console.log(`693 -> DCXCIII : ${romanNumeral(693)}`);
// console.log(`1987 -> MCMLXXXVII : ${romanNumeral(1987)}`);
// console.log(`2018 -> MMXVIII : ${romanNumeral(2018)}`);

// console.log(`5000 -> MMMMM : ${romanNumeral(5000)}`);
module.exports = romanNumeral;
