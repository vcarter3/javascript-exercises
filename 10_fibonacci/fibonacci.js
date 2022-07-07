const fibonacci = function (index) {
    if (index < 0) { return "OOPS" }

    function generator(n) {
        if (n == 0) { return 0 };
        if (n == 1) { return 1 };
        return generator(n - 1) + generator(n - 2)
    }

    return generator(parseInt(index))
};

// Do not edit below this line
module.exports = fibonacci;
