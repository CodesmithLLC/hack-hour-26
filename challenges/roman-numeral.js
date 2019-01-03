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

 const conversions = {
    1   :"I",
    4   :"IV",
    5   :"V",
    9   :"IX",
    10  :"X",
    40  :"XL",
    50  :"L",
    90  :"XC",
    100 :"C",
    400 :"CD",
    500 :"D",
    900 :"CM",
    1000:"M",
 }

 const intervals = [1,4,5,9,10,40,50,90,100,400,500,900,1000];

function romanNumeral(n) {
    if(isNaN(n)) return n;
    let result = "";

    function makeString(n, pos = 12 ){
        if(n === 0){
            console.log(result);
            return result;
        } 
        else{
            if((n-intervals[pos] >= 0)){
                // console.log(conversions[intervals[pos]]);
                result = result.concat(conversions[intervals[pos]]);
                n-=intervals[pos];
                return makeString(n,pos);
            }
            else return makeString(n,pos-1);
        }
    }

    return makeString(n);

}

console.log(romanNumeral(981));
module.exports = romanNumeral;
