const reverseString = function(string) {
    let ch = '';
    for (let i = 0; i < string.length; i++) {
        ch += string[string.length - i - 1];
    }
    return ch;
};

// Do not edit below this line
module.exports = reverseString;
