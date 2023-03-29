// https://leetcode.cn/problems/count-sorted-vowel-strings/

const map = ['a', 'e', 'i', 'o', 'u']
var countVowelStrings = function(n) {
    const result = []
    let temp = []
    const mapLen = map.length

    function childStrings(first) {
        if (temp.length === n) {
            result.push(temp.join(''))
            return
        }
        for (let i = first; i < mapLen; ++i) {
            temp.push(map[i])
            childStrings(i)
            temp.pop()
        }
    }

    childStrings(0)
    
    return result.length
};

console.log(countVowelStrings(1))