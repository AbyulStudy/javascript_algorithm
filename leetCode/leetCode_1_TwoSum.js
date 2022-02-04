/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @BigO O(n^2)
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      let sum = nums[i] + nums[y];
      if (sum === target) return [i, y];
    }
  }
};

let nums, target;
nums = [2, 7, 11, 15];
target = 9;
let output = twoSum(nums, target);
console.log('output_1 : ', output);
//////////////////////
nums = [3, 2, 4];
target = 6;
output = twoSum(nums, target);
console.log('output_2 : ', output);
// ///////////////////
nums = [3, 3];
target = 6;
output = twoSum(nums, target);
console.log('output_3 : ', output);
