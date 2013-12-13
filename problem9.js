var check = function (a, b, c) {
    return a*a + b*b === c*c;
};

var a, b, c;

for (a = 1; a < 998; a++) {
    for (b = a + 1; b < 999 - a; b++) {
        c = 1000 - b - a;
        if (check(a, b, c)) {
            console.log(a, b, c, a+b+c, a*b*c);
            process.exit(0);
        }
    }
}

