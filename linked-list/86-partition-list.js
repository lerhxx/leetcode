// https://leetcode.cn/problems/partition-list/

var partition = function(head, x) {
    if (!head) {
        return head
    }
    let dummy = new ListNode(0, head)
    let smallTail = dummy
    let cur = dummy
    while (cur && cur.next) {
        if (cur.next.val < x) {
            // < x 和 >= x 的第一个分界点
            if (smallTail === cur) {
                smallTail = smallTail.next
                cur = cur.next
            } else {
                // < x 的节点在分界点插入
                const temp = cur.next
                cur.next = cur.next.next
                temp.next = smallTail.next
                smallTail.next = temp
                smallTail = smallTail.next
            }
        } else {
            cur = cur.next
        }
    }
    return dummy.next
};

console.log(partition(createListNode([1,4,3,0,2,5,2]), 3))