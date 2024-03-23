function solution(score) {
    const index = [];
    const average = []
    const sorted = []
    for(let i of score){
        average.push(i.reduce((a, b) => a + b) / 2)
        sorted.push(i.reduce((a, b) => a + b) / 2)
    }
    sorted.sort((a, b) => b - a)
    const obj = {}
    const equal = []
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] === sorted[i + 1]){
            equal.push(sorted[i])
        }
    }
    for(let i = 0; i < sorted.length; i++){
        obj[sorted[i]] = i + 1
        for(let j = 0; j < equal.length; j++){
            if(sorted[i] === equal[j]){
                obj[sorted[i]]--
            }
        }
    }
    for(let i = 0; i < average.length; i++){
        index.push(obj[String(average[i])])
    }
    return index
}