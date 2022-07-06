const sumAll = function (num1, num2) {
    let sum = 0;
    let max = num2;
    let min = num1;

    if (typeof (num1) != "number" || typeof (num2) != "number" || num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    // large number first
    if (num2 < num1) {
        max = num1;
        min = num2;
    }

    for (i = min; i < max + 1; i++) {
        sum += i;
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
