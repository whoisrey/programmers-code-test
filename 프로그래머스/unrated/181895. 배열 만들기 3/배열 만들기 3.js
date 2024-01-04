function solution(arr, intervals) {
    let array = []
    for(let i = intervals[0][0]; i <= intervals[0][1]; i++){
        array.push(arr[i])
    }
    for(let j = intervals[1][0]; j <= intervals[1][1]; j++){
        array.push(arr[j])
    }
    return array 
}