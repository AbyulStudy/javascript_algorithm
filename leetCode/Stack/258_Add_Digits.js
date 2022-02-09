/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  num = num.toString();
  let tmp = 0;
  while (num.length !== 1) {
    tmp = 0;
    for (let i = 0; i < num.length; i++) {
      tmp += Number(num[i]);
    }
    num = tmp.toString();
  }
  return Number(num);
};

let num = 38;
let output = addDigits(num);
console.log('output : ', output); // 2

console.log(188 % 10);
