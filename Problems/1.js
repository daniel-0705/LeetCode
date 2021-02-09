// 解題思路：暴力解法，雙層迴圈
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 解題思路：為 LeetCode solution 的第三個方法
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

// LeetCode solution
//   Approach 1: Brute Force：雙迴圈暴力解法
//   Approach 2: Two-pass Hash Table：第一次迴圈，先將每個元素記錄在物件中，第二次迴圈再找該元素的互補數是否存在
//   Approach 3: One-pass Hash Table：優化第二個方法，在一次迴圈中，先找有無該元素的互補數是否存在，若無就記錄元素於物件中

module.exports = {
  title: "Two Sum",
  difficulty: "Easy",
  related_topics: { Array: true, "Hash Table": true },
  similar_questions: {
    167: true,
    170: true,
    560: true,
    653: true,
    1099: true,
    1679: true,
    1711: true,
  },
};
