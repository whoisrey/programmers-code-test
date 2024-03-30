function solution(lines) {
    const line = []
    for(let i of lines){
        for(let j = i[0]; j < i[1]; j++){
            line.push(j)
        }
    }
    const equal = line.sort((a, b) => a - b)
    const answer = []
    for(let i = 0; i < equal.length; i++){
        if(equal[i] === equal[i + 1]){
            answer.push(equal[i])
        }
    }
    const set = [...new Set(answer)]
    const hap = [1];
    // for(let i = 0; i < set.length; i++){
    //     if(set[i] + 1 === set[i + 1]){
    //         hap.push(1)
    //     }
    // }
    return set.length === 0 ? 0 : set.length
    // return set
    // return hap.length === 0 ? 0 : hap.reduce((a, b) => a + b)
}

// 0 1 2
// -3 -2 -1
// -2 -1 0 1

// 0 1
// 2 3 4 5
// 3 4 5 6 7 8 9

// 0 1 2 3 4 5
// 3 4 5 6 7 8 9
// 1 2 3 4 5 6 7 8 9 10