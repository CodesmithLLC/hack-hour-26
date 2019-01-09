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
    let white = str.toLowerCase().split(/([_\W])/);
    console.log(white);
    let onlyWords = [];
    for(let i = 0; i < white.length; i++){
        if (white[i].length > 1 ){
            onlyWords.push(white.splice(i,1));
        }
    }
    let words = onlyWords.map(el => el[0]); // was returning an array inside of an array

    console.log(words);
    for(let i = 0; i < words.length; i++) {
        console.log(words[i])
        let reversed = words[i];
        reversed.split('').reverse().join('');
        console.log(reversed)
    }
    
}
matchWord('__end_()dne__-');

module.exports = matchWord;
