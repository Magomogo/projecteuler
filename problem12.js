function factors(num) {
    if (num === 1) return 1;

    var count = 2, f = 2, limit = num / 2;
    while (f <= limit) {
        if (num % f === 0) {
            count = count + 2;
            limit = num / f - 1;
        }
        f++;
    }
    return count;
}

function triangle(num) {
    var result = 0;
    while (num) {result = result + num--;}
    return result;
}

console.log(factors(1),  factors(1) === 1);
console.log(factors(3),  factors(3) === 2);
console.log(factors(6),  factors(6) === 4);
console.log(factors(10), factors(10) === 4);
console.log(factors(15), factors(15) === 4);
console.log(factors(21), factors(21) === 4);
console.log(factors(28), factors(28) === 6);

console.log(triangle(1) === 1);
console.log(triangle(2) === 3);
console.log(triangle(3) === 6);
console.log(triangle(4) === 10);

var i = 1;
while (factors(triangle(++i)) < 500);

console.log(i);
console.log(triangle(i));