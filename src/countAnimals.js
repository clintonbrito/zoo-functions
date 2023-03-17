const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }

  const bicho = species.find((specie) => animal.species === specie.name);

  if (animal.species && animal.sex === undefined) {
    return bicho.residents.length;
  }

  const bichosPorSexo = bicho.residents.filter((resident) => resident.sex === animal.sex);
  return bichosPorSexo.length;
};

countAnimals();

// Para esse requisito, tive o auxílio fundamental da monitoria notura do Victor Matias no dia 16/03.

module.exports = countAnimals;
