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
    const workingArr = [];
    const workingStr = str.replace(/[^A-Za-z0-9]/g, ' ');
    workingStr.split(' ').forEach(e => {
        if (e !== '') {
            workingArr.push(e.toLowerCase());
        }
    });
    if (workingArr.length % 2 !== 0) return false;
    for (let i = 0; i < workingArr.length; i += 0) {
        if (workingArr[i] === workingArr[workingArr.length - i - 1].split('').reverse().join('')) {
            workingArr.pop();
            workingArr.splice(0, 1);
        } else if (workingArr[i] === workingArr[i + 1].split('').reverse().join('')) {
            workingArr.splice(0, 2);
        } else {
            return false;
        }
    }
    return true;
}

// console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));

module.exports = matchWord;
