// 解題思路：若該位數加一後為十，則向前 (左) 進位，若已是最左邊的位置時，則 unshift 新增一位數
var plusOne = function (digits) {
  // plus one
  digits[digits.length - 1] += 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 10) {
      digits[i] = 0;

      if (i > 0) digits[i - 1] += 1;
      else digits.unshift(1);
    }
  }

  return digits;
};

// LeetCode solution
//   Approach 1: Schoolbook Addition with Carry：基本概念同上面的解題思路

module.exports = {
  title: "Plus One",
  difficulty: "Easy",
  related_topics: { Array: true },
  similar_questions: { 43: true, 67: true, 369: true, 989: true },
};
