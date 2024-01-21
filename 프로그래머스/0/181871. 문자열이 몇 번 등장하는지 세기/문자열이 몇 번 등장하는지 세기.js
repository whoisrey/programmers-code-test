function solution(myString, pat) {
    let array = []
    for(let i = 0; i < myString.length; i++){
        if(myString.slice(i, i + pat.length) === pat){
            array.push(myString.slice(i, i + pat.length))
        }
    }
    return array.length
}