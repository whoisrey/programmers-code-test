function solution(array, n) {
    let rightArray = array.sort((a, b) => a - b)
    let answer = []
    for(let i = 0; i < rightArray.length; i++){
        answer.push(Math.abs(rightArray[i] - n))
    }
    let minValue = answer[0]
    let minIndex = 0
    for(let j = 0; j < answer.length; j++){
        if(answer[j] < minValue){
            minValue = answer[j]
            minIndex = j
        }
    }
    return rightArray[minIndex]
}