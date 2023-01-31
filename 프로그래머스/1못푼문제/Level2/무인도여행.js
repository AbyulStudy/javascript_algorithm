function solution(maps) {
  var answer = [];

  const map = new Array();
  for (let row of maps) {
    map.push(row.split(""));
  }
  //   console.log(map);
  const visit = new Array(maps.length).fill(
    new Array(maps[0].length).fill(false)
  );
  const tmp = [];
  for (let row = 0; row < maps.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      let rst = areaSearch(map, visit, row, col);
      tmp.push(rst);
      if (rst > 0) answer.push(rst);
    }
  }
  console.log(tmp);
  return answer.length === 0 ? [-1] : answer;
}

const areaSearch = (map, visit, row, col) => {
  // map 내부 확인
  if (row < 0 || col < 0 || row === map.length || col === map[row].length)
    return 0;
  // 방문 여부 체크
  if (visit[row][col]) return 0;
  //바다/육지 체크
  if (map[row][col] === "X") return 0;

  // 방문 체크
  visit[row][col] = true;

  let rst = Number(map[row][col]);

  rst += areaSearch(map, visit, row + 1, col);
  rst += areaSearch(map, visit, row - 1, col);
  rst += areaSearch(map, visit, row, col + 1);
  rst += areaSearch(map, visit, row, col - 1);

  return rst;
};

const result = solution(["X591X", "X1X5X", "X231X", "1XXX1"]);
const answer = [1, 1, 27];
console.log(
  "정답 : ",
  result,
  " - ",
  JSON.stringify(answer) === JSON.stringify(result)
);
