function solution(left, right) {
    let range = []
    let yaksu = []
    let length = []
    let answer = []
    for(let i = left; i <= right; i++){
        range.push(i)
        for(let j = 0; j <= i; j++){
            if(i % j === 0){
                yaksu.push(j)
            }
        }
        length.push(yaksu.length)
    }
    for(let k = 0; k < length.length; k++){
        if(k === 0){
            if(length[k] % 2 === 0){
                answer.push(range[k])
            } else {
                answer.push(- range[k])
            }
        } else {
            if((length[k] - length[k - 1]) % 2 === 0){
                answer.push(range[k])
            } else {
                answer.push(- range[k])
            }
        }
    }
    return answer.reduce((a, b) => a + b)
}