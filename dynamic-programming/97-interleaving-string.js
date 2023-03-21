// https://leetcode.cn/problems/interleaving-string/

var isInterleave = function(s1, s2, s3) {
    let len1 = s1.length
    let len2 = s2.length
    let len3 = s3.length
    if (len1 + len2 !== len3) {
        return false
    }
    const f = new Array(len1 + 1).fill([])
    for (let i = 0; i <= len1; ++i) {
        f[i] = new Array(len2 + 1).fill(false)
    }
    f[0][0] = true
    
    for (let i = 0; i <= len1; ++i) {
        for (let j = 0; j <= len2; ++j) {
            const p = i + j - 1
            if (i > 0) {
                f[i][j] = f[i][j] || f[i - 1][j] && (s1[i - 1] === s3[p])
            }

            if (j > 0) {
                f[i][j] = f[i][j] || f[i][j - 1] && (s2[j - 1] === s3[p])
            }
        }
    }
    return f[len1][len2]
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"))