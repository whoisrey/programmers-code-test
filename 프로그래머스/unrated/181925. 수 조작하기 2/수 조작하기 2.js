function solution(numLog) {
    let array = []
    for(let i = 0; i < numLog.length; i++){
        if(numLog[i - 1] + 1 === numLog[i]){
            array.push("w")
        }
        if(numLog[i - 1] - 1 === numLog[i]){
            array.push("s")
        }
        if(numLog[i - 1] + 10 === numLog[i]){
            array.push("d")
        }
        if(numLog[i - 1] - 10 === numLog[i]){
            array.push("a")
        }
    }
    return array.join('')
}