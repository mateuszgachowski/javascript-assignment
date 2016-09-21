/*
Return a function that takes a list of valid users, and returns a function that
returns true if all of the supplied users exist in the original list of users.

You only need to check that the ids match.

## Example

    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]

    // `checkUsersValid` is the function you'll define
    var testAllValid = checkUsersValid(goodUsers)

    testAllValid([
      { id: 2 },
      { id: 1 }
    ])
    // => true

    testAllValid([
      { id: 2 },
      { id: 4 },
      { id: 1 }
    ])
    // => false

## Arguments

  * goodUsers: a list of valid users

Tip: you can use array#some and Array#every or _.includes
*/

var _ = require('lodash');

var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
];

var checkUsersValid = function (goodUsers) {
    return function (testedUsers) {
        return testedUsers.every(function (testUser) {
            // Oneliner but compicates performance with `map`
            // return _.includes(_.map(goodUsers, 'id'), testUser.id);
            return goodUsers.some(function (goodUser) {
                return testUser.id === goodUser.id;
            });
        });
    };
};

var testAllValid = checkUsersValid(goodUsers);

var a = testAllValid([
  { id: 2 },
  { id: 1 }
]);

var b = testAllValid([
  { id: 2 },
  { id: 4 },
  { id: 1 }
]);


console.log(a, b);
