// https://leetcode.cn/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    const row = board.length
    const col = board[0].length
    const wLen = word.length
    const vis = new Array({ length: row }).fill(false)
    for (let i = 0; i < row; ++i) {
        vis[i] = new Array({ length: row }).fill(false)
    }

    function check(i, j, word, k) {
        if (board[i][j] !== word[k]) {
            return false
        }
        if (k === wLen - 1) {
            return true
        }

        let result = false
        vis[i][j] = true
        for (const [dx, dy] of dir) {
            const newi = i + dx
            const newj = j + dy
            if (newi >= 0 && newi < row && newj >= 0 && newj < col && !vis[newi][newj]) {
                const flag = check(newi, newj, word, k + 1)
                if (flag) {
                    result = true
                    break
                }
            }
        }
        vis[i][j] = false
        return result
    }

    for (let i = 0; i < row; ++i) {
        for (let j = 0; j < col; ++j) {
            const flag = check(i, j, word, 0)
            if (flag) {
                return true
            }
        }
    }

    return false
};
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))