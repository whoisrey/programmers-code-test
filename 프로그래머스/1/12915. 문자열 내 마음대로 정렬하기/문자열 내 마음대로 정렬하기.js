function solution(strings, n) {
    let nArr = [];
    for(let i = 0; i < strings.length; i++){
        nArr.push(strings[i][n])
    }
    let newArr = [...new Set(nArr.sort())]
    let newStrings = strings.sort()
    let answer = [];
    for(let i = 0; i < newArr.length; i++){
        for(let j = 0; j < newStrings.length; j++){
            if(newArr[i] === newStrings[j][n]){
            answer.push(newStrings[j])
            }
        }
    }
    return answer
}