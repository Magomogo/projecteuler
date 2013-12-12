var strRev = function (s) {
        var rev = [];
        (s + '').split('').map(function (c) { rev.unshift(c);});
        return rev.join('');
    },
    isPalindromic = function (num) {
        var string = num + '';
        return string.substr(0, Math.ceil(string.length / 2)) === strRev(string.substr(Math.floor(string.length / 2)));
    },
    result = 0;

for (var x = 100; x <= 999; x++) {
    for (var y = 100; y <= x; y++) {
        if (isPalindromic(x * y)) {
            if (result < x * y) {
                result = x * y;
            }
        }
    }
}

console.log(result);
