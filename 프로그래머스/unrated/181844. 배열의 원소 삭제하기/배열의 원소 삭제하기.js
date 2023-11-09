function solution(arr, delete_list) {
    let array = []
    for(let i = 0; i < arr.length; i++){
        if(delete_list.includes(arr[i]) === false){
            array.push(arr[i])
        }
    }
    return array
}