/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the person's phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/



//  const phonebook = [
//     ['alex','301-844-3421'],
//     ['jae','301-844-1211'],
//     ['david','301-844-0978'],
//     ['travis','301-844-8505'],
//     ['jasmine','1800-974-4539'] ];

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  //the most efficient is direct lookup -- i.e. making it an object and looking up the name.
  //how can you make it an object? 
  
  //flatten all the subarrays, loop over until you find the name, return array[i+1]
  //but that's not the most efficient. who cares?

  let arrBook = jazbook.flat()
  // console.log(arrBook)
  for(let i=0; i<arrBook.length; i++){
    if(arrBook[i]===name){
      return arrBook[i+1];
    }
  }
    return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){

let phonebook = {};
 for(let i=0; i<jazbook.length; i++){
   phonebook[jazbook[i][0]] = jazbook[i][1]
 }
 return phonebook

}

// console.log(makePhoneBookObject(phonebook))

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
