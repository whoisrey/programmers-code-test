function solution(quiz) {
    let answer = [];
    for(let i of quiz){
        let wow = i.split(' ')
        if(wow[1] === "+"){
            Number(wow[0]) + Number(wow[2]) === Number(wow[4]) ? answer.push("O") : answer.push("X")   
        } else if(wow[1] === "-"){
            Number(wow[0]) - Number(wow[2]) === Number(wow[4]) ? answer.push("O") : answer.push("X")            
        }
    }
    return answer
}