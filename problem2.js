var cached = function (fn) {
        var proxy = function (agrument) {
            var cache = proxy.cache;
            return cache.hasOwnProperty(agrument) ? cache[agrument] : (cache[agrument] = fn(agrument));
        };
        proxy.cache = {};
        return proxy;
    },
    fibonacci = cached(function (n) {
        return n <= 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
    }),
    sum = cached(function (n) {
        return n <= 1 ? 0 :
            sum(n - 1) + (fibonacci(n) % 2 === 0 ? fibonacci(n) : 0);
    }),
    i = 1;

while (sum(i) < 4000000) i++;

console.log(sum(i));