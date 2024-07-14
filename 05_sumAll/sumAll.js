const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a<0 || b<0) {
        return "ERROR";
    }
    if (b<a) {
        let z = a;
        a = b;
        b = z;
    }
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
