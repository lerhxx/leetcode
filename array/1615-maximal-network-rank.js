// https://leetcode.cn/problems/maximal-network-rank/

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    const degree = new Array(n).fill(0)
    const connect = new Array(n).fill(0).map(() => new Array(n).fill(0))

    for (const r of roads) {
        connect[r[0]][r[1]] = true
        connect[r[1]][r[0]] = true
        ++degree[r[0]]
        ++degree[r[1]]
    }

    let max = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            const cur = degree[i] + degree[j] - (connect[i][j] ? 1 : 0)
            max = Math.max(max, cur)
        }
    }
    return max
};

console.log(maximalNetworkRank(4, [[0,1],[0,3],[1,2],[1,3]]))