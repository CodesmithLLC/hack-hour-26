/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I ***
 *  `   2     ->    II
 * 
 *      4     ->    IV (5 - 1)
 *      5     ->    V  ***
 * 
 *      9     ->    IX (10 -1)
 *      10    ->    X ***
 * 
 *      40    ->    XL (50 - 10)
 *      50    ->    L ***
 * 
 *      90    ->    XC (100 - 10)
 *      100   ->    C 888
 * 
 *      400   ->    CD (500 - 100)
 *      500   ->    D ***
 * 
 *      900   ->    CM (1000 - 100)
 *      1000  ->    M 888
 * 
 */

function romanNumeral(n) {
   let one = "I"
   let five = "V"
   let ten = "X"
   let fifty = "L"
   let hundred = "C"
   let thousand = "M"
   let numeral = "";

   let string = n.toString();
   let newString = "";
   
   for (let i = string.length-1; i >= 0; i -= 1){
        newString += string[i];
        console.log(newString)
   } 
   return newString;

//    if (n < 4){
//         numeral += one.repeat(n)
//         return numeral;
//    } else if (n >= 4 && n < 5){
//         numeral = one + five;
//         return numeral;
//    } else if (n >= 5 && n < 9){
//        numeral = five + one.repeat(n-5)
//        return numeral;
//    } else if (n >= 9 && n < 10){
//     numeral = one + ten;
//     return numeral;
//    } else if (n >= 10 && n < 19){
//     numeral = one + ten;
//     return numeral;
//    }

}

console.log(romanNumeral(900));







module.exports = romanNumeral;
