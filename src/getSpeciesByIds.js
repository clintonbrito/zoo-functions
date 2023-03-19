const data = require('../data/zoo_data');

const getAnimal = data.species;

// 1) O .map é para percorrer o "array" com todos os ids que são passados como parâmetro;
// 2) O find foi passado como função a ser executada dentro do .map para aí sim buscar pelo id o bicho que foi passado como parâmetro;
const getSpeciesByIds = (...ids) => ids
  .map((animal) => getAnimal
    .find((bicho) => bicho.id === animal));

module.exports = getSpeciesByIds;
