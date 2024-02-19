function solution(array, commands) {
    let arr = []
    let answer = []
    let index = []
    for(let i of commands){
        arr.push(array.slice(i[0] - 1, i[1]))
        index.push(i[2])
    }
    arr.forEach((v) => v.sort((a, b) => a - b))
    for(let i = 0; i < index.length; i++){
        answer.push(arr[i][index[i] - 1])
    }
    return answer
}