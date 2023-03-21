const data = require('../data/zoo_data');

const { species, hours } = data;

const openingHours = Object.keys(hours);
const createObj = () => {
  const reduceObj = openingHours.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species
        .filter((bicho) => bicho.availability
          .includes(curr))
        .map(({ name }) => name),
    };
    return acc;
  }, {});
  reduceObj.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return reduceObj;
};

const getSchedule = (scheduleTarget) => {
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  } if (openingHours.includes(scheduleTarget)) {
    return { [scheduleTarget]: createObj()[scheduleTarget] };
  }
  return createObj();
};

module.exports = getSchedule;
