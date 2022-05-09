const findTheOldest = function(peoples) {
    let currentOldestAge = 0;
    let oldestPeople;
    let age;
    for(const people of peoples) {
        if(people.yearOfDeath > 0) {
            age = people.yearOfDeath - people.yearOfBirth;
        } else {
            age = new Date().getFullYear() - people.yearOfBirth; 
        }
        
        if(age > currentOldestAge){
            currentOldestAge = age;
            oldestPeople = people;
        } 
    }

    return oldestPeople;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ];

  console.log(findTheOldest(people).name);
// Do not edit below this line
module.exports = findTheOldest;
