const data = require('../data/zoo_data');

// const { species } = require('../data/zoo_data');

// const getSpeciesByIds = (...ids) => {
//   const getAnimal = () => {
//     if (ids === undefined) {
//       return [];
//     } if (ids.length === 1) {
//       species.find((animal) => animal.id === ids);
//       return getAnimal;
//       console.log(getAnimal);
//     }
//   };
//   return getAnimal;
// };

const getAnimal = data.species;

const getSpeciesByIds = (...ids) => {
  if (ids !== undefined) {
    return [];
  } if (ids.length === 1) {
    getAnimal.find((animal) => animal.id === ids);
    return getAnimal;
  }
};

module.exports = getSpeciesByIds;
