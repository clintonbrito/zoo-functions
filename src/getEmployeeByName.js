const data = require('../data/zoo_data');

const dataEmployees = data.employees;

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  } if (data.employees.find((employee) => employee.firstName === employeeName)) {
    return data.employees.find((employee) => employee.firstName === employeeName);
  }
  return data.employees.find((employee) => employee.lastName === employeeName);
};

module.exports = getEmployeeByName;
