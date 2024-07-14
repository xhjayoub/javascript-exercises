const removeFromArray = function(arr) {
    let arr2 = [];
    let n = 0;
    for (let i = 0; i< arr.length; i++) {
        let v = false;
        for (let k = 1; k < arguments.length; k++) {
            if (arr[i] === arguments[k]) {
                v = true;
                break;
            }
        }
        if (!v) {
            arr2[n] = arr[i];
            n++;
        }
    }

    return arr2;
};

// Do not edit below this line
module.exports = removeFromArray;
