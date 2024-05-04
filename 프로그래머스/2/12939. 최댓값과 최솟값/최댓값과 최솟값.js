function solution(s) {
    const answer = String(s).split(' ')
    const answerB = answer.map((v) => Number(v))
    const answerC = `${Math.min(...answerB)} ${Math.max(...answerB)}`
    return answerC
}