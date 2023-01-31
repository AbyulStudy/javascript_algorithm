function solution(lottos, win_nums) {
  let intersection = lottos.filter((lotto) => win_nums.includes(lotto));

  let zerofilter = lottos.filter((lotto) => lotto === 0);
  let MIN = intersection.length;
  let MAX = intersection.length + zerofilter.length;

  let answer = [Math.min(7 - MAX, 6), Math.min(7 - MIN, 6)];
  return answer;
}
