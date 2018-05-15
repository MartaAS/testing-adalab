// function fizzbuzz(number) {
//   if (number % 3 === 0 && number % 5 === 0 || filterNumber(number) == 'fizzbuzz') {
//     return 'fizzbuzz';
//   } if (number % 3 === 0 || filterNumber(number) == 'fizz') {
//     return 'fizz';
//   } else if (number % 5 === 0 || filterNumber(number) == 'buzz') {
//     return 'buzz';
//   } else return number;
// };
// function filterNumber(number) {
//   numberToString = number.toString();
//   if ((result = numberToString.includes('3')) && (result = numberToString.includes('5'))) {
//     return 'fizzbuzz';
//   } else if (result = numberToString.includes('3')) {
//     return 'fizz';
//   } else if (result = numberToString.includes('5')) {
//     return 'buzz';
//   } else return number;
// }
// module.exports = fizzbuzz;


//ejercicio kata padding

function paddingLeft(initialString, finallySize, paddingValue) {
  let initialStringValue = initialString;

  if (!paddingValue) {
    paddingValue = ' ';
  }
  for (var i = initialString.length; i < finallySize; i++) {
    initialStringValue = paddingValue + initialStringValue;
  }
  return initialStringValue;
}
module.exports = paddingLeft;