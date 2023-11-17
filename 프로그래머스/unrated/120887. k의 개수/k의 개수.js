function solution(i, j, k) {
    let array = []
    for(let x = i; x <= j; x++){
        if(String(x).split('').includes(String(k))){ 
            array.push(String(x))
        }
    }
    let answer = array.join('')
    let answer2 = []
    for(let y = 0; y < answer.length; y++){
        if(answer[y] === String(k)){
            answer2.push(answer[y])
        }
    }
    return answer2.length
}