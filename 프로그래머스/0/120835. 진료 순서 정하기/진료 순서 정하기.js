function solution(emergency) {
    let array = [...emergency]
    let index = emergency.sort((a, b) => b - a)
    let answer = []
    for(let i = 0; i < index.length; i++){
        answer.push(index.indexOf(array[i]) + 1)
    }
    return answer
}