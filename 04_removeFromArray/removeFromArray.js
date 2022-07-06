const removeFromArray = function (array, ...values) {
    function matches(element) {
        return !values.includes(element)
    }

    return array.filter(matches);
};

// Do not edit below this line
module.exports = removeFromArray;
