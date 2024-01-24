function solution(arr) {
    let array = []
    let none = [-1]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 2){
            array.push(i)
        }
    }
    if(array.length === 0){
        return [-1]
    } else if(array.length === 1){
        return [arr[array[0]]]
    } else {
        return arr.slice(array[0], array[array.length - 1] + 1)
    }
}