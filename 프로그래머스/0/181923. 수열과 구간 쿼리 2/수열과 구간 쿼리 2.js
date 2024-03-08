function solution(arr, queries) {
    let array = [];
    let answer = [];
    for(let i of queries){
        for(let j = i[0]; j <= i[1]; j++){
            if(arr[j] > i[2]){
                array.push(arr[j])
            }
        }
        array.length === 0 ? answer.push(-1) : answer.push(Math.min(...array));
        array = [];
    }
    return answer
}