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

 let num = 56

function romanNumeral(n, comboArr = []) {
    // base case
    if (n === 0) {
        let output = '';
        // number to roman numeral object
        let numToRoman = {
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
        //converting the number combinations in comboArr to roman numeral strings
        for (let i = 0; i < comboArr.length; i++) {
            output += numToRoman[comboArr[i]]
        }
        return output;
    }

    let romanNumArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    // finding largest possible roman numeral that can go into n
    let i = 0;
    while(romanNumArr[i + 1] <= n) {
        i++
    }

    comboArr.push(romanNumArr[i])

    return romanNumeral(n - romanNumArr[i], comboArr)
}
// console.log('IX' === romanNumeral(9))
// console.log('LVI' === romanNumeral(56))
// console.log('DXXXVII' === romanNumeral(537))
// console.log('CMLXXXVII' === romanNumeral(987))


module.exports = romanNumeral;
