'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below10() {
  let sum = 0;
  let counter = 1;
  let count = 1;
  while (3*counter < 10){
      sum+=(3*counter);
      counter++;
  }
 
  while (5*count < 10){
    sum+=(5*count);
    count++;
  }

  return sum;
}


function sumMultiples3Or5Below1000() {
  let sum = 0;
  let counter = 1;
  let count = 1;
  while (3*counter < 1000){
      sum+=(3*counter);
      counter++;
  }
 
  while (5*count < 1000){
    sum+=(5*count);
    count++;
  }

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x,y,z) {
  let sum = 0;
  let counter = 1;
  let count = 1;
  while (x*counter < z){
      sum+=(x*counter);
      counter++;
  }
 
  while (y*count < z){
    sum+=(y*count);
    count++;
  }

  return sum;
}



const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;


