var num = 600851475143,
    isPrime = function (num) {
        var i = 2, limit = Math.sqrt(num);

        while (i < limit) {
            if ((num % i === 0)) {
                return false;
            }
            i++;
        }
        return true;
    },
    nextPrime = function (current) {
        do {
            current = current + 2;
        }
        while (!isPrime(current));
        return current;
    };

var prime = 3, limit = Math.sqrt(num);
do {

    prime = nextPrime(prime);

    if (num % prime === 0) {
        console.log('Found: ', prime)
    }

} while (prime < limit);