function solution(spell, dic) {
    let spellString = spell.sort().join('')
    let answer = [];
    for(let i of dic){
        i.split('').sort().join('') === spellString ? answer.push(1) : answer.push(0)
    }
    return answer.includes(1) ? 1 : 2
}