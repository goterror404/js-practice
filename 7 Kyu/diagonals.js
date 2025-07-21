// Task

// The longest diagonals of a square matrix are defined as follows:

// the first longest diagonal goes from the top left corner to the bottom right one;
// the second longest diagonal goes from the top right corner to the bottom left one.

// Given a square matrix, your task is to swap its longest diagonals
//  by exchanging their elements at the corresponding positions.


// matrix = [[1, 2, 3],    [3, 2, 1],
//           [4, 5, 6],    [4, 5, 6],
//           [7, 8, 9]]    [9, 8, 7],


function swapDiagonals(matrix) {

  let len = matrix.length; 

  for (let i = 0; i < len; i++) {


    let temp = matrix[i][i];
    matrix[i][i] = matrix[i][len - 1 - i];
    matrix[i][len - 1 - i] = temp;
  }

  return matrix; 
}
    let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log(swapDiagonals(arr))
