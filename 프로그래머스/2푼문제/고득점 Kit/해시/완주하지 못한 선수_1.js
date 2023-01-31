// sort & loop 를 사용한 방법
/*
정확성  테스트
테스트 1 〉	통과 (0.05ms, 30.3MB)
테스트 2 〉	통과 (0.08ms, 30.2MB)
테스트 3 〉	통과 (0.30ms, 30.2MB)
테스트 4 〉	통과 (0.59ms, 30.5MB)
테스트 5 〉	통과 (0.62ms, 30.4MB)
효율성  테스트
테스트 1 〉	통과 (46.19ms, 41MB)
테스트 2 〉	통과 (77.15ms, 48.1MB)
테스트 3 〉	통과 (94.38ms, 52.5MB)
테스트 4 〉	통과 (95.84ms, 54.6MB)
테스트 5 〉	통과 (103.65ms, 53.4MB)
*/
// function solution(participant, completion) {
//   participant.sort();
//   completion.sort();
//   for (let i = 0; i < participant.length; i++) {
//     if (participant[i] !== completion[i]) return participant[i];
//   }
// }

// Map를 이용한 방법
/*
정확성  테스트
테스트 1 〉	통과 (0.12ms, 30.2MB)
테스트 2 〉	통과 (0.10ms, 30.4MB)
테스트 3 〉	통과 (0.45ms, 30.2MB)
테스트 4 〉	통과 (0.43ms, 30.2MB)
테스트 5 〉	통과 (0.36ms, 30.3MB)
효율성  테스트
테스트 1 〉	통과 (19.99ms, 45.6MB)
테스트 2 〉	통과 (35.49ms, 56.7MB)
테스트 3 〉	통과 (36.62ms, 60.1MB)
테스트 4 〉	통과 (41.05ms, 59.5MB)
테스트 5 〉	통과 (35.01ms, 59.6MB)
*/
// function solution(participant, completion) {
//   let answerMap = new Map();
//   participant.map((el) => {
//     if (answerMap.get(el)) answerMap.set(el, answerMap.get(el) + 1);
//     else answerMap.set(el, 1);
//   });

//   completion.map((el) => {
//     if (answerMap.get(el)) answerMap.set(el, answerMap.get(el) - 1);
//   });

//   for (let entry of answerMap) {
//     if (entry[1] >= 1) return entry[0];
//   }
// }

// 객체를 이용한 방법
/*
정확성  테스트
테스트 1 〉	통과 (0.11ms, 30.3MB)
테스트 2 〉	통과 (0.10ms, 30.3MB)
테스트 3 〉	통과 (0.45ms, 30.2MB)
테스트 4 〉	통과 (0.45ms, 30.2MB)
테스트 5 〉	통과 (0.55ms, 30.2MB)
효율성  테스트
테스트 1 〉	통과 (25.24ms, 48.1MB)
테스트 2 〉	통과 (38.33ms, 52.9MB)
테스트 3 〉	통과 (45.24ms, 56.9MB)
테스트 4 〉	통과 (70.64ms, 65.5MB)
테스트 5 〉	통과 (61.63ms, 65.8MB)
*/
// function solution(participant, completion) {
//   let obj = {};
//   participant.map((el) => {
//     if (obj[el]) obj[el] += 1;
//     else obj[el] = 1;
//   });

//   completion.map((el) => {
//     if (obj[el]) obj[el] -= 1;
//   });

//   for (let key in obj) {
//     if (obj[key] >= 1) return key;
//   }
// }

// 배열을 이용한 방법
/*
정확성  테스트
테스트 1 〉	통과 (0.24ms, 30.3MB)
테스트 2 〉	통과 (0.31ms, 30.3MB)
테스트 3 〉	통과 (0.47ms, 30.3MB)
테스트 4 〉	통과 (0.74ms, 30.2MB)
테스트 5 〉	통과 (0.54ms, 30.4MB)
효율성  테스트
테스트 1 〉	통과 (33.37ms, 48.1MB)
테스트 2 〉	통과 (46.15ms, 52.8MB)
테스트 3 〉	통과 (48.48ms, 56.2MB)
테스트 4 〉	통과 (75.87ms, 66.2MB)
테스트 5 〉	통과 (73.47ms, 66.6MB)
*/
function solution(participant, completion) {
  let arr = [];
  participant.map((el) => {
    if (arr[el]) arr[el] += 1;
    else arr[el] = 1;
  });

  completion.map((el) => {
    if (arr[el]) arr[el] -= 1;
  });

  for (let key in arr) {
    if (arr[key] >= 1) return key;
  }
}

let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];
let output = solution(participant, completion);
console.log('output : ', output);

// participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// completion = ['josipa', 'filipa', 'marina', 'nikola'];
// output = solution(participant, completion);
// console.log('output : ', output);

participant = ['mislav', 'stanko', 'mislav', 'ana', 'mislav'];
completion = ['stanko', 'ana', 'mislav', 'mislav'];
output = solution(participant, completion);
console.log('output : ', output);
