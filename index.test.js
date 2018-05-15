//ejercicio fizzbuzz
// const fizzbuzz = require('./index');

// describe('Fizzbuzz', function () {

//   test('returns a number', function () {
//     expect(fizzbuzz(7)).toBe(7);
//   });
//   test('the number is multiple of 3 returns fizz', function () {
//     expect(fizzbuzz(3)).toBe('fizz');
//     expect(fizzbuzz(9)).toBe('fizz');
//     expect(fizzbuzz(207)).toBe('fizz');
//   });
//   test('the number is multiple of 5 returns buzz', function () {
//     expect(fizzbuzz(5)).toBe('buzz');
//     expect(fizzbuzz(50)).toBe('buzz');
//     expect(fizzbuzz(2076545)).toBe('buzz');
//   });
//   test('the number is multiple of 3 and 5 returns fizzbuzz', function () {
//     expect(fizzbuzz(15)).toBe('fizzbuzz');
//     expect(fizzbuzz(90)).toBe('fizzbuzz');
//     expect(fizzbuzz(1035)).toBe('fizzbuzz');
//   });
//   test('the number contains 3 returns fizz', function () {
//     expect(fizzbuzz(73)).toBe('fizz');
//     expect(fizzbuzz(1234)).toBe('fizz');
//   });
//   test('the number contains 5 returns buzz', function () {
//     expect(fizzbuzz(55)).toBe('buzz');
//     expect(fizzbuzz(5789)).toBe('buzz');
//   });
//   test('the number contains 3 AND 5 returns fizzbuzz', function () {
//     expect(fizzbuzz(53)).toBe('fizzbuzz');
//     expect(fizzbuzz(989835)).toBe('fizzbuzz');
//   });
//   test('if not multiple of 3, 5 or doesnt contain 3 returns number', function () {
//     expect(fizzbuzz(14)).toBe(14);
//     expect(fizzbuzz(1)).toBe(1);
//   });
// });

//ejercicio kata padding
// Crear una función padding-left que se encarga de meter caracteres de relleno en un cadena por 
// el lado izquierdo hasta llegar a un tamaño deseado. Toma 3 parámetros

// La cadena inicial
// Un tamaño final
// Un valor del padding, por defecto es un espacio
// Ejemplo: padding-left('hola', 6, 'x') devuelve 'xxhola'
// Si el tamaño final es menor o igual que la cadena inicial, se devuelve sin tocar la inicial.
const paddingLeft = require('./index');

describe('padding-left', function () {
  test('returns the original string', function () {
    expect(paddingLeft('hello')).toBe('hello');
  });
  test('add characters specified to initial string', function () {
    expect(paddingLeft('hello', 7, 'x')).toBe('xxhello');
  });
  test('add 2 spaces to the left if not given a padding value', function () {
    expect(paddingLeft('hello', 7)).toBe('  hello');
  });
});

