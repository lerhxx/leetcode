function allSort(arr) {
    const result = []
    let pre = []
    const len = arr.length
    const sort = (list, first) => {
        if (first >= len) {
            return result.push([...pre])
        }
        const current = list[first]
        for (let i = 0; i < current.length; ++i) {
            pre.push(current[i])
            sort(list, first + 1)
            pre.pop()
        }
    }
    sort(arr, 0)
    return result
}

console.log(transform([
    { id:3, parent:2 },
    { id:1, parent:null },
    { id:2, parent:1 }
]))

function transform (arr, pid = 0) {
    const temp = {}
    let tree = {}
    arr.forEach(item => {
        temp[item.id] = {
            ...item,
            children: []
        }
    })

    for (let id in temp) {
        const item = temp[id]
        const curId = item.parent || 0
        console.log('temp[curId]', temp, curId)
        if (curId === pid) {
            tree = item
        } else {
            temp[curId].children.push(item)
        }
    }

    return tree
}

// function Modal({visible, children, onConfirm, onClose}) {
//     return visible ? (
//         <div className="modal-container">
//             <div className="mask" onClick={onClose}></div>
//             <div className="modal-content">
//             {
//                 children ? children : (
//                     <button onClick={onConfirm}>confirm</button>
//                 )
//             }
//             </div>
//         </div>
//     ) : null
// }