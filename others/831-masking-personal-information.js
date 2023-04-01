// https://leetcode.cn/problems/masking-personal-information/

const phonePre = [
    '***-***-',
    '+*-***-***-',
    '+**-***-***-',
    '+***-***-***-'
]
var maskPII = function(s) {
    const isEmail = s.includes('@')
    let result = ''
    if (isEmail) {
        const [name, host] = s.toLocaleLowerCase().split('@')
        result = `${name[0]}*****${name[name.length - 1]}@${host}`
    } else {
        const nums = s.replaceAll(/[+-/\s\(\)]/g, '')
        const len = nums.length
        const countryLen = len - 10
        const lastNums = nums.substr(len - 4)
        result = phonePre[countryLen] + lastNums
    }
    return result
};