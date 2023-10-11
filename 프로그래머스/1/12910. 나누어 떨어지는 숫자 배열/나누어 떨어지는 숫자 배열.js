function solution(arr, divisor) {
    let answer = []
    let answerCopy = []
    let wrong = [-1]
    for(let i = 0; i < 9999999; i++){
        arr[i] % divisor === 0 ? answer.push(arr[i]) : arr
    }
    return answer.length === 0 ? wrong : answer.sort((a, b) => a - b)
        
}