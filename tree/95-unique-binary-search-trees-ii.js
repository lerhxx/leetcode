// https://leetcode.cn/problems/unique-binary-search-trees-ii/

var generateTrees = function(n) {
    return generateChildTrees(1, n)
};

function generateChildTrees(start, end) {
    const all = []
    if (start > end) {
        all.push(null)
        return all
    }

    for (let i = start; i <= end; ++i) {
        const leftTree = generateChildTrees(start, i - 1)
        const rightTree = generateChildTrees(i + 1, end)

        for (let n = 0; n < leftTree.length; ++n) {
            for (let j = 0; j < rightTree.length; ++j) {
                const current = new TreeNode(i)
                current.left = leftTree[n]
                current.right = rightTree[j]
                all.push(current)
            }
        }
    }
    return all
}

console.log(generateTrees(3))