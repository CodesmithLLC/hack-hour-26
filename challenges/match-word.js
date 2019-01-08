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
  let match = /[Aa-zZ]/g;
  //   console.log(str.split(""));
  //   console.log(str.match(match));
  let newStr = str.match(match);
  //   console.log(newStr)
  //sliding window approach
  let begin = 0;
  let end = 1;
  let firstTest = "";
  let lastTest = "";
  console.log(newStr);

  while (newStr[begin] === newStr[newStr.length - end]) {
    firstTest += newStr[begin];
    lastTest += newStr[newStr.length - end];
    begin += 1;
    end += 1;
  }

  if (firstTest === lastTest) {
    return true;
  }
}

// matchWord("__END_DNE-----");

// matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw");
// matchWord("__END_DNE-----");

module.exports = matchWord;
