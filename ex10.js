/*
SPY

Override a specified method of an object with new functionality while still
maintaining all of the old behaviour.

Create a spy that keeps track of how many times a function is called.

## Example

    var spy = Spy(console, 'error')

    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')

    console.log(spy.count) // 3

## Arguments

  * target: an object containing the method `method`
  * method: a string with the name of the method on `target` to spy on.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

## Hint

  * Functions have context, input and output. Make sure you consider the
  context, input to *and output from* the function you are spying on.

*/

function JamesBond(target, method) {
    this.count = 0;

    // private
    var originalMethod = target[method];
    var logging = false;

    target[method] = (function () {
        originalMethod.apply(target, arguments);
        this.count += 1;

        if (logging) {
            console.info('James Bond: function has been called with ', arguments);
        }
    }).bind(this);

    // Proto methods
    this.enableLogging = function () {
        logging = true;
    };

    return this;
}


var bond = JamesBond(console, 'error');

bond.enableLogging(); // optional

console.error('calling console.error M');
console.error('calling console.error I');
console.error('calling console.error 6');

console.log(bond.count); // 3
