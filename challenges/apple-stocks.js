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
    let maxProfit = 0;
    stock_prices_yesterday.forEach((e, i) => {
        const curItem = e;
        for (let j = i + 1; j < stock_prices_yesterday.length; j++) {
            const checkItm = stock_prices_yesterday[j];
            if ((checkItm - curItem) > maxProfit) maxProfit = (checkItm - curItem);
        }
    });
    return maxProfit;
}

const stocks = [
    100, 170, 0, 80, 7, 2
];

console.log(bestProfit(stocks));

module.exports = bestProfit;
