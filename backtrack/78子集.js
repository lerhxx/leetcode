/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [[]]
    backtrack(nums, result, nums.length, [], 0)
    return result
};

function backtrack(nums, res, n, arr, first) {
    if (first === n) {
        return
    }
    for (let i = first; i < n; ++i) {
        // 选择 nums[i]
        arr.push(nums[i])
        res.push(Array.from(arr))
        backtrack(nums, res, n, arr, i + 1)
        // 不选择 nums[i]
        arr.pop()
    }
}

console.log(subsets([1,2,3]))