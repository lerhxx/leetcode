// https://leetcode.cn/problems/number-of-arithmetic-triplets/

var arithmeticTriplets = function(nums, diff) {
    let sum = 0
    const len = nums.length
    for (let i = 0; i < len; ++i) {
        if (nums.includes(nums[i] + diff) && nums.includes(nums[i] + 2 * diff)) {
            ++sum
        }
    }
    return sum
};

console.log(arithmeticTriplets([0,1,4,6,7,10], 3))