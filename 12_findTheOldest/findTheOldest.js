const findTheOldest = function() {

};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


function FTO(array) {
    array.map(yearOfBirth => array.yearOfBirth)
    return array
}

FTO(people);
