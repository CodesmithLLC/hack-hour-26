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

romanNumerals = [
    1000, 'M',
    900, 'CM',
    500, 'D',
    400, 'CD',
    100, 'C',
    90, 'XC',
    50, 'L',
    40, 'XL',
    10, 'X',
    9, 'IX',
    5, 'V',
    4, 'IV',
    1, 'I',
]


function romanNumeral(n) {
    let workingNum = n;
    let result = '';
    for (let i = 0; i < romanNumerals.length; i += 2) {
        while (workingNum >= romanNumerals[i]) {
            result += romanNumerals[i + 1];
            workingNum -= romanNumerals[i];
        }
    }
    return result;
}

// romanNumeralsRec = [
//     {1000: 'M'},
//     {900: 'CM'},
//     {500: 'D'},
//     {400: 'CD'},
//     {100: 'C'},
//     {90: 'XC'},
//     {50: 'L'},
//     {40: 'XL'},
//     {10: 'X'},
//     {9: 'IX'},
//     {5: 'V'},
//     {4: 'IV'},
//     {1: 'I'}
// ]
// function romanNumeralRec(n, result='') {
//     if(n === 0) return result;

//     romanNumeralFunc()
// }

console.log(romanNumeral(1909));

module.exports = romanNumeral;
