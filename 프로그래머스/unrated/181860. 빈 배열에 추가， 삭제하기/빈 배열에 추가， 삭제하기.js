function solution(arr, flag) {
    let array = []
    for(let i = 0; i < flag.length; i++){
        if(flag[i]){
            for(let j = 0; j < arr[i] * 2; j++){
               array.push(arr[i])
            }
        } else if(!flag[i]){
            for(let k = 0; k < arr[i]; k++){
            array.pop()    
            }
        }
    }
    return array
}