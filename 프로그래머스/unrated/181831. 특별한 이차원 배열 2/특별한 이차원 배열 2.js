function solution(arr) {
    let array = []
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == arr[j][i]){
                array.push(1)
            } else {
                array.push(0)
            }
        }
    }
    return array.reduce((a, b) => a + b) == array.length ? 1 : 0
}