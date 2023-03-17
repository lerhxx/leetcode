// https://leetcode.cn/problems/restore-ip-addresses/

var restoreIpAddresses = function(s) {
    const count = 4
    const temp = []
    const ips = []
    function dfs (s, index, start) {
        if (index === count) {
            if (start === s.length) {
                ips.push(temp.join('.'))
            }
            return
        }

        if (start === s.length) {
            return
        }
        // 不能有前导0，当数字为 0 时，地址只能为 0
        if (s[start] === '0') {
            console.log('s[start]', s[start] === '0')
            temp[index] = 0
            dfs(s, index + 1, start + 1)
        }

        let ip = 0
        for (let end = start; end < s.length; ++end) {
            ip = ip * 10 + s[end] * 1
            if (ip >= 1 && ip <= 255) {
                temp[index] = ip
                dfs(s, index + 1, end + 1)
            } else {
                break
            }
        }
    }

    dfs(s, 0, 0)
    return ips
};

console.log(restoreIpAddresses("0000"))