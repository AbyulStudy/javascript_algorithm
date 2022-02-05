function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

let participant = ['leo', 'kiki', 'eden'];
let completion = ['eden', 'kiki'];
let output = solution(participant, completion);
// console.log('output : ', output);

// participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
// completion = ['josipa', 'filipa', 'marina', 'nikola'];
// output = solution(participant, completion);
// console.log('output : ', output);

participant = ['mislav', 'stanko', 'mislav', 'ana'];
completion = ['stanko', 'ana', 'mislav'];
output = solution(participant, completion);
console.log('output : ', output);
