// https://leetcode.cn/problems/previous-permutation-with-one-swap/


var prevPermOpt1 = function(arr) {
    let n = arr.length
    for (let i = n - 2; i >= 0; --i) {
        // 最大化 i，arr[i] > arr[i + 1]，后面的元素是 非递减的
        if (arr[i] > arr[i + 1]) {
            let j = n - 1
            // [i, n -1] 中取小于 arr[i] 的最大值
            while (arr[j] >= arr[i] || arr[j] == arr[j - 1]) {
                --j
            }
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            break
        }
    }
    return arr
};