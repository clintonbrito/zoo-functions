const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const getAnimal = data.species.find((species) => species.name === animal).residents;
  return getAnimal.every((bicho) => animal.age >= age);
};

module.exports = getAnimalsOlderThan;
