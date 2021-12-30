const findItemInSortedArr = (item, arr, from) => {
  console.log('item : ', item);
  console.log('arr : ', arr);
  console.log('from : ', from);
  console.log('=========================================');
  for (let i = from; i < arr.length; i++) {
    console.log('for item : ', item);
    console.log(`for arr[${i}] : `, arr[i]);
    if (item === arr[i]) return i;
    else if (item < arr[i]) return -1; // 불필요한 반복문 이스케이프
  }
  return -1;
};

const isSubsetOf = function (base, sample) {
  /*
    각 배열을 정렬: O(N * logN), O(M * logM)
    N >= M 이므로 (O * logN)
  */
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  console.log('base : ', base);
  console.log('sample : ', sample);
  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    console.log('baseIdx : ', baseIdx);
    if (baseIdx === -1) return false;
  }

  return true;
};

let base = [1, 2, 3, 4, 5];
let sample = [1, 3];
let output = isSubsetOf(base, sample);
console.log(output); // --> true

sample = [6, 7];
output = isSubsetOf(base, sample);
console.log(output); // --> false

base = [10, 99, 123, 7];
sample = [11, 100, 99, 123];
output = isSubsetOf(base, sample);
console.log(output); // --> false
