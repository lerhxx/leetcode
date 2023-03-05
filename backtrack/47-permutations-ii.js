// https://leetcode.cn/problems/permutations-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const sortNums = nums.sort((a, b) => a - b)
    const result = []
    const n = nums.length
    const vis = new Array(n).fill(false)
    function backtrack(index, pre) {
        if (index === n) {
            result.push(Array.from(pre))
        }
        for (let i = 0; i < n; ++i) {
            // 已访问的情况
            // 重复数字不选的情况
            if (vis[i] || (sortNums[i] === sortNums[i - 1] && !vis[i - 1])) {
                continue
            }
            pre.push(sortNums[i])
            vis[i] = true
            backtrack(index + 1, pre)
            vis[i] = false
            pre.pop()
        }
    } 
    backtrack(0, [])
    return result
};

console.log(permuteUnique([1, 1, 2]))