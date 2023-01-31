/**
 *
 * @param {*} n 병사
 * @param {*} k 무적권
 * @param {*} enemy 적
 * @returns 막은 최대 라운드 수
 */
function solution(n, k, enemy) {
  return ParametricSearch(n, k, enemy);
}

const ParametricSearch = (n, k, enemy) => {
  let soldier = n;
  let invincibility = k;

  let [left, right] = [0, enemy.length];
  let mid = Math.floor((left + right) / 2);
  const round = enemy.slice(0, mid).sort((a, b) => b - a);
  const remain = round.reduce((acc, val) => {
    console.log([acc, val]);
    if (invincibility > 0) {
      invincibility -= 1;
      return acc;
    } else {
      return acc + val;
    }
  }, 0);
  console.log(remain);
  //   while (left <= right) {

  //   }
};

const rst1 = solution(7, 3, [4, 2, 4, 5, 3, 3, 1]);
const ans1 = 5;
console.log("정답 : ", rst1, " - ", rst1 === ans1);
const rst2 = solution(2, 4, [3, 3, 3, 3]);
const ans2 = 4;
console.log("정답 : ", rst2, " - ", rst2 === ans2);
const rst3 = solution(10, 1, [2, 2, 2, 2, 10]);
const ans3 = 5;
console.log("정답 : ", rst3, " - ", rst3 === ans3);
const rst4 = solution(10, 1, [2, 2, 2, 2, 2, 10]);
const ans4 = 6;
console.log("정답 : ", rst4, " - ", rst4 === ans4);
const rst5 = solution(1, 6, [2, 2, 2, 2, 3, 3, 1]);
const ans5 = 7;
console.log("정답 : ", rst5, " - ", rst5 === ans5);
