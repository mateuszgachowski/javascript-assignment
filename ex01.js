// use _.partial function to implement functions:
var _ = require('lodash');

var addFiveAndSixAnd = _.partial(function () {
    return _.sum(arguments);
}, 5, 6);

var power = _.partial(function (exponent) {
    // Exponent of two is much faster (from ~70% to even ~80%) for numbers in range 0 to 30
    // From 30 it gives negative numbers due to int-number limitation
    // See ex01-benchmark.js file for more info
    // Depends on the needs really :)
    if (exponent < 0 || exponent > 30) {
        throw Error('This functions gives correct values only on 0-30 range of exponent');
    }
    return 2 << (exponent - 1);

    // Normal pow using Math lib, slower but more convinient outside 0-30 range
    // return Math.pow(2, exponent);
});

var powerTwo = _.partial(Math.pow, _, 2);

var powerThree = _.partial(Math.pow, _, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)
// console.log(addFiveAndSixAnd(4, 6, 7)); //28 (adds 5 + 6 + 4 + 6 + 7 = 28)

//Evaluates Math.power(2,3)
console.log(power(3)); //8
// console.log(power(4)); //16
// console.log(power(10)); //1024
// console.log(power(16)); //65536
// console.log(power(31)); // throws error, outside the range


// //Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9
//
// //Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27
