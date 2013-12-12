var _ = require('lodash'),
    goodEnough = function (num) {
        return _.range(3, 20).reduce(function (memo, div) { return memo && (num % div === 0);}, true);
    },
    num = 2;

while (!goodEnough(num)) { num = num + 2; }

console.log(num);
