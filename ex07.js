/*
Given an Array of strings, use Array#reduce to create an object that contains
the number of times each string occured in the array. Return the object
directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/

var countWords = function (inputWords) {
    return inputWords.reduce(function (wordList, word) {
        // Increment current value or set to one for first occurence
        wordList[word] = (wordList[word] + 1) || 1;
        return wordList;
    }, {});
};

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];

console.log(countWords(inputWords));
