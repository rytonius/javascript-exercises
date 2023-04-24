const removeFromarray = function(...args) {
    
    const InitArray = args[0];
    const FinalArray = [];

    InitArray.forEach((item) => {
        if(!args.includes(item)) {
            FinalArray.push(item);
        }
    });

    return FinalArray;
    
};

// Do not edit below this line
module.exports = removeFromarray;

