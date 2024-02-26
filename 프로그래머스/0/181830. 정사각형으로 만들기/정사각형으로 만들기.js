function solution(arr) {
    let arrLength = arr.length
    let zeroLength = arr[0].length
    if(arrLength > zeroLength) {
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arrLength - zeroLength; j++){                
                arr[i].push(0)
            }
        }
        return arr
    }
    if(arrLength < zeroLength) {
        let newArr = new Array(zeroLength).fill(0)
        for(let i = arrLength; i < zeroLength; i++){
            arr.push(newArr)
        }
        return arr
    }
    if(arrLength === zeroLength) {
        return arr
    }
}