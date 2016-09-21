/*
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with 'message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

 Arguments

  messages: an Array of 10 to 100 random objects that look something like this:

    {
      message: 'Esse id amet quis eu esse aute officia ipsum.' // random
    }

  Hint - try chaining some Array methods!

*/

var sampleData = [
    {
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida velit velit, ac ultrices tellus cursus quis. Donec fringilla mattis purus, at pellentesque nunc ultricies id. Pellentesque bibendum ante id ipsum vestibulum, auctor sollicitudin lectus elementum. Donec metus tortor, auctor eu dapibus sed, viverra vitae ante.'
    },
    {
        message: 'Fusce convallis nibh ex, ac gravida lectus ultricies elementum. Sed tristique id magna ut sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        message: 'Donec leo tellus, gravida ut ex quis, scelerisque mattis erat. Aliquam erat volutpat. Maecenas ultrices lorem non augue dignissim scelerisque.'
    },
    {
        message: 'Donec leo tellus, gravida ut ex quis.'
    }
];

function getShortMessages(messages) {

    return messages
        .map(function (element) {
            return element.message;
        })
        .filter(function(message) {
            return message.length < 50;
        });
}

console.log(getShortMessages(sampleData));
