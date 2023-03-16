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