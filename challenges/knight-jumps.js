// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"
function onBoard(number) {
  return (number > 0 && number < 9);
}


function knightjumps(str) {
  let count = 0;
  const chars = str.split('');
  const coords = [];

  chars.forEach((char) => {
    const n = parseInt(char, 10);
    if (Number.isNaN(n) === false) coords.push(n);
  });

  const moves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const spaces = moves.map(move => [coords[0] + move[0], coords[1] + move[1]]);

  spaces.forEach(([x, y]) => {
    if (onBoard(x) && onBoard(y)) count += 1;
  });

  return count;
}
console.log('');
console.log(`8: ${knightjumps('(4, 5)')}`);
console.log(`4: ${knightjumps('(1, 5)')}`);
console.log(`2: ${knightjumps('(1, 1)')}`);
console.log('');

module.exports = knightjumps;
