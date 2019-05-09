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
  // eslint-disable-next-line no-restricted-syntax
  for (let i in jazbook) {
    if (jazbook[i][0] === name) return jazbook[i][1];
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  this.phonebook = {};
  jazbook.forEach((val) => {
    this.phonebook[val[0]] = val[1];
  });
  return this.phonebook;
}

makePhoneBookObject.prototype.addNew = (name, number) => {
  (!name || !number) ? undefined : {

  this.phonebook[name] = number}
};

makePhoneBookObject.prototype.lookup = name => this.phonebook[name];

makePhoneBookObject.prototype.delete = name => delete this.phonebook[name];

const objectToExport = {
  findName,
  makePhoneBookObject,
};

console.log(findName([['harmon', '16266795930']], 'harmon'));
console.log(makePhoneBookObject([['harmon', '16266795930']]));

module.exports = objectToExport;
