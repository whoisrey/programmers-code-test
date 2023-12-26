function solution(a, d, included) {
    let array = []
    for(let i = 0; i < included.length; i++){
        if(included[i]){
            array.push(a + i * d )
        }
    }
    return array.reduce((a, b) => a + b)
}