function solution(clothes) {
  let clothesMap = new Map();
  clothes.map((el) => {
    if (clothesMap.get(el[1])) clothesMap.set(el[1], clothesMap.get(el[1]) + 1);
    else clothesMap.set(el[1], 1);
  });

  // 조합 알고리즘 (A * B)
  let answer = 1;
  for (const value of clothesMap.values()) {
    answer = answer * (value + 1);
  }

  // answer - 1(아무것도 입지 않는 경우의 수)
  return answer - 1;
}

let clothes = [
  ['yellowhat', 'headgear'],
  ['bluesunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
];
let output = solution(clothes); // return 5
console.log(output);

clothes = [
  ['crowmask', 'face'],
  ['bluesunglasses', 'face'],
  ['smoky_makeup', 'face'],
];
output = solution(clothes); // return 3
console.log(output);
