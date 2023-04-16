// https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/

var search = function(nums, target) {
    const len = nums.length
    let l = 0
    let r = len - 1
    
    while (l <= r) {
        const mid = ~~((l + r) / 2)
        if (nums[mid] === target) {
            return true
        }

        if (nums[l] === nums[mid] && nums[mid] === nums[r]) {
            ++l
            --r
        } else if (nums[l] <= nums[mid]) {
            if (nums[l] <= target && target < nums[mid]) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[r]) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
    }
    return false
};