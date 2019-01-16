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

function bestProfit(arr) {
    let profit = 0;

    if (!Array.isArray(arr)) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        const price = arr[i];
        
        const newArr = arr.slice(i);

        for (let j = 0; j < newArr.length; j++) {
            const price2 = newArr[j];

            if (price2 - price > profit) {
                profit = price2 - price;
            }
        }
    }
    return profit
}

const arr = [1000, 1, 35, 70, 5, 900];

console.log(bestProfit(arr)) 

module.exports = bestProfit;
