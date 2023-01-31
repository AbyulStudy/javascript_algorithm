Array.prototype.peek = function () {
  return this.length > 0 ? this[this.length - 1] : undefined;
};
function solution(numbers) {
  var answer = new Array(numbers.length);

  let tmpArr = [];
  for (let i = 0; i < numbers.length; i++) {
    // Start!
    if (tmpArr.length === 0) {
      tmpArr.push(i);
      continue;
    }

    // 하강직선 일 경우
    if (numbers[i] < numbers[i - 1]) {
      tmpArr.push(i);
      continue;
    }

    // 상승 곡선일 경우
    while (tmpArr.length > 0 && numbers[tmpArr.peek()] < numbers[i]) {
      answer[tmpArr.pop()] = numbers[i];
    }
    tmpArr.push(i);
  }

  while (tmpArr.length > 0) {
    answer[tmpArr.pop()] = -1;
  }

  return answer;
}

const rst1 = solution([2, 3, 3, 5]);
console.log(
  "정답 : ",
  rst1,
  " - ",
  JSON.stringify(rst1) === JSON.stringify([3, 5, 5, -1])
);

const rst2 = solution([9, 1, 5, 3, 6, 2]);
console.log(
  "정답 : ",
  rst2,
  " - ",
  JSON.stringify(rst2) === JSON.stringify([-1, 5, 6, 6, -1, -1])
);
