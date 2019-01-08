/*
  Some languages have "if" statements that are closed by "fi"
  instead of curly brackets. Or they close a "case" with "esac",
  i.e. the same keyword backwards. for this problem we'll check
  that all words in a string are "closed". Write a function that
  takes a string and returns true if every word is closed by its
  backwards counterpart. Words must be separated by space or punctuation.
*/

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [)

// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // make sure all chars are lower case
  const lower = str.toLowerCase();

  // split the string into elements on spaces
  const dirty = lower.split(' ');
  const cleaned = [];

  // trim each element down to just letters ->
  //    each trimmed word gets pushed into a clean array
  dirty.forEach((element) => {
    let clean = '';
    for (let ix = 1; ix < element.length - 1; ix += 1) {
      const charCode = element.charCodeAt(ix);

      // charCodes for lower case letters between a and z
      if (charCode >= 97 && charCode <= 122) {
        clean += element[ix];
      } else if (clean.length > 0) {
        cleaned.push(clean);
        clean = '';
      }
    }
    // check to make sure the element actually had letters
    // before pushing to cleaned array;
    if (clean.length > 0) {
      cleaned.push(clean);
      clean = '';
    }
  });

  console.log(cleaned);

  // push/pop reversed elements from clean array on/off a stack to track pairs
  // memo them into an object for easier pair comparison?

  // check stack to make sure it's cleared off
}

console.log(matchWord('IF()()fi[]'));

module.exports = matchWord;
