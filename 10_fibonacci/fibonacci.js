const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {
        return 'OOPS';
    }
    if (n===0) {
        return 0;
    }
    let fib = [1, 1];
    let i = 1;
    while (i !== n) {
        let z = fib[0];
        fib[0] = fib[1];
        fib[1] = z + fib[1];
        i++;
    }
    return fib[0];
};

// Do not edit below this line
module.exports = fibonacci;
