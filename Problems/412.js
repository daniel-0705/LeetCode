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

module.exports = {
  title: "Fizz Buzz",
  difficulty: "easy",
  related_topics: null,
  similar_questions: { 1195: true },
};
