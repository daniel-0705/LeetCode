// 解題思路：因題目說該陣列會只缺一個數字，且範圍又一定是從 0 ~ n，因此想到若將該陣列加總後減去每個元素的值，則剩下的則為缺少的元數
var missingNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    // i+1 代表每個數字，加總後為理應陣列的數值總和
    // 扣掉 nums[i]，最後會剩缺少的該元素數值
    result += i + 1 - nums[i];
  }

  return result;
};

// LeetCode solution
//   Approach #1 Sorting [Accepted]：先排序，若前後兩的數字差距大於 1 時，則答案為前者數字加一，但因排序的時間複雜度為 O(n log n)，不符合題目要求
//   Approach #2 HashSet [Accepted]：先迴圈一次，將該陣列每著數字放入 Set 中，再迴圈一次，從 0 開始到該陣列的長度，逐一確認每個數字是否都在 Set 中，若無則為缺少的目標元素。但因空間的複雜度為 O(n)，不符合題目要求
//   Approach #3 Bit Manipulation [Accepted]：利用 XOR 這種互斥的邏輯 (^) 來做運算，若正常情況下，index 的數值與該陣列的值，理應兩兩成對，利用這種特性使用 ^ 運算的話，成對運算後會變成 0，剩下的非成對的數值即為缺少的元素數值。
//   Approach #4 Gauss' Formula [Accepted]：高斯求和的公式，如同上面的解題思路。

module.exports = {
  title: "Missing Number",
  difficulty: "easy",
  related_topics: { Array: true, Math: true, "Bit Manipulation": true },
  similar_questions: { 41: true, 136: true, 287: true, 765: true },
};
