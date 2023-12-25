function solution(my_string) {
    let answer = [my_string]
    let array = my_string.split('')
    for(let i = 0; i < my_string.length - 1; i++){
        array.shift()
        answer.push(array.join(''))
    }
    return answer.sort()
    // return array
    // return [...my_string].sort()
}