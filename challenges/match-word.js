// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str.trim().length === 0) return true;
  // change the case to lowever case, then replace all non-alphabetical chars empty string
  // remove all non-alphabetic chars

  str = str.toLowerCase().replace(/[^a-z]+/gi, ' ');
  let newStr = str.trim();
  // split string into an arr;
  const arrOfWords = newStr.split(' ');
  // use a stack to add words to
  const stack = [];
  const stringToBeReversed = [];
  // loop over string, adding each element to the stack
  arrOfWords.forEach((element, i) => {
    // push first word into stack
    if (i === 0) stack.push(element);
    // push current word into reverse arr
    // reverse string and join
    stringToBeReversed.push(element);
    let stringToCompare = stringToBeReversed.reverse().join();
    stringToBeReversed.pop();

    console.log(stringToCompare);
    // check if previous word in stack matches reversed string and pop if it does, else push to stack
    if (stack[i - 1] === stringToCompare) stack.pop();
    else {
      stack.push(element);
    }
  });

  if (stack.length > 0) return false;
  return true;
}

let string = '%%$@$while  try ! yrt  for if_fi rof #*#  elihw';
console.log(matchWord(string));

module.exports = matchWord;
