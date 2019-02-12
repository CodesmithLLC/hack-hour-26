/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
    if (!arr.length) return undefined;
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i + 1] && (maxSum + arr[i] + arr[i + 1] >= maxSum)) {
            console.log(arr[i], arr[i + 1]);
            maxSum += arr[i] + arr[i + 1];
            i++;
        } else if (!arr[i + 2] && arr[i + 1] < 0) {
            console.log(arr[i]);
            maxSum += arr[i];
            i++;
        } else {
            maxSum = 0;
            i++
        }
    }
    return maxSum;
}

module.exports = maxSubarray;
