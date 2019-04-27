// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {

  //start with numOfSpaces = 8
  let numOfSpaces = 8;
    //handle the cases from worst to best (losing 6 to losing 2 moves)
    if ((x === 8 || x === 1) && (y === 8 || y === 8)) {
    //if statements, subtracting value from numOfSpaces 
      numOfSpaces - 6;
    };
    if (())







}

module.exports = knightjumps;
