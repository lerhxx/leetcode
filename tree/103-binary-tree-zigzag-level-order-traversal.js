// https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/

var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    const result = []
    const queue = [root]
    let direction = false // false：从左到右，true：从右到左
    while (queue.length) {
        const nodes = []
        while (queue.length) {
            nodes.push(queue.shift())
        }
        direction = !direction

        const vals = []
        nodes.forEach(node => {
            vals.push(node.val)
            if (!direction) {
                node.right && queue.unshift(node.right)
                node.left && queue.unshift(node.left)
            } else {
                node.left && queue.unshift(node.left)
                node.right && queue.unshift(node.right)
            }
        })
        result.push(vals)
    }
    return result
};