const reverseString = function(string) {
    let string_array = string.split('');
    let reversed_array = string_array.reverse();
    let reversed_string = reversed_array.join('');

    return reversed_string
};

// Do not edit below this line
module.exports = reverseString;
