function solution(my_string) {
    const array = my_string.split(' ');
    let answer = Number(array[0]);
    for(let i = 0; i < array.length; i++){
        if(array[i] === "-"){
            answer -= parseInt(array[i + 1])
        } else if(array[i] === "+"){
            answer += parseInt(array[i + 1])
        }  
    }
    return answer
}