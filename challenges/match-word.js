// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

/**
 * while
 * try
 * yrt
 * for
 * if
 * 
 */

/**
 * I - string - comprised of n words
 * O - boolean
 * C - words must be separated by space or punctuation
 * E
 * 
 *
 * 
 * 
 * 
 * 
 * @param {*} str 
 */

 // [elihw, yrt ]
  // [elihw]
  // [elihw, rof]
  // [elihw, rof, fi]
  // [elihw, rof]
  // [elihw]

  // 'for__if__rof__fi'

  // [rof]
  // [rof, fi]
  // [rof, fi, for]
  // [rof, fi, for, if]


const matchWord = (str) => {
  const words = str.replace(/_/g, ' ').match(/\w+/g);
  const stack = [];

  if (str === '') return true;

  for (let i = 0; i < words.length; i += 1) {
    const word = [...words[i]].reverse().join('');
    const lastIn = stack[stack.length - 1];

    word === lastIn ? stack.pop() : stack.push(words[i]);
  }

  return !stack.length;
};

console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord('__END_DNE-----'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('__ENDDNE__'));
console.log(matchWord('for__if__rof__fi'));
console.log(matchWord('IF()()fi[]'));
console.log(matchWord(''));

// quokka->  command k, release, then q
module.exports = matchWord;
