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
    const stockPrices = stock_prices_yesterday;
    let maxProfit = 0;
    let checkProfit = 0;
    let minI = 0;

    if (!stock_prices_yesterday || Array.isArray(stock_prices_yesterday)) return 0;

    for (let i = 1; i < stockPrices.length; i++) {
        if (stockPrices[i] < stockPrices[minI]) {
            minI = i;
            checkProfit = 0;
        } else if (stockPrices[i] > stockPrices[i - 1]) {
            checkProfit = stockPrices[i] - stockPrices[minI];
        }
        if (checkProfit > maxProfit) {
            maxProfit = checkProfit;
        }
        console.log(maxProfit)
    }
    return maxProfit > 0 ? maxProfit : 0;
}

const stocks = [
    10, 12, 18, 45, 20, 5, 23, 49, 59, 70, 50, 30, 2
];


module.exports = bestProfit;
