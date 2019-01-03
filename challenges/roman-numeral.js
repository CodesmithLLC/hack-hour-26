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
    let output = '';
    // const sNum = '' + n;
    // have 2 different variables that align with eachother
    let integers = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    for(let i = 0; i < roman.length; i++) {
        while(n >= integers[i]) { // if number is greater than current I value, add the roman number, subtract from number the associated integer.
            output += roman[i];
            n -= integers[i];
        }
    }
    return output;
    
}
console.log(romanNumeral(994));
module.exports = romanNumeral;
