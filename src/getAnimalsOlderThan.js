const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // 1 Encontrar o animal
  const bichoObj = data.species.find((bicho) => bicho.name === animal);
  return bichoObj.residents.every((resident) => resident.age >= age);
  // 2 Verificar se a idade dos espécimes é >= ao segundo parâmetro passado;
};

module.exports = getAnimalsOlderThan;
