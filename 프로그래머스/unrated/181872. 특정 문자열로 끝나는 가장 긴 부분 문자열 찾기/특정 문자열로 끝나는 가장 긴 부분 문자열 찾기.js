function solution(myString, pat) {
    let array = []
    for(let i = myString.length - 1; 0 <= i; i--){
        if(myString[i] == pat[pat.length - 1]){
            array.push(i)
        }
    }
    
    let answer = []
    for(let j = 0; j < array[0] + 1; j++){
        answer.push(myString[j])
    }
    return answer.join('')
}