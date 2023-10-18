function solution(array) {
    let ans = []
    let answer = array.join('').split('').map((v) => v === "7")
    for(let i = 0; i < 100; i++){
        if(answer[i] === true){
            ans.push(answer[i])
        }
    }
    return ans.length
}