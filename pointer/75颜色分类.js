/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // 双指针
    let l = 0
    let r = nums.length - 1
    for (let i = 0; i <= r; ++i) {
        // 交换之后 nums[i] 可能为2
        while (nums[i] === 2 && i < r) {
            swap(nums, i, r)
            --r
        }
        // 交换之后 nums[i] 可能为0
        if (nums[i] === 0) {
            swap(nums, i, l)
            ++l
        }
        // 交换之后 nums[i] 可能为 1 不处理
    }
    return nums
};

function swap(arr, a, b) {
    arr[a] ^= arr[b]
    arr[b] ^= arr[a]
    arr[a] ^= arr[b]
}