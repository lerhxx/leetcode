// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length
    if (len <= 2) {
        return len
    }

    let last = 2
    let p = 2

    while (p < len) {
        if (nums[last - 2] !== nums[p]) {
            nums[last] = nums[p]
            ++last
        }
        ++p
    }
    return last
};

console.log(removeDuplicates([1,1,1,2,2,3]))