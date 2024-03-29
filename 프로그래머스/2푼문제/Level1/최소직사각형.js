/*
▒ 한줄 개념: 가로 최댓값 * 세로 최댓값 ▒ 
실제 손에 명함들이 있고, 얘네를 정리해서 최소 크기를 계산한다고 생각하고 시뮬레이션해보면 손쉽게 풀 수 있습니다.

모든 명함은 가로 세로로 구성되어있습니다.
이 명함들을 다 넣을 수 있는 최소 크기를 구해야합니다.
이를 위해, 무조건 가로 값이 크도록 명함을 재배열해줍니다.
예를 들어, 10 * 20의 명함 사이즈라면, 20 * 10으로 뒤집어 주는 것입니다. 

이와 같이 모든 명함들을 가로가 길고, 세로가 짧은 방향으로 놔두고, 이 상태에서 가로의 최댓값과 세로의 최댓값을 구해 곱하면, 이것이 바로 정답이 됩니다.
*/
const test = (sizes) => {
  // 최대 가로값 구하기
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];

  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });

  return maxSize[0] * maxSize[1];
};

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
test(sizes);
