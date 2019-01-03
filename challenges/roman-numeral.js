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

/*
*   




100: C,
200: CC,
300: CCC,
400: CD,
500: D,
600: DC,
700: DCC,
800: DCCC,
900: CM


*/

function romanNumeral(n) {
    const hundreds = {
      0: "",
      1: "C",
      2: "CC",
      3: "CCC",
      4: "CD",
      5: "D",
      6: "DC",
      7: "DCC",
      8: "DCCC",
      9: "CM"
  };
  const tens = {
      0: "",
      1: "X",
      2: "XX",
      3: "XXX",
      4: "XL",
      5: "L", 
      6: "LX", 
      7: "LXX",
      8: "LXXX",
      9: "XC",
  };
  const ones = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV", 
      5: "V", 
      6: "VI", 
      7: "VII", 
      8: "VIII", 
      9: "IX",
  }
  //declare a variable romanNumeralString and set = to empty string
 let romanNumeralString = "";
  //convert integer to a string store in integerString
  let integerString = n.toString();
  //create a variable tempString
  let tempString = "";
  //determine the length of the string
  let tempInteger;
  let integerNumber;
  //if the string length is > 3
  if (integerString.length > 3) {
      //convert first numbers from integerString to a number
      integerNumber = Number(integerString.slice(0, integerString.length -3));
      //use a for loop to traverse integerString
      for (let i = 0; i < integerNumber; i++) {
          romanNumeralString += "M";
      };

      integerString = integerString.slice(integerString.length - 3);
  }
  if (integerString.length > 2) {
      //let tempString = hundreds[integerString[0]]
      tempString = hundreds[integerString[0]];
      //add tempString to romanNumeralString
      romanNumeralString += tempString;
      integerString = integerString.slice(1);
  }
  if (integerString.length > 1) {
      //let tempString = hundreds[integerString[0]]
      tempString = tens[integerString[0]];
      //add tempString to romanNumeralString
      romanNumeralString += tempString;
      integerString = integerString.slice(1);
  }
  tempString = ones[integerString[0]];
  //add tempString to romanNumeralString
  romanNumeralString += tempString;
  return romanNumeralString;
}


module.exports = romanNumeral;
