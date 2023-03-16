// https://leetcode.cn/problems/reverse-linked-list-ii/

var reverseBetween = function(head, left, right) {
    const dummy = new ListNode(0, head)
    let pre = dummy
    for (let i = 0; i < left - 1; ++i) {
        pre = pre.next
    }

    let leftNode = pre.next
    let rightNode = pre.next
    for (let i = left - 1; i < right - 1; ++i) {
        rightNode = rightNode.next
    }

    let cur = rightNode.next

    // 断开反转子链
    pre.next = null
    rightNode.next = null
    // 反转
    reverseList(leftNode)
    // 拼接
    pre.next = rightNode
    leftNode.next = cur
    return dummy.next
};

var reverseList = function(head) {
    let pre = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
};
const result = reverseBetween(createListNode([1, 2, 3, 4, 5]), 2, 4)
console.log(consoleListNode(result))