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
  for (let i = 0; i < jazbook.length; i += 1) {
    if (name === jazbook[i][0]) return jazbook[i][1];
  }

  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  function Phonebook() {
    this.add = function add(name, number) { this[name] = number; };
    this.remove = function remove(name) { delete this[name]; };
    this.lookUp = function lookUp(name) {
      return this[name] ? this[name] : false;
    };
  }

  // Phonebook.prototype.add = function add(name, number) { this[name] = number; };
  // Phonebook.prototype.remove = function remove(name) { delete this[name]; };
  // Phonebook.prototype.lookUp = function lookUp(name) {
  //   return this[name] ? this[name] : false;
  // };

  const newBook = new Phonebook();

  jazbook.forEach(([name, number]) => { newBook.add(name, number); });

  return newBook;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

// console.log(`301-844-0978 -> ${findName(jazbook, 'jae')}`);
// console.log(`false -> ${findName(jazbook, 'me')}`);

const phonebook = makePhoneBookObject(jazbook);

phonebook.add('joel', '314-691-4759');
console.log(`314-691-4759: ${phonebook.lookUp('joel')}`);
phonebook.remove('joel');
console.log(`false: ${phonebook.lookUp('joel')}`);


module.exports = objectToExport;
