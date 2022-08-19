const fibonacci = function(int1) {
    if (int1 < 0) return "OOPS"
    else {
        let n1 = 0, n2 = 1, nextTerm;
        for (let i = 1; i <= int1; i++) 
        {
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
    return n1;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;


// function fibby(int1) {
//     if (int1 < 0) return "OOPS"
//     else {
//         let n1 = 0, n2 = 1, nextTerm;
//         for (let i = 1; i <= int1; i++) 
//         {
//             nextTerm = n1 + n2;
//             n1 = n2;
//             n2 = nextTerm;
//         }
//     return n1;
//     }
// }

// fibby(8);
// fibby(6);
// fibby(4);
// fibby(-25);
