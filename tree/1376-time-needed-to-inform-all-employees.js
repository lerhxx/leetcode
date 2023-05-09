// https://leetcode.cn/problems/time-needed-to-inform-all-employees/

var numOfMinutes = function(n, headID, manager, informTime) {
    const g = new Map()
    for (let i = 0; i < n; ++i) {
        if (!g.has(manager[i])) {
            g.set(manager[i], [])
        }
        g.get(manager[i]).push(i)
    }

    let max = 0
    const queue = [[headID, 0]]

    while (queue.length) {
        const node = queue.shift()
        const curId = node[0]
        const time = node[1]
        if (!g.has(curId)) {
            max = Math.max(max, time)
        } else {
            for (let childId of g.get(curId)) {
                queue.push([childId, time + informTime[curId]])
            }
        }
    }
    return max
};

console.log(numOfMinutes(7, 6, [1,2,3,4,5,6,-1], [0,6,5,4,3,2,1]))