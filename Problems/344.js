// 解題思路：頭尾兩兩交換至該字串的中間長度時停止
var reverseString = function (s) {
  const halfLength = Math.floor(s.length / 2);

  for (let i = 0; i < halfLength; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }

  return s;
};

// LeetCode solution
//   Approach 1: Recursion, In-Place, O(N) Space：利用遞迴的方式，設左右兩邊的 pointer，交換完時兩邊的 pointer 各往中間靠一格，當左邊的 pointer 大於等於右邊時，則為停止條件，但因遞迴的關係需保持每次遞迴的 stack，因此空間複雜度為 O(n)，不符合題目要求
//   Approach 2: Two Pointers, Iteration, O(1) Space：同方法一，只是利用迴圈的方式來達成

module.exports = {
  title: "Reverse String",
  difficulty: "easy",
  related_topics: { "Two Pointers": true, String: true },
  similar_questions: { 345: true, 541: true },
};
