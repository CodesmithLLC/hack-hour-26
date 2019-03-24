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

    let min = Infinity;
    let bestProfit = 0;
    let tracker;

    stock_prices_yesterday.forEach(price => {
        if (min > price) min = price;
        tracker = price - min;
        if (tracker > bestProfit) bestProfit = tracker;
        console.log(price, min, tracker, bestProfit);
    });
    return bestProfit;

}

const stocks = [
    10, 12, 18, 45, 20, 5, 23, 49, 59, 70, 50, 30, 2
];

bestProfit(stocks);

module.exports = bestProfit;
