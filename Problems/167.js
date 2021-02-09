// 解題思路：第一次解題時，以為跟 problem_1 一樣，用 One-pass Hash Table 的解法
var twoSum = function (nums, target) {
  const numsMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.hasOwnProperty(target - nums[i])) {
      return [numsMap[target - nums[i]], i];
    } else {
      numsMap[nums[i]] = i;
    }
  }
};

// 解題思路：後來發現可以利用 Two Pointers 的方式，左右夾擊，
//          若兩個 pointer 相加比目標數值小時，則左邊指標往右，
//          反之，則右邊指標往左。
var twoSum = function (nums, target) {
  let rightPointer = nums.length - 1;
  let leftPointer = 0;

  while (rightPointer > leftPointer) {
    if (nums[rightPointer] + nums[leftPointer] > target) {
      rightPointer -= 1;
    } else if (nums[rightPointer] + nums[leftPointer] < target) {
      leftPointer += 1;
    } else {
      return [leftPointer + 1, rightPointer + 1];
    }
  }
};

// LeetCode solution
//   Approach 1: Two Pointers：如同上面的解題思路

module.exports = {
  title: "Two Sum II - Input array is sorted",
  difficulty: "easy",
  related_topics: { Array: true, "Two Pointers": true, "Binary Search": true },
  similar_questions: { 1: true, 653: true, 1099: true },
};
