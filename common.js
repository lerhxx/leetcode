function swap(arr, a, b) {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createListNode(arr) {
    const head = new ListNode(arr[0])
    let p = head
    for (let i = 1; i < arr.length; ++i) {
        p.next = new ListNode(arr[i])
        p = p.next
    }
    return head
}

function consoleListNode(head) {
    let arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr.join(',')
}


function TreeNode(val, left, right) {
    this.val = val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
}

function createTree(arr, index = 0) {
    if (index >= arr.length) {
        return new TreeNode(null)
    }
    const root = new TreeNode(arr[index])
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    if (arr[leftIndex]) {
        root.left = createTree(arr, leftIndex)
    }
    if (arr[rightIndex]) {
        root.right = createTree(arr, rightIndex)
    }
    return root
}