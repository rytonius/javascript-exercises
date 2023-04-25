const findTheOldest = function (array) {
  return array.reduce((oldest, current) => {
    const oldestboi = OldestAge(oldest.yearOfBirth, oldest.yearOfDeath)
    const currentboi = OldestAge(current.yearOfBirth, current.yearOfDeath)
    return currentboi > oldestboi ? current : oldest;
  });
  
};

function OldestAge(birth, death) {
    if (!death)
        death = new Date().getFullYear();
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;


// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
//   ]

// function FTO(array = people) {
//     let oldestperson = [];
//     let oldest = 0;
//     let current = 0;
//     array.forEach((item, index) => {
//         console.log(`${item.name} : ${index}`);
//         current = (Number(item.yearOfDeath) - Number(item.yearOfBirth));
//         oldest = (current > oldest) ? current : oldest;
//         console.log(current + "    "  + oldest)
//         if (oldest == current) 
//             oldestperson = item.name
//     })
//     console.log(current + "    "  + oldest + "   " + oldestperson)
//     return oldestperson

// }



// FTO()