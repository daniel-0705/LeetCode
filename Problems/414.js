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

// LeetCode solution
//   Approach 1: Use a Set and Delete Maximums：迴圈，將每個元素使用 Set 結構儲存，並分別刪除兩次最大數字後，剩下的最大數字則為第三大數字
//   Approach 2: Seen-Maximums Set：類似第一個方法，但不選擇用刪除的方式，迴圈三次，每次分別儲存該陣列最大的數字到 Set 結構中，若最大數字已存取時，則換次大的數字儲存，依此類推。
//                                  因迴圈只會執行三次，理論上第三次時會儲存第三大的數字到 Set 中，因此只要回傳該 Set 中最小的數字即可
//   Approach 3: Keep Track of 3 Maximums Using a Set：使用 Set 結構儲存三個數字，迴圈時，有比 Set 裡的數字大時，剔除最小的，Set 結構始終維持三個數字，最後只要回傳裡面最小的數字即可

module.exports = {
  title: "Third Maximum Number",
  difficulty: "Easy",
  related_topics: { Array: true },
  similar_questions: { 215: true },
};
