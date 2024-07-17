function calcAge(Death, Birth) {
    if (Death === undefined) {
        let d = new Date();
        Death = d.getFullYear();
    }
    return Death - Birth;
}

const findTheOldest = function(people) {
    let oldest = people[0];
    for (let i = 1; i< people.length ; i++) {
        if (calcAge(people[i].yearOfDeath,people[i].yearOfBirth) > calcAge(oldest.yearOfDeath, oldest.yearOfBirth)) {
            oldest = people[i];
        }

    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
