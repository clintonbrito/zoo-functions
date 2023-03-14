const data = require('../data/zoo_data');

const dataEmployees = data.employees;

const isManager = (managerId) => {
  const gerente = data.employees.map((employee) =>
    employee.managers.some((manager) => manager === managerId));
  return gerente.includes(true);
};

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    // A constante abaixo busca filtrar (filter) se tem algum (some) empregado que tenha como gerente o gerente que foi dado como parâmetro (managerId);
    const empregados = data.employees
      .filter((employee) =>
        employee.managers.some((manager) => managerId === manager));
    // A constante abaixo busca mapear (map) dentro da const 'empregados' as pessoas colaboradoras do respectivo gerente que foi dado como parâmetro (managerId) e "cuspir" em forma de string o nome e sobrenome dessas pessoas;
    const employeesNames = empregados.map((item) => `${item.firstName} ${item.lastName}`);
    return employeesNames;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

// Neste requisito tive o auxílio na monitoria do Summer Marcell Pena no dia 14/03

module.exports = { isManager, getRelatedEmployees };
