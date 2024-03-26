function solution(array) {
    const arr = [...new Set(array)]
    let obj = {}
    for(let i of arr){
        obj[i] = 0;
        for(let j of array){
            if(i === j){
                obj[i] += 1
            }
        }
    }
    const values = Object.values(obj)
    const sort = Object.values(obj)
    const keys = Object.keys(obj).map((v) => Number(v))
    const maxValue = Math.max(...values)
    let sorted = sort.sort()
    return keys[values.lastIndexOf(maxValue)] !== keys[values.indexOf(maxValue)] ? -1 : keys[values.indexOf(maxValue)]
    // return sorted[sorted.length - 2] === sorted[sorted.length - 1] ? -1 : keys[values.indexOf(maxValue)]
    // 같은 것이 없을 때
    // return keys[values.indexOf(maxValue)]
}