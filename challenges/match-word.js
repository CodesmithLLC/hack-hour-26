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
    if(str.trim().length === 0){return true};
  
    let lowered = str.toLowerCase();
    let stripped = lowered.replace(/\W+/g," ");
    let nounderScore = stripped.replace(/_/g, " ").trim();
    let wrdArray = nounderScore.split(" ");
  
    while(wrdArray.length > 0){
      if(wrdArray.length === 1){return false};
      if(wrdArray[0] === wrdArray[1].split('').reverse().join('')){
        wrdArray.shift();
        wrdArray.shift();
      }else if(wrdArray[0] === wrdArray[wrdArray.length - 1].split('').reverse().join('')){
        wrdArray.shift();
        wrdArray.pop();
      }else{
        return false;
      }
    }
    return true;
  
  }

module.exports = matchWord;
