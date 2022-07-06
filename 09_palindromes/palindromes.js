const palindromes = function (word) {

    let forbidden = ['!', '.', ' ', ',']

    for (let char of forbidden) {
        word = word.split(char).join('');
    }

    word = word.toLowerCase();
    let middle_i = Math.floor(word.length / 2)

    // check symmetrical 
    for (let i = 0; i < middle_i; i++) {
        if (word[i] != word[word.length - 1 - i]) {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
