function solution(n) {
    let array = []
    for(let i = 1; i <= n; i++){
        array.push(i)
    }
    let b = array.map((v, i) => {
        let answer = []
        for(let j = 1; j <= v; j++){
            if(v % j === 0){
                answer.push(j)
            }
        }
        return answer
    })
    let c = []
    for(let k = 0; k < b.length; k++){
        if(b[k].length > 2){
            c.push(b[k])
        }
    }
    return c.length
}