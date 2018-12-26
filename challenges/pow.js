/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */


 /*brute forcer power function
function pow(base, power) {

  if (power === 0){
    return 1;
  }

  return base * pow(base, power -1);

}*/



function pow(base,power){
  let x;
  if(power===0){
    return 1;
  }
  else if (power%2 ===0) {
      x= pow(base,parseInt(power/2,10))*pow(base,parseInt(power/2,10));
  }
  
  else {
       x = base*pow(base,parseInt(power/2,10))*pow(base,parseInt(power/2,10));
  }

  if(power<0){
    return (1/x);
  }

  else{
    return x;
  }
}

console.log(pow(3,-2));

module.exports = pow;
