const repeatString = function(string , int) {
    if (int < 0) return 'ERROR';
    let word = '';
    for (let i= 0; i < int; i++) {
        word += string;
    }
    return word;
};

// const repeatString = function(word, times) {
//     if (times < 0) return 'ERROR';
//     let string = '';
//     for (let i = 0; i < times; i++) {
//       string += word;
//     }
//     return string;
//   };

// Do not edit below this line
module.exports = repeatString;
