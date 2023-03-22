// https://leetcode.cn/problems/best-team-with-no-conflicts/

var bestTeamScore = function(scores, ages) {
    const n = scores.length
    const people = new Array(n)
    for (let i = 0; i < n ; ++i) {
        people[i] = [scores[i], ages[i]]
    }

    people.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    const dp = new Array(n).fill(0)
    let result = 0

    for (let i = 0; i < n; ++i) {
        for (let j = i - 1; j >= 0; --j) {
            if (people[i][1] >= people[j][1]) {
                dp[i] = Math.max(dp[i], dp[j])
            }
        }
        dp[i] += people[i][0]
        result = Math.max(result, dp[i])
    }
    return result
};