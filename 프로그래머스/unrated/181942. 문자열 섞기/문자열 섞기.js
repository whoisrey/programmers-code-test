function solution(str1, str2) {
    let answer = []
    for(let i = 0; i < str1.length; i++){
        answer.push(str1[i])
        answer.push(str2[i])
    }
    return answer.join('')
}