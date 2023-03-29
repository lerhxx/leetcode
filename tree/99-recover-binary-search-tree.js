// https://leetcode.cn/problems/recover-binary-search-tree/

function recoverTree(root) {
    const stack = []
    let pre = null
    let x = null
    let y = null
    while (stack.length || root !== null) {
        while (root !== null) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if (pre !== null && root.val < pre.val) {
            y = root
            if (x === null) {
                x = pre
            } else {
                break
            }
        }
        pre = root
        root = root.right
    }
    swap(x, y)
    return root
}

function swap(x, y) {
    const temp = x.val
    x.val = y.val
    y.val = temp
}

console.log(recoverTree(createTree([1,3,null,null,2])))