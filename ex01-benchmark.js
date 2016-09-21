var _ = require('lodash');
var Benchmark = require('benchmark');

// Function defs
var power = _.partial(function (exponent) {
    return 2 << (exponent - 1);
});

var powerPow = _.partial(function (exponent) {
    return Math.pow(2, exponent);
});


// Test suite
var suite = new Benchmark.Suite();
suite
.add('Shift bit', function() {
    power(30);
})
.add('Math pow', function() {
    powerPow(30);
})
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    var fastest = this.filter('fastest');
    var slowest = this.filter('slowest');
    var percentage = slowest.map('hz') / fastest.map('hz');
    console.log('Fastest is ' + fastest.map('name') + ': ' + Math.round(percentage * 100) + '%');
})
.run({ 'async': true });
