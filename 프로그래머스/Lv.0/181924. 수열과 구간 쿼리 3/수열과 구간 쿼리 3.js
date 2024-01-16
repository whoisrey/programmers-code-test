function solution(arr, queries) {
    for(let i of queries){
        let prev = arr[i[0]]
        arr[i[0]] = arr[i[1]]
        arr[i[1]] = prev
    }
    return arr
}