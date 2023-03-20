const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const entrantsTest = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const countEntrants = (entrants) => {
  const entrantsObj = { adult: 0, child: 0, senior: 0 };
  entrants.reduce((acc, { age }) => {
    // const { age } = curr;
    if (age < 18) { acc.child += 1; }
    if (age >= 18 && age < 50) { acc.adult += 1; }
    if (age >= 50) { acc.senior += 1; }
    return acc;
  }, entrantsObj);
  return entrantsObj;
};

// console.log(countEntrants(entrantsTest));

// adult: 49.99
// senior: 24.99
// child: 20.99

const calculateEntry = (entrants) => {
  const entrantsObj = countEntrants(entrants);
  const sumAdult = entrantsObj.adult * prices.adult;
  const sumChild = entrantsObj.child * prices.child;
  const sumSenior = entrantsObj.senior * prices.senior;
  return sumAdult + sumChild + sumSenior;
};

console.log(calculateEntry(entrantsTest));

module.exports = { calculateEntry, countEntrants };
