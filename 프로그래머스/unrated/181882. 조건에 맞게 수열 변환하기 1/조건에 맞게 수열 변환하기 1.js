function solution(arr) {
        let array = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= 50 && arr[i] % 2 === 0) {
            array.push(arr[i] / 2)
        } 
        else if(arr[i] < 50 && arr[i] % 2 !== 0) {
            array.push(arr[i] * 2)
        } 
        else {
            array.push(arr[i])
        }
    }
        return array
}