/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I ***
 *  `   2     ->    II
 *      4     ->    IV (5 - 1)
 *      5     ->    V  ***
 *      9     ->    IX (10 -1)
 *      10    ->    X ***
 *      40    ->    XL (50 - 10)
 *      50    ->    L ***
 *      90    ->    XC (100 - 10)
 *      100   ->    C 888
 *      400   ->    CD (500 - 100)
 *      500   ->    D ***
 *      900   ->    CM (1000 - 100)
 *      1000  ->    M 888 
 */

 function romanNumeral(n) {
   let romanArr = [
      1000,
      'M',
      900,
      'CM',
      500,
      'D',
      400,
      'CD',
      100,
      'C',
      90,
      'XC',
      50,
      'L',
      40,
      'XL',
      10,
      'X',
      9,
      'IX',
      5,
      'V',
      4,
      'IV',
      1,
      'I'
   ]
   
  

}





console.log(romanNumeral(935));







module.exports = romanNumeral;
