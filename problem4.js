var strRev = function (s) {
        return (s + '').split('').reverse().join('');
    },
    isPalindromic = function (num) {
        return num + '' === strRev(num + '');
    },
    result = 0;

for (var x = 100; x <= 999; x++) {
    for (var y = 100; y <= x; y++) {
        if (isPalindromic(x * y)) {
            result = Math.max(x * y, result);
        }
    }
}

console.log(result);
