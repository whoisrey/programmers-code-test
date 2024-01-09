function solution(my_string) {
    // let arr = [...my_string]
    // let lastIndex = arr.length - 1
    // let array = []
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = 0; j < arr.length; j++){
    //         if(i !== j){
    //             if(arr[i] == arr[j]){
    //                 arr.splice(j, 1)
    //             }
    //         }
    //     }
    // }
    // return arr.join('')
    let uniqueChar = new Set(my_string)
    let resultString = [...uniqueChar].join('')
    return resultString
}