/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */


function balancedParens(input) {
  //create open/close constants
  const parensMatch = {
    '{': '}',
    '[': ']',
    '(': ')'
  }

  const closers = '}])';
  //create a simple stack (vertical array), using push/pop only
  const bracketStack = [];

  //iterate through input
  for (let i = 0; i < input.length; i++) {
    //create a constant, currentChar and set equal to the current elemet
    const currentChar = input[i];
    //check your parensMatch object to see if the element is an opener
    if (parensMatch[currentChar]) {
      //if so, add it's analogue to the bracketStack
      bracketStack.push(parensMatch[currentChar]);
    //otherwise, check if the current character is a closer using the includes method on closers
    } else if (closers.includes(currentChar)) {
      //if so, return false
      return false;
    }
  }
}
//if hte stack is empty, return true; otherwise, there was an extra parens somewhere
return !bracketStack.length;
}

// function balancedParens(input) {
//     //declare a variable tempArray and set equal to str.split("") method
//     const tempArray = input.split("");
//     let booleanToReturn;
//     let bracket;
//     let reverseBracket;
//     let tempVariable;
//     //use a for loop starting at the end of input to deterine which bracket to start with
//     for (let j = tempArray.length-1; j >= 0; j--) {
//       if (tempArray[j] === ")") {
//         bracket = "(";
//         reverseBracket =")";
//       } else if (tempArray[j] === "}") {
//         bracket = "{";
//         reverseBracket ="}";
//       } else if (tempArray[j] === "]"){
//         bracket = "[";
//         reverseBracket ="]";
//       }
//       console.log("input: ", input, "tempArray[j] : ", tempArray[j], "bracket: ", bracket)
      
//       if (tempArray[j] === bracket) {
//           return false;
//         }
//         //if an element is equal to reverseBracket
//         if (tempArray[j] === reverseBracket) {
//           //set a tempVariable parensIndex equal to the index of heh bracket
//           tempVariable = tempArray.indexOf(bracket);
//           //if tempVariable is less than 0
//           if (tempVariable < 0) {
//               //return false
//               return false;
//           } else {
//           //else, use the delete operator to remove the ( as that index
//           delete tempArray[tempVariable];
//           }
//       }
//       }
//       //return true
//     booleanToReturn = true;
//     return booleanToReturn
//   }
  
  
  
  // function balancedParens(input){
  //     //declare a variable tempArray and set equal to str.split("") method
  //     const tempArray = input.split("");
  //     let tempVariable;
  //     //create a for loop starting at the end of tempArray, and 
  //     for (let i = tempArray.length-1; i >= 0; i--) {
  //       //if an element is an opening parens, return false
  //       if (tempArray[i] === "(") {
  //         return false;
  //       }
  //       //if an element is a closing parens
  //       if (tempArray[i] === ")") {
  //         //set a tempVariable parensIndex equal to using the input.indexOf("(") method to determine where teh first instance of a "(" is
  //         tempVariable = tempArray.indexOf("(");
  //         //if tempVariable is less than 0
  //         if (tempVariable < 0) {
  //             //return false
  //             return false;
  //         } else {
  //         //else, use the delete operator to remove the ( as that index
  //         delete tempArray[tempVariable];
          
  //     }
  //     }
  //     }
  //     //return true
  //     return true;
  // }
  
  console.log("false: ", balancedParens('(')) //false
  console.log("true: ", balancedParens('()'))  //true
  console.log("false: ", balancedParens(')('));  // false
  console.log("true: ", balancedParens('(())'));  // true
  console.log("hi:             ");  // true
  
  
  console.log("true:   ", balancedParens('[](){}')); // true
  console.log("true:   ", balancedParens('[({})]'));   // true
  console.log("false:   ", balancedParens('[(]{)}')); // false
  

module.exports = balancedParens;
