// 解題思路：暴力解法，雙層迴圈
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};

// 解題思路：One-pass Hash Table
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

module.exports = {
  title: "Two Sum",
  difficulty: "easy",
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
