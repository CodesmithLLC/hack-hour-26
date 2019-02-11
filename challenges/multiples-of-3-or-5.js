

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  // const sum = 0;

  // for (let i = 1; i < 1000; i += 1) {
  //   if (i % 3 === 0) {
  //     sum += i;
  //   } else if (i % 5 === 0) {
  //     sum += i;
  //   }
  // }

  // return sum;

  const a = Math.floor((1000 - 1) / 3);
  const b = Math.floor((1000 - 1) / 5);
  const c = Math.floor((1000 - 1) / (3 * 5));

  const i = 3 * a * (a + 1) / 2;
  const j = 5 * b * (b + 1) / 2;
  const k = (3 * 5) * c * (c + 1) / 2;


  return i + j - k;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  // let sum = 0;

  // for (let i = 1; i < z; i += 1) {
  //   if (i % x === 0) {
  //     sum += i;
  //   } else if (i % y === 0) {
  //     sum += i;
  //   }
  // }

  // return sum;

  const a = Math.floor((z - 1) / x);
  const b = Math.floor((z - 1) / y);
  const c = Math.floor((z - 1) / (x * y));

  const i = x * a * (a + 1) / 2;
  const j = y * b * (b + 1) / 2;
  const k = (x * y) * c * (c + 1) / 2;


  return i + j - k;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

// console.log(sumMultiples3Or5Below1000());
// console.log(sumMultiplesXOrYBelowZ(5, 3, 1000));

module.exports = objectToExport;
