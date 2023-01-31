// x 를 y로 변환 변환방법은 다음과 같음.
// x에 n을 더합니다
// x에 2를 곱합니다.
// x에 3을 곱합니다.
// 최소 연산 횟수를 구하는 함수 작성
function solution(x, y, n) {
  if (x === y) return 0;
  // 메모제이션을 위한 객체 생성
  const dp = {};
  // { x : 0 } x 의 값을 구하기 위해선 아무런 계산을 할 필요가 없기때문에 0을 대입하여 메모제이션에 기억한다.
  dp[x] = 0;
  let data = [x];
  while (data.length) {
    const newData = [];

    for (const d of data) {
      for (const el of [d + n, d * 2, d * 3]) {
        // y보다 크거나, 이미 계산한 경우
        if (el > y || dp[el]) continue;
        // 경우의 수를 찾았을 경우 현재까지 계산한 값 + 1을 하여 총 계산수를 반환
        if (el === y) return dp[d] + 1;

        // 메모제이션에 현재수까지 계산을 해온 횟수를 저장한다.
        dp[el] = dp[d] + 1;
        newData.push(el);
      }
    }

    data = newData;
  }

  return -1;
}

const rst1 = solution(10, 40, 5);
const rst2 = solution(10, 40, 30);
const rst3 = solution(2, 5, 4);

console.log("정답 : ", rst1, " - ", rst1 === 2);
console.log("정답 : ", rst2, " - ", rst2 === 1);
console.log("정답 : ", rst3, " - ", rst3 === -1);
