// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return head
    }
    let l = new ListNode(0, head)
    let p = l
    while (p.next && p.next.next) {
        if (p.next.val === p.next.next.val) {
            const x = p.next.val
            while (p.next && p.next.val === x) {
                p.next = p.next.next
            }
        } else {
            p = p.next
        }
    }
    return l.next
};

console.log(deleteDuplicates(createListNode([1,2,3,3,4,4,5])))