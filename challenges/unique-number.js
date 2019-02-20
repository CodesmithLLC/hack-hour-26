/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
    let numObj = {};
    for(let i = 0; i < array.length; i++){
        if(numObj[array[i]]){
            delete numObj[array[i]]
        }else{
            numObj[array[i]] = array[i]
        }
    }
    return Object.values(numObj)[0];

}

module.exports = uniqueNumber;
