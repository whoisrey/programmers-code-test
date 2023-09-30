function solution(array) {
    let answer =[]
    answer[0] = Math.max(...array)
    answer[1] = array.indexOf(Math.max(...array))
    return answer
}