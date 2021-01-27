// 解題思路：讓 i 不斷乘以 2，直到超過 n 為止，若過程中 i 等於 n 的話，則 true
var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  let i = 1;
  while (n >= i) {
    if (n === i) return true;
    i *= 2;
  }

  return false;
};

// bitwise operators: &
// 解說：https://leetcode.com/problems/power-of-two/discuss/369024/100-fastest-0ms-one-line-solution-with-explanation-binary-trick
var isPowerOfTwo = (n) => {
  // 若為 2 的某次方，則 n & (n - 1) 會為 0;
  return n > 0 ? !(n & (n - 1)) : false;
};

module.exports = {
  no: 231,
  title: "Power of Two",
  difficulty: "easy",
  related_topics: { Math: true, "Bit Manipulation": true },
  similar_questions: { 191: true, 326: true, 342: true },
};
