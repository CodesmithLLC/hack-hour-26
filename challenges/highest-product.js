/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    if (array.length < 3) return false;
    if (!Array.isArray(array)) return false;
    return array.reduce((top, e) => {
        if (!top[0]) {
            top.push(e);
        } else if (e > top[0]) {
            top.unshift(e);
            if (top.length >= 3) top.pop();
        } else if (!top[1]) {
            top.push(e);
        } else if (e > top[1]) {
            top[1] = e;
        } else if (!top[2]) {
            top.push(e);
        } else if (e > top[2]) {
            top[2] = e;
        }
        return top;
    }, [])
        .reduce((product, e) => {
            return product *= e;
        });
}

module.exports = highestProduct;
