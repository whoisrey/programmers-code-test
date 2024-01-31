function solution(q, r, code) {
    let array = []
    for(let i = 0; i < code.length; i++){
        if(i % q === r){
            array.push(code[i])
        }
    }
    return array.join('')
}