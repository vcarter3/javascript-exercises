const repeatString = function (string, number) {
    let modified_string = string;
    if (number == 0) {
        return ""
    }

    if (number < 0) {
        return "ERROR"
    }

    for (i = 1; i < number; i++) {
        modified_string += string;
    }

    return modified_string
};

// Do not edit below this line
module.exports = repeatString;
