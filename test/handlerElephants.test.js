const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verificar se o argumento `count` retorna o número inteiro 4', () => {
    expect(handlerElephants('count')).toEqual = 4;
  });
  it('Verificar se o argumento `names` deve retornar um array de nomes que possui o nome Jefferson', () => {
    expect(handlerElephants('names')).toEqual = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
  });
  it('Verificar se o argumento `averageAge` deve retornar um número próximo a 10.5', () => {
    expect(handlerElephants('avarageAge')).toEqual = 10.5;
  });
  it('Verificar se o argumento `location` deve retornar a string `NW`', () => {
    expect(handlerElephants('location')).toEqual = 'NW';
  });
  it('Verificar se o argumento `popularity` deve retornar um número igual ou maior a `5`', () => {
    expect(handlerElephants('popularity')).toEqual = 5;
  });
  it('Verificar se o argumento `availability` deve retornar um array de dias da semana que não contém `Monday`', () => {
    expect(handlerElephants('availability')).toEqual = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
  });
  it('Verificar se, caso a função não receba parâmetro, retornar `undefined`', () => {
    expect(handlerElephants()).toEqual = undefined;
  });
  it('Caso passe como argumento um objeto vazio ({}) deve retornar a string `Parâmetro inválido, é necessário uma string`', () => {
    expect(handlerElephants({})).toEqual = 'Parâmetro inválido, é necessário uma string';
  });
  it('Caso passe uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants('whatever')).toEqual = null;
  });
});
