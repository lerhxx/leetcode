// https://leetcode.cn/problems/longest-subsequence-with-limited-sum/

var answerQueries = function(nums, queries) {
    nums.sort((a, b) => a - b)
    const sum = [nums[0]]
    const answer = []
    for (let i = 1; i < nums.length; ++i) {
        sum[i] = sum[i - 1] + nums[i]
    }
    for (let i = 0; i < queries.length; ++i) {
        const index = binarySearch(sum, queries[i])
        answer.push(index)
    }
    return answer
};

function binarySearch(arr, target) {
    let low = 0
    let hight = arr.length - 1
    while (low <= hight) {
        const mid = ~~((low + hight) / 2)
        if (arr[mid] > target) {
            hight = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low
}

console.log(answerQueries([4,5,2,1], [3,10,21]))