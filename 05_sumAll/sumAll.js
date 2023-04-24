const sumAll = function(int1, int2) {
    if (Array.isArray(int2) || Array.isArray(int1) || typeof int2 === "string" || typeof int1 === "string" || int1 < 0 || int2 < 0) {
        return "ERROR"
    }

    if (int1 < int2) {
        start = int1;
        end = int2;
    }
    else {
        start = int2;
        end = int1;
    }

    let finalsum = 0;
    for (i = start; i <= end; i++) {
        finalsum += i;
    }

    return finalsum;
};

// Do not edit below this line
module.exports = sumAll;



// function test (int1, int2) {

//     if (Array.isArray(int2) || Array.isArray(int1) || typeof int2 === "string" || typeof int1 === "string") {
//         return "ERROR"
//     }


//     if (int1 < int2) {
//         start = int1;
//         end = int2;
//     }
//     else {
//         start = int2;
//         end = int1;
//     }



//     let finalsum = 0;
//     for (i = start; i <= end; i++) {
//         console.log("i: " + i );
//         finalsum += i;
//     }

//     return finalsum;
// }

// test(5,"test")
// test(5, [1,2])