// https://leetcode.cn/problems/number-of-common-factors/

var commonFactors = function(a, b) {
    let count = 0
    for (let i = 0; i <= Math.min(a, b); ++i) {
        if (a % i === 0 && b % i === 0) {
            ++count
        }
    }
    return count
};