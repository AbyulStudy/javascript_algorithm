const binarySearch = function (arr, target) {
  // TODO : 여기에 코드를 작성합니다.
  let low = 0,
    high = arr.length - 1,
    mid;

  while (low <= high) {
    mid = Math.ceil((low + high) / 2);
    console.log('mid : ', mid);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    }
  }

  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1
