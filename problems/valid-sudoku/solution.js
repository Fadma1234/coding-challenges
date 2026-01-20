/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // Check rows
    for (let row = 0; row < 9; row++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === '.') continue;
            if (seen.has(board[row][i])) return false;
            seen.add(board[row][i]);
        }
    }

    // Check columns
    for (let col = 0; col < 9; col++) {
        let seen = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === '.') continue;
            if (seen.has(board[i][col])) return false;
            seen.add(board[i][col]);
        }
    }

    // Check 3x3 sub-boxes
    for (let square = 0; square < 9; square++) {
        let seen = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let row = Math.floor(square / 3) * 3 + i;
                let col = (square % 3) * 3 + j;
                if (board[row][col] === '.') continue;
                if (seen.has(board[row][col])) return false;
                seen.add(board[row][col]);
            }
        }
    }

    return true;
};

module.exports = isValidSudoku;
