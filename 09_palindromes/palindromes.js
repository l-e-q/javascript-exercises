const palindromes = function (word) {
    return word.split('').reverse().join('').toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "") === word.toLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, "");
};

// Do not edit below this line
module.exports = palindromes;
