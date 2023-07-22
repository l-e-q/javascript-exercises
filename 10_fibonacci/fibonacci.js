const fibonacci = function (n) {
    n = Number(n);
    if (n < 0) {
        return 'OOPS';
    }
    let fibonacci = [1, 1]
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
