/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

function bestProfit(stock_prices_yesterday) {
    let array = stock_prices_yesterday
    // loop through array...
    // look for largest result of subtracting left index by right index
    // Note: return 0 if no profit is possible or if input is invalid
    
    for (let i = 0; i < array.length; i += 1){
        let max = 0;
        for (let j = 1; j < array.length; j += 1){
            let profit = array[j] - array[i];
            if (profit > max){
                max = profit;
            }            
        } 
        if (max > 0) { return max }
        else { return 0 };
    }
};


// Test your code
let array1 = [2, 3, 10, 6, 4, 8, 1]; // should be 8;
let array2 = [7, 9, 5, 6, 3, 2]; // should be 2

console.log("Should be 8. I got: ", (bestProfit(array1)));
console.log("Should be 2. I got: ", (bestProfit(array2)));

module.exports = bestProfit;
