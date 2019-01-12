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
    let stack = [];
    let subStr = '';
    // for words
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (isLetter(char)) {
            subStr += char
        } else if (!isLetter(char) && subStr.length >0) {
            stack.push(subStr);
            subStr = '';
        }
    }

    for (let j = 0; j < stack.length; j++) {
        let wordReversed = reverseStr(stack[i])
        // you're here. check if there is reversed version of string in stack ...
    }
    return stack
}

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}

function reverseStr(str) {
    if (str.length === 0) {
        return '';
    }
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i-=1) {
        reversedStr += str[i]
    }
    return reversedStr
}

let thisStr = '__END_DNE-----';
console.log(reverseStr(''))
console.log(matchWord(thisStr))


module.exports = matchWord;
