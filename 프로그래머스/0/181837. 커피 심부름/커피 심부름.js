function solution(order) {
    let answer = 0;
    for(let i of order){
        if(i.includes("americano") || i === "anything"){
            answer += 4500
        } else {
            answer += 5000
        }
    }
    return answer
}