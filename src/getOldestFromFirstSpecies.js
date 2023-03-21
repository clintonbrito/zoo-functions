const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const findAnimalId = employees.find((idEmployee) => idEmployee.id === id).responsibleFor[0];
  const findOldestAnimal = species
    .find((ageAnimal) => ageAnimal.id === findAnimalId).residents
    .sort((a, b) => b.age - a.age);
  const result = findOldestAnimal.find(({ age }) => age);
  return Object.values(result);
};

module.exports = getOldestFromFirstSpecies;
