const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        
        currentYear = new Date().getFullYear();

        oldestAge = !oldest.yearOfDeath ? currentYear - oldest.yearOfBirth 
        : oldest.yearOfDeath - oldest.yearOfBirth;
        personAge = !person.yearOfDeath ? currentYear - person.yearOfBirth 
        : person.yearOfDeath - person.yearOfBirth;

        return oldestAge < personAge ? person : oldest;

    }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
