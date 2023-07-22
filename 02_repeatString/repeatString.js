const repeatString = function (string, times) {
    if (times < 0) {
        return 'ERROR'
    } else if (times === 0) {
        return '';
    }
    let result = string;
    for (let i = 1; i < times; i++) {
        result += string;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
