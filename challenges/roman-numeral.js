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

  const mapping ={
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
  }

  if(mapping[n]){
    return mapping[n];
  }

  const keys = Object.keys(mapping);

  //set starting values
  let startingVal = -1;
  let romanVal ='';

  //greedily find the biggest value that fits in n
  for(let i=0; i< keys.length; i++){
    if(keys[i]>n){
      romanVal = mapping[keys[i-1]];
      startingVal = keys[i-1];
      break;
    }
  }

  //case for n is greater than 1000
  if(startingVal === -1){
    romanVal = 'M';
    startingVal=1000;
  }


  //recursively concatenate the rest of n
  return romanVal + romanNumeral(n-startingVal);
}

console.log(romanNumeral(5000));
module.exports = romanNumeral;
