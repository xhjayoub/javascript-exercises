const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR"
    }
    let ch = '';
    for (let i = 0; i<num; i++) {
        ch += string;
    }
    return ch
};

// Do not edit below this line
module.exports = repeatString;
