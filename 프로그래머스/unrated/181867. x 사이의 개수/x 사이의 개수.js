function solution(myString) {
    let array = myString.split('x')
    let answer = []
    for(let i = 0; i < array.length; i++){
        answer.push(array[i].length)
    }
    return answer
}