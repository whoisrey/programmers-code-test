function solution(arr) {
    let length = arr.length
    let array = []
    for(let i = 0; i < 1000; i++){
        if(2 ** i < length){
            array.push(i)
        } if(2 ** i === length){
            return arr
        }
    }
    let num = array[array.length - 1] + 1
    let answer = []
    for(let j = arr.length; j < 2 ** num; j++){
        arr.push(0)
    }
    return arr
}