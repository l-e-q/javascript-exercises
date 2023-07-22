const findTheOldest = function(array) {
    let peopleAge = [];
    array.forEach(man => {
        peopleAge.push((man.yearOfDeath || new Date().getFullYear()) - man.yearOfBirth );
    });
    let maxAge = Math.max(...peopleAge);
    return array.find(man => (man.yearOfDeath || new Date().getFullYear()) - man.yearOfBirth === maxAge);
};

// Do not edit below this line
module.exports = findTheOldest;
