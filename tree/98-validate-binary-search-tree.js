// https://leetcode.cn/problems/validate-binary-search-tree

var isValidBST = function(root) {
    return match(root, -Infinity, Infinity)
};

function match(root, min, max) {
    if (root === null) {
        return true
    }

    if (root.val <= min || root.val >= max) {
        return false
    }

    return match(root.left, min, root.val) && match(root.right, root.val, max)
}

const tree = createTree([5,4,6,null,null,3,7], 0)
console.log(isValidBST(tree))