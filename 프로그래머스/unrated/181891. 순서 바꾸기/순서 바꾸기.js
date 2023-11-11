function solution(num_list, n) {
    let array = []
    let answer = []
    let answer2 = ""
    for(let i = n; i < num_list.length; i++){
        array.push(num_list[i])
    }
    for(let j = 0; j < n; j++){
        answer.push(num_list[j])
    }
    for(let k = 0; k < answer.length; k++){
        array.push(answer[k])
    }
    return array
}