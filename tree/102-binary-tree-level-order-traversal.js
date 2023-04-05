// https://leetcode.cn/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if (!root) {
        return []
    }
    const result = []
    const stacks = [root]
    while (stacks.length) {
        const len = stacks.length
        const res = []
        // 每次 while 遍历，取出第 k 层所有结点
        for (let i = 0; i < len; ++i) {
            const node = stacks.shift()
            res.push(node.val)
            if (node.left) stacks.push(node.left)
            if (node.right) stacks.push(node.right)
        }
        result.push(res)
    }
    return result
};

console.log(levelOrder(createTree([3,9,20,null,null,15,7])))