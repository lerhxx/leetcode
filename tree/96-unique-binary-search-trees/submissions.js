// https://leetcode.cn/problems/unique-binary-search-trees/

var numTrees = function(n) {
    const G = new Array(n + 1).fill(0)
    G[0] = 1
    G[1] = 0
    // 不同的二叉搜索树总树 G[i] 是遍历所有以 j(1 <= j <= i) 为根节点的二叉搜索树的和
    for (let i = 0; i <= n; ++i) {
        // 数字 j 作为根节点，根植不同保证每颗二叉树的唯一性
        for (let j = 1; j <= i; ++j) {
            // 1...j-1 为左子树，j+1...i 为右子树
            G[i] += G[j - 1] * G[i - j]
        }
    }
    return G[n]
};