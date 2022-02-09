/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  while (Math.floor(num / 10) > 0) {
    console.log(`${num % 10} + ${Math.floor(num / 10)}`);
    num = (num % 10) + Math.floor(num / 10);
  }
  return num;
};

let num = 38;
let output = addDigits(num);
console.log('output : ', output); // 2
