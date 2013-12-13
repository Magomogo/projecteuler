var _ = require('lodash'),
    sum1, sum2, last = 100,
    sumFn = function (memo, n) { return memo + n;};

sum1 = _.range(1, last + 1).map(function (n) { return n*n;}).reduce(sumFn, 0);
sum2 = _.range(1, last + 1).reduce(sumFn, 0);

console.log(sum2 * sum2 - sum1 === 25164150);