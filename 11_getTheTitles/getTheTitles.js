const getTheTitles = function(arr) {
    let newArr = [];
    let i = 0;
    for (let obj in arr) {
        newArr[i] = arr[obj].title;
        i++;
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;
