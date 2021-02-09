// 解題思路：因為題目有限制要 O(n) 的時間複雜度及 O(1) 的空間複雜度，
//         不然原本是想用 for 迴圈，將每個元素放進物件中，當遇到第二次時，將該元素放進 result 的陣列中。
//         但題目的 1 ≤ a[i] ≤ n (n = size of array) 是關鍵，因為該元素的值不會超過該陣列本身的長度，
//         所以很適合以該元素的值當作 index，在原地 (in-place) 做標記，如正負號，代表做過標記。
var findDuplicates = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] < 0) result.push(index + 1);
    else nums[index] *= -1;
  }

  return result;
};

// LeetCode solution
//   Approach 1: Brute Force：雙迴圈暴力解法，但因時間複雜度為 O(n^2)，不符合題目要求
//   Approach 2: Sort and Compare Adjacent Elements：先排序後比較相鄰的元素是否相等，但因時間複雜度為 O(n log n)，不符合題目要求
//   Approach 3: Store Seen Elements in a Set / Map：這邊類似我一開始的想法，但因空間複雜度為 O(n)，不符合題目要求
//   Approach 4: Mark Visited Elements in the Input Array itself：對於拜訪過的元素做記號，類似本次解法的概念

module.exports = {
  title: "Find All Duplicates in an Array",
  difficulty: "Medium",
  related_topics: { Array: true },
  similar_questions: { 448: true },
};
