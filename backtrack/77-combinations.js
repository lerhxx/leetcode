// https://leetcode.cn/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []
    backtrack(n, k, result, [], 1)
    return result
};

function backtrack(n, k, res, output, first) {
    if (output.length === k) {
        return res.push(Array.from(output))
    }
    for (let i = first; i <= n; ++i) {
        output.push(i)
        backtrack(n, k, res, output, i + 1)
        output.pop()
    }
}

console.log(combine(4, 2))