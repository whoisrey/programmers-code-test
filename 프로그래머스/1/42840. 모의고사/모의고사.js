function solution(answers) {
    let oneScore = 0;
    let twoScore = 0;
    let threeScore = 0;
    const oneSupo = [1, 2, 3, 4 ,5]
    const twoSupo = [2, 1, 2, 3, 2, 4, 2, 5]
    const threeSupo = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    
    oneScore = answers.filter((answer, i) => answer === oneSupo[i % oneSupo.length]).length
    twoScore = answers.filter((answer, i) => answer === twoSupo[i % twoSupo.length]).length
    threeScore = answers.filter((answer, i) => answer === threeSupo[i % threeSupo.length]).length
    
    let answer = []
    let maxScore = Math.max(oneScore, twoScore, threeScore)
    if(maxScore === oneScore){
        answer.push(1)
    } 
    if(maxScore === twoScore){
        answer.push(2)
    } 
    if(maxScore === threeScore){
        answer.push(3)
    }
    return answer
}