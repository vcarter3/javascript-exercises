const findTheOldest = function (oldies) {
    age_max = 0
    person_index = 0

    for (i = 0; i < oldies.length; i++) {
        if (Object.hasOwn(oldies[i], 'yearOfDeath')) {
            deathYear = oldies[i].yearOfDeath;
        } else {
            deathYear = new Date().getFullYear();
        }


        if (deathYear - oldies[i].yearOfBirth > age_max) {
            age_max = deathYear - oldies[i].yearOfBirth;
            person_index = i;
        }
    }
    return oldies[person_index]

};

// Do not edit below this line
module.exports = findTheOldest;
