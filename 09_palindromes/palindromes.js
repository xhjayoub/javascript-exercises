function stringCleaner(string) {
    let cleanString = '';
    for (let i = 0; i< string.length; i++) {
        if (string.charCodeAt(i)>=65 && string.charCodeAt(i)<=122 || string[i]<='9' && string[i]>='0') {
            cleanString += string[i];
        }
    }
    return cleanString.toLowerCase();
}

const palindromes = function (string) {
    let reverse = '';
    for (let i = 0; i < string.length; i++) {
        reverse += string[string.length-i-1];
    }
    return stringCleaner(reverse) == stringCleaner(string);
};

// Do not edit below this line
module.exports = palindromes;
