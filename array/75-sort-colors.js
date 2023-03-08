// https://leetcode.cn/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 双指针
    let l = 0
    let r = nums.length - 1
    for (let i = 0; i <= r; ++i) {
        // 交换之后 nums[i] 仍为2
        while (nums[i] === 2 && i < r) {
            swap(nums, i, r)
            --r
        }
        // 交换之后 nums[i] 为0
        if (nums[i] === 0) {
            swap(nums, i, l)
            ++l
        }
        // 交换之后 nums[i] 为 1 不处理
    }
    return nums
};

console.log(sortColors([2, 0, 1, 1]))