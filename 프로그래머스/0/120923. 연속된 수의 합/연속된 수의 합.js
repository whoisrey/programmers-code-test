function solution(num, total) {
    // a a + 1 a + 2 = 3a + 3    
    // a a + 1 a + 2 a + 3 = 4a + 6
    // a a + 1 a + 2 a + 3 a + 4 = 5a + 10
    // a a + 1 a + 2 a + 3 a + 4 a + 5 = 6a + 15
    let sum = 0;
    for(let i = 1; i <= num; i++){
        sum += i
    }
    let first = (total - sum) / num + 1
    const answer = []
    for(let i = 0; i < num; i++){
        answer.push(first + i)
    }
    return answer
}