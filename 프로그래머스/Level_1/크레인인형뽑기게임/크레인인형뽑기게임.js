function solution(board, moves) {
  let answer = 0;
  let stack = [];

  for (let x of moves) {
    x -= 1;
    for (let y = 0; y < board.length; y++) {
      if (board[y][x] !== 0) {
        let tmp = board[y][x];
        board[y][x] = 0;
        if (stack[stack.length - 1] === tmp) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(tmp);
        }
        break;
      }
    }
  }

  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
