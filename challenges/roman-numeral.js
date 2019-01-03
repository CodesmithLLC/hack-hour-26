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
    let romanNum = '';

    while(n > 0 ){
        while(n >= 1000){
            romanNum += 'M';
            n -= 1000;
        }
        while(n >= 900){
            romanNum += 'CM';
            n -= 900;
        }
        while(n >= 500){
            romanNum += 'D';
            n -= 500;
        }
        while(n >= 400){
            romanNum += 'CD';
            n -= 400;
        }
        while(n >= 100){
            romanNum += 'C';
            n -= 100;
        }
        while(n >= 90){
            romanNum += 'XC';
            n -= 90;
        }
        while(n >= 50){
            romanNum += 'L';
            n -= 50;
        }
        while(n >= 40){
            romanNum += 'XL';
            n -= 40;
        }
        while(n >= 10){
            romanNum += 'X';
            n -= 10;
        }
        while(n >= 9){
            romanNum += 'IX';
            n -= 9;
        }
        while(n >= 5){
            romanNum += 'V';
            n -= 5;
        }
        while(n >= 4){
            romanNum += 'IV';
            n -= 4;
        }
        while(n >= 1){
            romanNum += 'I';
            n -=1;
        }
    }
    return romanNum;

}

module.exports = romanNumeral;
