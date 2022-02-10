function solution(nums) {
  let answer = 0;
  let numsSize = nums.length;

  const isPrime_1 = (num) => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPrime_2 = (num) => {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPrime_3 = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPrime_4 = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < numsSize; i++) {
    for (let y = i + 1; y < numsSize; y++) {
      for (let z = y + 1; z < numsSize; z++) {
        let sum = nums[i] + nums[y] + nums[z];
        if (isPrime_3(sum)) {
          answer++;
        }
      }
    }
  }

  return answer;
}

// Test Case
/*
nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.
*/
let number_1_1000_arr = [];
for (let i = 1; i < 1001; i++) {
  number_1_1000_arr.push(i);
}

const testCaseReg = (totalIndex) => {
  let randomNumArr = [];
  for (let i = 0; i < totalIndex; i++) {
    let randomNum = Math.floor(Math.random() * 1000 + 1);
    if (randomNumArr.indexOf(randomNum) === -1) {
      randomNumArr.push(randomNum);
    } else {
      i--;
    }
  }
  return randomNumArr;
};

for (let i = 0; i < 20; i++) {
  let testCase = testCaseReg(i);
  let output = solution(testCase);
  console.log(output);
}
