var isPrime = function (num) {
        var i = 2, limit = Math.sqrt(num);

        while (i <= limit) {
            if ((num % i === 0)) {
                return false;
            }
            i++;
        }
        return true;
    },
    nextPrime = function (current) {
        if (current === 1) return 2;
        if (current === 2) return 3;

        do {
            current = current + 2;
        }
        while (!isPrime(current));
        return current;
    };

var prime = 1, sum = 0;
do {
    prime = nextPrime(prime);
    sum = sum + prime;
} while (prime < 2000000);

sum = sum - prime;
console.log(sum);
