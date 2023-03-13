// https://leetcode.cn/problems/minimum-hours-of-training-to-win-a-competition/

var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
    let needExperience = 0

    let sumEnergy = energy.reduce((sum, e) => sum + e, 0)
    // 精力 >= 所有对手精力和 + 1
    let hours = sumEnergy < initialEnergy ? 0 : sumEnergy - initialEnergy + 1

    for (let i = 0; i < energy.length; ++i) {
        if (initialExperience > experience[i]) {
            initialExperience += experience[i]
        } else {
            // 训练 needExperience 小时后，经验 >= 对手 i 的经验 + 1
            needExperience += experience[i] - initialExperience + 1
            initialExperience = 2 * experience[i] + 1
        }
    }

    if (needExperience > -1) {
        hours += needExperience
    }

    return hours
};