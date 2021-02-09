// 解題思路：直排跟橫排的邏輯不難，難的是如何在雙層迴圈中，可以依序檢查每個九宮格，九宮格的部分想的很久，基本上就是要想辦法找出他的規律
//          思考過程可以參考這篇：https://leetcode.com/problems/valid-sudoku/discuss/476369/Javascript-Solution-(beats-100)-with-explanation-(real-explanations)
var isValidSudoku = function (board) {
  for (let i = 0; i < board.length; i++) {
    const rowMap = {};
    const columnMap = {};
    const blockMap = {};

    for (let j = 0; j < board.length; j++) {
      // 檢查橫排
      if (board[i][j] !== ".") {
        if (rowMap[board[i][j]]) return false;
        if (!rowMap[board[i][j]]) rowMap[board[i][j]] = 1;
      }

      // 檢查直排
      if (board[j][i] !== ".") {
        if (columnMap[board[j][i]]) return false;
        if (!columnMap[board[j][i]]) columnMap[board[j][i]] = 1;
      }

      // 檢查九宮格
      const xIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const yIndex = (i % 3) * 3 + (j % 3);
      if (board[xIndex][yIndex] !== ".") {
        if (blockMap[board[xIndex][yIndex]]) return false;
        if (!blockMap[board[xIndex][yIndex]])
          blockMap[board[xIndex][yIndex]] = 1;
      }
    }
  }

  return true;
};

// LeetCode solution
//   Approach 1: One iteration：基本上該解法設了各九個直排橫排及九宮格的 Map 物件，因此在寫的時候會比上述一次達成的方式還要簡單一些

module.exports = {
  title: "Valid Sudoku",
  difficulty: "Medium",
  related_topics: { "Hash Table": true },
  similar_questions: { 37: true },
};
