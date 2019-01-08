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
  let remainingString = str.slice();
  let matchString = '';
  // get string and push each character of string onto new string using splice until the first repeated character.
  while (matchString.charAt(matchString.length - 1) !== remainingString.charAt(0)) {
    matchString += remainingString.splice(0, 1);
  }
  // take first string and drop all special characters using regex
  matchString.replace(new RegExp('[^sw]', 'g'), '');
  // take the remainder of the original string and drop the special characters using regex
  remainingString.replace(new RegExp('[^sw]', 'g'), '');
  // reverse the string and compare values
  matchString.split().reverse().join();
  if (matchString === remainingString) return true;
  return false;
}

module.exports = matchWord;
