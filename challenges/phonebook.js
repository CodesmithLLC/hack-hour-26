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
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2:
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  jazbook.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });

  let jazbook1 = jazbook.slice();

  while (jazbook1.length !== 0) {
    const middle = Math.floor(jazbook1.length / 2);
    if (name < jazbook1[middle][0]) {
      jazbook1 = jazbook1.slice(0, middle);
    } else if (name > jazbook1[middle][0]) {
      jazbook1 = jazbook1.slice(middle, jazbook1.length);
    } else if (name === jazbook1[middle][0]) {
      return true;
    }
    if (jazbook1.length === 1) {
      return false;
    }
  }

  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const obj = {};
  for (let i = 0; i < jazbook.length; i += 1) {
    obj[jazbook[i][0]] = jazbook[i][1];
  }
  return obj;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];
console.log(findName(jazbook, 'travi'));

console.log(makePhoneBookObject(jazbook));
