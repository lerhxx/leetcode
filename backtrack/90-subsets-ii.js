var subsetsWithDup = function(nums) {
    const vis = nums.map(n => false)
    const result = [[]]
    
    nums.sort((a, b) => a - b)
    function sub(pre, first) {
        for (let i = first; i < nums.length; ++i) {
            if (vis[i] || (nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue
            }
            pre.push(nums[i])
            result.push(Array.from(pre))
            vis[i] = true
            sub(pre, i + 1)
            pre.pop(nums[i])
            vis[i] = false
        }
    }

    sub([], 0)
    return result
};

console.log(subsetsWithDup([1,2,3]))