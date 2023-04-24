const palindromes = function (string) {
    let re = /[\W_]/g;
    string = string.toLowerCase().replace(re,'');
    let reverse =  string.split('').reverse().join('')
    return reverse == string
};

// Do not edit below this line
module.exports = palindromes;


// function palindromes(string) 
// {
//     let re = /[\W_]/g;
//     string = string.toLowerCase().replace(re,'');
//     let reverse =  string.split('').reverse().join('')
//     console.log(string + " " + reverse)
//     return reverse == string
// }

// palindromes("hi buddy")
// palindromes('racecar')
// palindromes('racecar!')
// palindromes('A car, a man, a maraca.')