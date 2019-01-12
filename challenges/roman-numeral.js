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
  let arr = [];

  for (let i = 0; i <= n; i++) {
    if (n > 1000) {
      n = n - 1000;
      arr.push("M");
    } else if (n >= 900) {
      n = n - 900;
      arr.push("CM");
    } else if (n >= 500) {
      n = n - 500;
      arr.push("D");
    } else if (n >= 400) {
      n = n - 400;
      arr.push("CD");
    } else if (n >= 100) {
      n = n - 100;
      arr.push("C");
    } else if (n >= 90) {
      n = n - 90;

      arr.push("XC");
    } else if (n >= 50) {
      n = n - 50;
      arr.push("L");
    } else if (n >= 40) {
      arr.push("XL");
    } else if (n >= 10) {
      n = n - 10;
      arr.push("X");
    } else if (n >= 9) {
      n = n - 9;
      arr.push("IX");
    } else if (n >= 5) {
      n = n - 5;
      arr.push("V");
    } else if (n >= 4) {
      n = n - 4;
      arr.push("IV");
    } else if (n >= 1) {
      arr.push("I");
    }
  }
  //second loop
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      if (n > 1000) {
        n = n - 1000;
        arr.push("M");
      } else if (n >= 900) {
        n = n - 900;
        arr.push("CM");
      } else if (n >= 500) {
        n = n - 500;
        arr.push("D");
      } else if (n >= 400) {
        n = n - 400;
        arr.push("CD");
      } else if (n >= 100) {
        n = n - 100;
        arr.push("C");
      } else if (n >= 90) {
        n = n - 90;

        arr.push("XC");
      } else if (n >= 50) {
        n = n - 50;
        arr.push("L");
      } else if (n >= 40) {
        arr.push("XL");
      } else if (n >= 10) {
        n = n - 10;
        arr.push("X");
      } else if (n >= 9) {
        n = n - 9;
        arr.push("IX");
      } else if (n >= 5) {
        n = n - 5;
        arr.push("V");
      } else if (n >= 4) {
        n = n - 4;
        arr.push("IV");
      } else if (n >= 1) {
        arr.push("I");
      }
    }
  }
  console.log(n);
  return arr.join("");
}

console.log(romanNumeral(2774))
console.log(romanNumeral(2729)); //MMDCCXXIX

module.exports = romanNumeral;
