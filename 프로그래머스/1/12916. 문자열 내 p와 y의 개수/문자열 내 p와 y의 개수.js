function solution(s){
    let answer = s.toUpperCase().split('')
    let p = []
    let y = []
    for(let i = 0; i < s.length; i++){
        if(answer[i] === "P"){
            p.push(i)
        } 
    }
    for(let i = 0; i < s.length; i++){
        if(answer[i] === "Y"){
            y.push(i)
        } 
    }
    return p.length === y.length ? true : false
}