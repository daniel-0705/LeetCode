// 解題思路：最直覺的想法就是設三個變數，然後一一比大小。
var thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === firstMax || nums[i] === secondMax || nums[i] === thirdMax)
      continue;

    if (nums[i] > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = nums[i];
    } else if (nums[i] > secondMax) {
      thirdMax = secondMax;
      secondMax = nums[i];
    } else if (nums[i] > thirdMax) {
      thirdMax = nums[i];
    }
  }

  return thirdMax === -Infinity ? firstMax : thirdMax;
};

module.exports = {
  title: "Third Maximum Number",
  difficulty: "easy",
  related_topics: { Array: true },
  similar_questions: { 215: true },
};
