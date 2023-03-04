// https://leetcode.cn/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = []
    const arr = Array.from(nums)
    backtrack(nums.length, arr, result, 0)
    return result
};

function backtrack(n, output, res, first) {
    if (first === n) {
        return res.push(Array.from(output))
    }
    for (let i = first; i < n; ++i) {
        swap(output, first, i)
        backtrack(n, output, res, first + 1)
        swap(output, i, first)
    }
}

console.log(permute([1,2,3]))