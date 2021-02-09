// 解題思路：最一開始也是用 Naive Approach，但後來第二次寫的時候就試著用 String Concatenation 的方式了
var fizzBuzz = function (n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    let word = "";

    if (i % 3 === 0) word += "Fizz";
    if (i % 5 === 0) word += "Buzz";

    word ? result.push(word) : result.push(`${i}`);
  }

  return result;
};

// LeetCode solution
//   Approach 1: Naive Approach：若為 15 的倍數則為 'FizzBuzz'，若為 3 的倍數為 'Fizz'，若為 5 的倍數為 'Buzz'，就是把所有情況都列舉出來的意思
//   Approach 2: String Concatenation：利用字串相加的方式，好處是這樣只要專注在 3 跟 5 的倍數情況下，不用額外處理 15 的倍數情況，因為剛好等於 3 的倍數 加上 5 的倍數字串
//   Approach 3: Hash it!：將條件利用 key-value 的方式儲存，如 {3:'Fizz',5:'Buzz'}，若該數可被這些 key 整除時，則字串相加，有點類似第二個處理方法；雙迴圈的方式，外層為該陣列的迴圈，內層為物件的 key 迴圈

module.exports = {
  title: "Fizz Buzz",
  difficulty: "Easy",
  related_topics: null,
  similar_questions: { 1195: true },
};
