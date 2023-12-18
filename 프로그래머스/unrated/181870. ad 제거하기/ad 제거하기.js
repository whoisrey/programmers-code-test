function solution(strArr) {
    let array = []
    for(let i = 0; i < strArr.length; i++){
        if(!strArr[i].includes('ad')){
            array.push(strArr[i])
        }
    }
    return array
}