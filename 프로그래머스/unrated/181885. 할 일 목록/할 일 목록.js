function solution(todo_list, finished) {
    let array = []
    for(let i = 0; i < todo_list.length; i++){
        if(finished[i] === false){
            array.push(todo_list[i])
        }
    }
    return array
}